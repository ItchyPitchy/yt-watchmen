<script lang="ts">
import { defineComponent, inject } from "vue"
import { addDoc, collection, doc, endBefore, getDoc, getDocs, getFirestore, limit, limitToLast, onSnapshot, orderBy, query, QueryConstraint, QueryDocumentSnapshot, startAfter, Timestamp, where, type DocumentData, type Unsubscribe } from "firebase/firestore"
import type { Store } from "@/main"
import RoomList from "../Rooms/RoomList.vue"
import ContentSlideEffect from "../common/ContentSlideEffect.vue"

export interface Room {
  host: string,
  name: string,
  videoId: string | null,
  state: "playing" | "paused",
  time: number,
  rate: number,
  createdAt: number,
}

export interface Message {
  senderId: string,
  senderName: string,
  text: string,
}

export type RoomExtended = Room & {
  id: string,
}

interface UserBasedQueryConstraints extends Map<'onPage' | 'onSearch' | 'onType', QueryConstraint[]> {}

interface State {
  unsubscribeOnRoomsValue: Unsubscribe | null,
  unsubscribeOnMemberByRoom: { [roomId: string]: Unsubscribe },
  roomName: string,
  type: "private" | "public",
  rooms: RoomExtended[],
  membersByRoom: { [roomId: string]: number },
  hostByRoom: { [roomId: string]: string },
  hover: boolean,
  firstVisible: QueryDocumentSnapshot<DocumentData> | null,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null,
  userBasedQueryConstraints: UserBasedQueryConstraints,
  search: string,
}

const db = getFirestore()
const pageSize = 2

export default defineComponent({
  setup() {
    return {
      store: inject('store') as Store,
    }
  },
  data(): State {
    return {
      unsubscribeOnRoomsValue: null,
      unsubscribeOnMemberByRoom: {},
      roomName: "",
      type: "private",
      rooms: [],
      membersByRoom: {},
      hostByRoom: {},
      hover: false,
      firstVisible: null,
      lastVisible: null,
      userBasedQueryConstraints: new Map(),
      search: '',
    }
  },
  watch: {
    "rooms": {
      handler(toRooms: RoomExtended[], fromRooms: RoomExtended[]) {
        // Remove listeners on rooms that's not going to be displayed
        const noLongerDisplayedRooms = fromRooms.filter((fromRoom) => !toRooms.some((toRoom) => toRoom.id === fromRoom.id))
        noLongerDisplayedRooms.forEach((room) => this.unsubscribeOnMemberByRoom[room.id]?.())

        // Add listeners on rooms that aren't displayed
        const newRooms = toRooms.filter((toRoom) => !fromRooms.some((fromRoom) => fromRoom.id === toRoom.id))

        newRooms.forEach((room) => {
          // This would never happen I think but we unsubscribe just in case
          this.unsubscribeOnMemberByRoom[room.id]?.()

          const roomMembersRef = collection(db, 'rooms', `${room.id}`, 'members')

          this.unsubscribeOnMemberByRoom[room.id] = onSnapshot(roomMembersRef, async (membersSnapshot) => {
            const onlineMembers = membersSnapshot.docs.length
            this.membersByRoom[room.id] = onlineMembers
          })
        })

        toRooms.forEach(async (room) => {
          // We don't need to fetch user information again if we already have it
          if (!this.hostByRoom[room.id]) {
            const hostUserRef = doc(db, 'users', `${room.host}`)
            const hostUserSnapshot = await getDoc(hostUserRef)
  
            if (hostUserSnapshot.exists()) {
              this.hostByRoom[room.id] = hostUserSnapshot.data().displayName
            } else {
              this.hostByRoom[room.id] = 'host not found'
            }
          }
        })
      }
    },
    "search": {
      handler(toInput: string) {
        this.userBasedQueryConstraints.set('onSearch', [where('name', '>=', toInput), where('name', '<=', toInput + '\uf8ff')])

        this.fetchRooms()
      }
    },
  },
  created() {
    this.fetchRooms()
  },
  unmounted() {
    if (this.unsubscribeOnRoomsValue)
      this.unsubscribeOnRoomsValue()
  },
  methods: {
    async onCreateRoom() {
      const roomId = await this.createRoom()

      this.$router.push(`/rooms/${roomId}`)
    },
    async createRoom() {
      const roomsRef = collection(db, 'rooms')

      const newRoomRef = await addDoc(roomsRef, {
        host: this.store.auth.userId,
        name: this.roomName,
        type: this.type,
        videoId: null,
        rate: 1,
        time: 0,
        state: "paused",
        createdAt: Timestamp.now().valueOf(),
      })

      return newRoomRef.id
    },
    changePage(go: 'previous' | 'next') {
      if (this.lastVisible) {
        if (go === 'previous') {
          this.userBasedQueryConstraints.set('onPage', [endBefore(this.firstVisible), limitToLast(pageSize)])
        }
  
        if (go === 'next') {
          this.userBasedQueryConstraints.set('onPage', [
            startAfter(this.lastVisible), limit(pageSize)
          ])
        }
      } else {
        this.userBasedQueryConstraints.delete('onPage')
      }

      this.fetchRooms()
    },
    switchTab(tab: 'private' | 'public') {
      this.userBasedQueryConstraints.set('onType', [where('type', '==', `${tab}`)])

      this.fetchRooms()
    },
    async fetchRooms() {
      const roomsRef = query(
        collection(db, 'rooms'),
        ...(this.userBasedQueryConstraints.has('onSearch') ? [orderBy('name')] : []),
        orderBy('createdAt', 'desc'),
        ...Array.from(this.userBasedQueryConstraints.values()).flatMap((constraints) => constraints),
        ...(!this.userBasedQueryConstraints.has('onPage') ? [limit(pageSize)] : []),
      )

      const documentSnapshots = await getDocs(roomsRef)
      
      if (documentSnapshots.docs.length === 0) return

      this.firstVisible = documentSnapshots.docs[0]
      this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
      
      if (this.unsubscribeOnRoomsValue) this.unsubscribeOnRoomsValue()

      this.unsubscribeOnRoomsValue = onSnapshot(roomsRef, async (roomsSnapshot) => {
        const rooms = roomsSnapshot.docs.filter((roomSnapshot) => roomSnapshot.exists())
        
        this.rooms = rooms.map((roomSnapshot) => {
          const roomData = roomSnapshot.data() as Room

          return({
            id: roomSnapshot.id,
            ...roomData,
          })
        })
      })
    }
  },
  components: { RoomList, ContentSlideEffect }
})
</script>

<template>
  <div class="page-wrapper">
    <p @click="changePage('previous')">Previous</p>
    <p @click="changePage('next')">Next</p>
    <p @click="switchTab('public')">public</p>
    <p @click="switchTab('private')">private</p>
    <input v-model="search" />
    <div class="container">
      <div>
        <div class="create-room-wrapper">
          <ContentSlideEffect :active="hover">
            <template v-slot:main-content>
              <form @submit.prevent>
                <div class="input-container">
                  <label>Room name</label>
                  <input type="text" v-model="roomName" required />
                </div>
                <div class="input-container">
                  <input type="radio" id="private" value="private" v-model="type">
                  <label for="private">Private</label>
                  <input type="radio" id="public" value="public" v-model="type">
                  <label for="public">Public</label>
                </div>
              </form>
            </template>
            <template v-slot:slide-content>
              <div class="confirm-create-wrapper">
                <p>Are you sure you want to create <span class="type">{{ type }}</span> room named "<span class="room-name">{{
                    roomName
                }}</span>"?</p>
              </div>
            </template>
          </ContentSlideEffect>
          <button @click="onCreateRoom" @mouseover="hover = true" @mouseleave="hover = false">Create room</button>
        </div>
      </div>
      <div class="room-list-wrapper">
        <RoomList v-if="rooms.length" :rooms="rooms" :membersByRoom="membersByRoom" :hostByRoom="hostByRoom" />
        <p v-else>No rooms found</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.page-wrapper {
  flex: 1;
  padding: 100px;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (min-width: 1000px) {
    flex-direction: row;

    .create-room-wrapper {
      position: sticky;
      top: 50px;
    }
  }

  &>div {
    flex: 1;
  }

  .create-room-wrapper {
    background-color: $color-primary;
    margin-bottom: 50px;
  }

  .confirm-create-wrapper {
    width: 100%;
    height: 100%;
    background-color: $color-primary;
    color: white;
    padding: 20px;

    p {
      font-size: 24px;
      font-weight: 400;
    }

    .type {
      font-weight: 700;
    }

    .room-name {
      font-weight: 700;
    }
  }

  button {
    text-align: center !important;
    width: 100%;
    text-align: right;
    font-size: 28px;
    font-family: 'Poppins';
    font-weight: 700;
    background-color: $color-primary;
    color: white;
    padding: 0px;

    &:hover {
      background-color: white;
      color: $color-primary;
      cursor: pointer;
    }
  }
}

input[type=text] {
  flex: 1;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 1px;
  background-color: white;
  padding: 20px;

  label {
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }
}
</style>

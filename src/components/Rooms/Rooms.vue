<script lang="ts">
import { defineComponent, inject } from "vue"
import { addDoc, collection, doc, getDoc, getFirestore, onSnapshot, setDoc, type Unsubscribe } from "firebase/firestore"
import type { Store } from "@/main"
import RoomList from "../Rooms/RoomList.vue"
import ContentSlideEffect from "../common/ContentSlideEffect.vue"

export interface Room {
  host: string,
  name: string,
  videoId?: string,
  state: "playing" | "paused",
  time: number,
  rate: number,
  members: { [userId: string]: { isOnline: boolean } },
  messages: Message[],
}

export interface Message {
  senderId: string,
  senderName: string,
  text: string,
}

export type RoomExtended = Room & {
  id: string,
  hostDisplayName: string,
  membersOnline: number,
}

interface State {
  unsubscribeOnRoomsValue: Unsubscribe | null,
  roomMembersUnsubscribes: { [key: string]: Unsubscribe },
  roomName: string,
  type: "private" | "public",
  rooms: RoomExtended[],
  hover: boolean,
  lastVisible: string | null,
  search: string,
}

const db = getFirestore()

export default defineComponent({
  setup() {
    return {
      store: inject('store') as Store,
    }
  },
  data(): State {
    return {
      unsubscribeOnRoomsValue: null,
      roomMembersUnsubscribes: {},
      roomName: "",
      type: "private",
      rooms: [],
      hover: false,
      lastVisible: null,
      search: '',
    }
  },
  watch: {
    // "search": {
    //   handler(toInput: string) {
    //     const userBasedQueriesConstraints = [
    //     // ...(
    //     //     go === 'next' ? [startAfter(this.lastVisible)]
    //     //   : go === 'previous' ? [endAt(this.lastVisible)]
    //     //   : []
    //     // ),
    //     ...(
    //         this.search.trim() ? [
    //           orderByChild('name'),
    //           startAt(toInput.trim()),
    //           endAt(toInput.trim()+"\uf8ff")]
    //       : [orderByChild('name')]
    //     )
    //    ]

    //     this.fetchRooms(userBasedQueriesConstraints)
    //   }
    // }
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
        rate: 1,
        time: 0,
        state: "paused",
        members: {
          [this.store.auth.userId!]: {
            isOnline: false,
          },
        },
        messages: [],
      })

      return newRoomRef.id
    },
    // changePage(go?: 'previous' | 'next') {
    //    const userBasedQueriesConstraints = [
    //     ...(
    //         go === 'next' ? [startAfter(this.lastVisible)]
    //       : go === 'previous' ? [endAt(this.lastVisible)]
    //       : []
    //     ),
    //     ...(
    //         this.search.trim() ? [
    //           orderByChild('name'),
    //           startAt(this.search.trim()),
    //           endAt(this.search.trim()+"\uf8ff")
    //         ] : [
    //           orderByChild('name')
    //         ]
    //     )
    //    ]

    //   this.fetchRooms(userBasedQueriesConstraints)
    // },
    fetchRooms() {
      if (this.unsubscribeOnRoomsValue) this.unsubscribeOnRoomsValue()
        
      const roomsRef = collection(db, 'rooms')

      this.unsubscribeOnRoomsValue = onSnapshot(roomsRef, async (roomsSnapshot) => {
        const tempRooms: Omit<RoomExtended, 'hostDisplayName'>[] = roomsSnapshot.docs
          .filter((roomSnapshot) => roomSnapshot.exists())
          .map((roomSnapshot) => {
            const roomData = roomSnapshot.data() as Room

            return({
              id: roomSnapshot.id,
              membersOnline: Object.values(roomData.members).reduce((membersOnline, member) => member.isOnline === true ? membersOnline + 1 : membersOnline, 0),
              ...roomData,
            })
          })

        const rooms: RoomExtended[] = []
       
       // TODO: find a better way of displaying host username
        for (const room of tempRooms) {
          const hostUserRef = doc(db, 'users', `${room.host}`)
          const hostUserSnapshot = await getDoc(hostUserRef)

          if (hostUserSnapshot.exists()) {
            rooms.push({
              ...room,
              hostDisplayName: hostUserSnapshot.data().displayName,
            })
          } else {
            rooms.push({
              ...room,
              hostDisplayName:'host not found',
            })
          }
        }

        this.rooms = rooms
      })
    }
  },
  components: { RoomList, ContentSlideEffect }
})
</script>

<template>
  <div class="page-wrapper">
    <!-- <p @click="changePage('previous')">Previous</p>
    <p @click="changePage('next')">Next</p> -->
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
        <RoomList v-if="rooms.length" :rooms="rooms" />
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

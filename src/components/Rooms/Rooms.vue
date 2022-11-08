<script lang="ts">
import { defineComponent, inject } from "vue"
import { collection, doc, endBefore, getDoc, getDocs, getFirestore, limit, limitToLast, onSnapshot, orderBy, query, QueryConstraint, QueryDocumentSnapshot, startAfter, where, type DocumentData, type Unsubscribe } from "firebase/firestore"
import type { Store } from "@/main"
import RoomList from "../Rooms/RoomList.vue"
import ContentSlideEffect from "../common/ContentSlideEffect.vue"
import CreateRoom from "./CreateRoom.vue"
import ColorSlideEffectVue from "../common/ColorSlideEffect.vue"

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

interface UserBasedQueryConstraints extends Map<'onPage' | 'onSearch' | 'onType', QueryConstraint[]> { }

interface State {
  unsubscribeOnRoomsValue: Unsubscribe | null,
  unsubscribeOnMemberByRoom: { [roomId: string]: Unsubscribe },
  unsubscribeOnPermissionsValue: Unsubscribe | null,
  roomPermissionsRoomIds: string[],
  tab: "private" | "public",
  isSwitchingPage: boolean,
  rooms: RoomExtended[],
  membersByRoom: { [roomId: string]: number },
  hostByRoom: { [roomId: string]: string },
  firstVisible: QueryDocumentSnapshot<DocumentData> | null,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null,
  userBasedQueryConstraints: UserBasedQueryConstraints,
  search: string,
  previousButtonHover: boolean,
  nextButtonHover: boolean,
  publicButtonHover: boolean,
  privateButtonHover: boolean,
}

const db = getFirestore()
const pageSize = 7

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
      unsubscribeOnPermissionsValue: null,
      roomPermissionsRoomIds: [],
      tab: 'public',
      isSwitchingPage: false,
      rooms: [],
      membersByRoom: {},
      hostByRoom: {},
      firstVisible: null,
      lastVisible: null,
      userBasedQueryConstraints: new Map([
        ['onType', [where('type', '==', 'public')]]
      ]),
      search: '',
      previousButtonHover: false,
      nextButtonHover: false,
      publicButtonHover: false,
      privateButtonHover: false,
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
        if (toInput.length > 0) {
          this.userBasedQueryConstraints.set('onSearch', [where('name', '>=', toInput), where('name', '<=', toInput + '\uf8ff')])
          this.userBasedQueryConstraints.delete('onPage')
          this.firstVisible = null
          this.lastVisible = null
        } else {
          this.userBasedQueryConstraints.delete('onSearch')
          this.userBasedQueryConstraints.delete('onPage')
          this.firstVisible = null
          this.lastVisible = null
        }

        this.fetchRooms()
      }
    },
    "tab": {
      handler(toTab: 'public' | 'private') {
        if (toTab === 'private') {
          this.userBasedQueryConstraints.set('onType', [where('type', '==', `${toTab}`), where('permissionId', 'in', this.roomPermissionsRoomIds.length ? this.roomPermissionsRoomIds : [''])])
        }

        if (toTab === 'public') {
          this.userBasedQueryConstraints.set('onType', [where('type', '==', `${toTab}`)])
        }

        this.userBasedQueryConstraints.delete('onPage')

        this.fetchRooms()
      }
    },
    "roomPermissionsRoomIds": {
      handler() {
        if (this.tab === 'private') {
          this.userBasedQueryConstraints.set('onType', [where('type', '==', `${this.tab}`), ...(this.roomPermissionsRoomIds.length > 0 ? [where('key', 'in', this.roomPermissionsRoomIds)] : [])])
        }

        this.fetchRooms()
      }
    }
  },
  async created() {
    this.fetchRooms()

    const permissionsRef = collection(db, 'permissions')
    const yourRoomPermissionsRef = query(permissionsRef, where('userId', '==', this.store.auth.userId))

    this.unsubscribeOnPermissionsValue = onSnapshot(yourRoomPermissionsRef, (yourRoomPermissionsSnapshot) => {
      this.roomPermissionsRoomIds = yourRoomPermissionsSnapshot.docs.map((yourRoomPermissions) => yourRoomPermissions.data().roomPermissionId)
    })

  },
  unmounted() {
    if (this.unsubscribeOnRoomsValue) {
      this.unsubscribeOnRoomsValue()
    }

    if (this.unsubscribeOnPermissionsValue) {
      this.unsubscribeOnPermissionsValue()
    }
  },
  methods: {
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

      this.isSwitchingPage = true
      this.fetchRooms()
    },
    async fetchRooms() {
      const roomsRef = query(
        collection(db, 'rooms'),
        ...(this.userBasedQueryConstraints.has('onSearch') ? [orderBy('name', 'asc')] : []),
        orderBy('createdAt', 'desc'),
        ...Array.from(this.userBasedQueryConstraints.values()).flat(),
        ...(!this.userBasedQueryConstraints.has('onPage') ? [limit(pageSize)] : []),
      )

      const documentSnapshots = await getDocs(roomsRef)

      if (documentSnapshots.docs.length === 0 && this.isSwitchingPage) return

      this.isSwitchingPage = false
      this.firstVisible = documentSnapshots.docs[0] || null
      this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1] || null

      if (this.unsubscribeOnRoomsValue) this.unsubscribeOnRoomsValue()

      this.unsubscribeOnRoomsValue = onSnapshot(roomsRef, async (roomsSnapshot) => {
        const rooms = roomsSnapshot.docs.filter((roomSnapshot) => roomSnapshot.exists())

        this.rooms = rooms.map((roomSnapshot) => {
          const roomData = roomSnapshot.data() as Room

          return ({
            id: roomSnapshot.id,
            ...roomData,
          })
        })
      })
    }
  },
  components: { RoomList, ContentSlideEffect, CreateRoom, ColorSlideEffectVue }
})
</script>

<template>
  <div class="page-wrapper">
    <CreateRoom />
    <div class="rooms-wrapper">
      <div class="container">
        <div class="room-list-wrapper">
          <div class="input-container" :style="{ marginBottom: '40px' }">
            <ColorSlideEffectVue :active="previousButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="() => changePage('previous')" @mouseover="previousButtonHover = true"
                  @mouseleave="previousButtonHover = false">Previous</button>
              </template>
              <p @click="() => changePage('previous')">Previous</p>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="nextButtonHover" :inactive-bg-color="'#6200ff'" :inactive-text-color="'white'"
              :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="() => changePage('next')" @mouseover="nextButtonHover = true"
                  @mouseleave="nextButtonHover = false">Next</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="publicButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="tab = 'public'" @mouseover="publicButtonHover = true"
                  @mouseleave="publicButtonHover = false">Public</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="privateButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="tab = 'private'" @mouseover="privateButtonHover = true"
                  @mouseleave="privateButtonHover = false">Private</button>
              </template>
            </ColorSlideEffectVue>
            <input v-model="search" placeholder="Search" />
          </div>
          <div :style="{ flexGrow: 1 }">
            <RoomList v-if="rooms.length" :rooms="rooms" :membersByRoom="membersByRoom" :hostByRoom="hostByRoom"
              @change-page="changePage" @switch-tab="switchTab" />
            <p v-else>No rooms found</p>
          </div>
          <div class="input-container" :style="{ marginTop: '40px' }">
            <ColorSlideEffectVue :active="previousButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="() => changePage('previous')" @mouseover="previousButtonHover = true"
                  @mouseleave="previousButtonHover = false">Previous</button>
              </template>
              <p @click="() => changePage('previous')">Previous</p>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="nextButtonHover" :inactive-bg-color="'#6200ff'" :inactive-text-color="'white'"
              :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="() => changePage('next')" @mouseover="nextButtonHover = true"
                  @mouseleave="nextButtonHover = false">Next</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="publicButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="tab = 'public'" @mouseover="publicButtonHover = true"
                  @mouseleave="publicButtonHover = false">Public</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="privateButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="tab = 'private'" @mouseover="privateButtonHover = true"
                  @mouseleave="privateButtonHover = false">Private</button>
              </template>
            </ColorSlideEffectVue>
            <input v-model="search" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.page-wrapper {
  display: flex;
}

.rooms-wrapper {
  flex: 1;
  padding: 100px;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  .room-list-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

.input-container {
  display: flex;
  height: 40px;
  border-left: 1px solid white;
  border-right: 1px solid white;

  &>* {
    flex: 1;
  }
}

button {
  display: block;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  padding: 5px 10px;
  border: 1px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background: none;
  color: inherit;
}

input {
  height: 100%;
  border-radius: 0;
  border: none;
  flex: 1;

  &:focus {
    outline: none;
  }
}
</style>

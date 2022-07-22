<script lang="ts">
import { defineComponent } from "vue"
import { getAuth } from "firebase/auth"
import { getDatabase, ref, push, set, type Unsubscribe, onValue, get, child } from "firebase/database"
import RoomList from "./RoomList.vue"
import ContentSlideEffect from "../common/ContentSlideEffect.vue"

interface Room {
  id: string,
  host: string,
  hostUserName: string,
  name: string,
  videoId?: string,
  state: "playing" | "paused",
  time: number,
  rate: number,
  members?: { [key: string]: boolean },
  online: number,
}

interface State {
  unsubscribeOnRoomsValue: Unsubscribe | null,
  roomName: string,
  type: "private" | "public",
  rooms: Room[],
  hover: boolean,
}

const auth = getAuth()
const db = getDatabase()

export default defineComponent({
  data(): State {
    return {
      unsubscribeOnRoomsValue: null,
      roomName: "",
      type: "private",
      rooms: [],
      hover: false,
    }
  },
  created() {
    const dbRef = ref(db)
    const roomsRef = ref(db, "rooms")
    this.unsubscribeOnRoomsValue = onValue(roomsRef, async (snapshot) => {
      if (snapshot.exists()) {
        const tempRooms: Array<Omit<Room, "hostUserName">> = []

        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.exists()) {
            const roomData: Omit<Room, "id" | "online" | "hostUserName"> = childSnapshot.val()
            const onlineRoomMembers = roomData.members
              ? Object.entries(roomData.members).filter(([userId, isOnline]) => {
                return isOnline
              }).length
              : 0

            tempRooms.push({
              id: childSnapshot.key!,
              online: onlineRoomMembers,
              ...roomData,
            })
          }

        })

        const rooms: Room[] = []


        // TODO: find a better way of displaying host username
        for (const room of tempRooms) {
          const hostUserSnapshot = await get(child(dbRef, `users/${room.host}`))

          if (hostUserSnapshot.exists()) {
            rooms.push({
              ...room,
              hostUserName: hostUserSnapshot.val().userName,
            })
          } else {
            throw new Error("host user not found")
          }
        }

        this.rooms = rooms
      }
    })
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
      const roomsRef = ref(db, "rooms")
      const newRoomRef = await push(roomsRef)
      await set(newRoomRef, {
        host: auth.currentUser!.uid,
        name: this.roomName,
        rate: 1,
        time: 0,
      })
      return newRoomRef.key
    }
  },
  components: { RoomList, ContentSlideEffect }
})
</script>

<template>
  <div class="page-wrapper">
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

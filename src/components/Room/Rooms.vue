<script lang="ts">
import { defineComponent } from "vue";
import { getAuth } from "firebase/auth"
import { getDatabase, ref, push, set, type Unsubscribe, onValue } from "firebase/database";
import RoomList from "./RoomList.vue";

interface Room {
  id: string,
  host: string,
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
    };
  },
  created() {
    const roomsRef = ref(db, "rooms");
    this.unsubscribeOnRoomsValue = onValue(roomsRef, (snapshot) => {
      if (snapshot.exists()) {
        const rooms: Room[] = [];
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.exists()) {
            const roomData: Omit<Room, "id" | "online"> = childSnapshot.val();
            const onlineRoomMembers = roomData.members
              ? Object.entries(roomData.members).filter(([userId, isOnline]) => {
                return isOnline;
              }).length
              : 0;
            rooms.push({
              id: childSnapshot.key!,
              online: onlineRoomMembers,
              ...roomData,
            });
          }
        });
        this.rooms = rooms;
      }
    });
  },
  unmounted() {
    if (this.unsubscribeOnRoomsValue)
      this.unsubscribeOnRoomsValue();
  },
  methods: {
    async onCreateRoom() {
      const roomId = await this.createRoom();
      this.$router.push(`/rooms/${roomId}`);
    },
    async createRoom() {
      const roomsRef = ref(db, "rooms");
      const newRoomRef = await push(roomsRef);
      await set(newRoomRef, {
        host: auth.currentUser!.uid,
        name: this.roomName,
        rate: 1,
        time: 0,
      });
      return newRoomRef.key;
    }
  },
  components: { RoomList }
})
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <div>
        <div class="create-room-wrapper">
          <form @submit.prevent="onCreateRoom">
            <div class="input-container">
              <label>Room name</label>
              <input v-model="roomName" required />
            </div>
            <div class="input-container">
              <input type="radio" id="private" value="private" v-model="type">
              <label for="private">Private</label>
              <input type="radio" id="public" value="public" v-model="type">
              <label for="public">Public</label>
            </div>
            <button type="submit">Create room</button>
          </form>
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
  max-width: 800px;
  display: flex;
  flex-wrap: nowrap;
  gap: 5%;

  .create-room-wrapper {
    position: sticky;
    top: 50px;
    padding: 1px;
    background-color: $color-primary;

    button {
      text-align: center !important;
      width: 100%;
      text-align: right;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 600;
      background-color: $color-primary;
      color: white;
      padding: 10px;

      &:hover {
        background-color: white;
        color: $color-primary;
        cursor: pointer;
      }
    }
  }

  .room-list-wrapper {
    flex-basis: 60%;
  }
}

.input-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1px;
  background-color: white;
  padding: 10px;

  label {
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }

}


</style>

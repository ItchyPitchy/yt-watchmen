<script lang="ts">
  import { defineComponent } from "vue";
  import { getAuth } from "firebase/auth"
  import { getDatabase, ref, push, set, type Unsubscribe, onValue } from "firebase/database";

  interface Room {
    id: string,
    host: string,
    name: string,
    videoId?: string,
    state: "playing" | "paused",
    time: number,
    rate: number,
  }

  interface State {
    unsubscribeOnRoomsValue: Unsubscribe | null,
    roomName: string,
    rooms: Room[],
  }

  const auth = getAuth()
  const db = getDatabase()

  export default defineComponent({
    data(): State {
      return {
        unsubscribeOnRoomsValue: null,
        roomName: "",
        rooms: [],
      }
    },
    created() {
      const roomsRef = ref(db, "rooms")

      this.unsubscribeOnRoomsValue = onValue(roomsRef, (snapshot) => {
        if (snapshot.exists()) {
          const rooms: Room[] = [];

          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.exists()) {
              const roomData: Omit<Room, "id"> = childSnapshot.val()

              rooms.push({
                id: childSnapshot.key!,
                ...roomData,
              })
            }

          })

          this.rooms = rooms
        }
      })
    },
    unmounted() {
      if (this.unsubscribeOnRoomsValue) this.unsubscribeOnRoomsValue()
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
    }
  })
</script>

<template>
  <div class="page-wrapper">
    <input v-model="roomName" placeholder="room name" required />
    <button @click="onCreateRoom">Create room</button>
    <ul v-if="rooms.length !== 0">
      <li v-for="room of rooms">
        <RouterLink :to="{ name: 'room', params: { id: room.id } }">{{ room.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
   .page-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
</style>

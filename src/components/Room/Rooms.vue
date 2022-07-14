<script lang="ts">
  import { defineComponent } from "vue";
  import { getAuth } from "firebase/auth"
  import { getDatabase, ref, push, set } from "firebase/database";

  export default defineComponent({
    data() {
      return {
        userName: "",
        roomName: "",
      }
    },
    methods: {
      async onCreateRoom() {
        const roomId = await this.createRoom()

        this.$router.push(`/rooms/${roomId}`)
      },
      async createRoom() {
        const db = getDatabase()
        const auth = getAuth()
        const roomsRef = ref(db, "rooms")
        const newRoomRef = await push(roomsRef)

        console.log("newRoomRef", newRoomRef)
        console.log("userName", this.userName)
        console.log("roomName", this.roomName)

        await set(newRoomRef, {
          host: auth.currentUser.uid,
          name: this.roomName,
        })

        const roomMembersRef = ref(db, "members" + `/${newRoomRef.key}/`)

        await push(roomMembersRef, {
          userId: auth.currentUser.uid,
          userName: this.userName,
        })

        return newRoomRef.key
      }
    }
  })
</script>

<template>
  <div class="page-wrapper">
    <input v-model="userName" placeholder="username" required />
    <input v-model="roomName" placeholder="room name" required />
    <button @click="onCreateRoom">Create room</button>
  </div>
</template>

<style>
   .page-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>

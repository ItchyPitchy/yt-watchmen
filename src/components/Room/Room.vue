<script lang="ts">
import { defineComponent, inject } from "vue"
import { addDoc, collection, doc, getFirestore, onSnapshot, setDoc, updateDoc, type Unsubscribe } from "firebase/firestore"
import type { Store } from "@/main"
import ColorSlideEffect from "../common/ColorSlideEffect.vue"
import Video from "./Video.vue"
import Chat from "./Chat.vue"

const db = getFirestore()

interface Room {
  id: string,
  host: string,
  name: string,
  videoId?: string,
  state: "playing" | "paused",
  time: number,
  rate: number,
  members?: { [key: string]: boolean },
}

interface State {
  videoUrlInput: string,
  roomData: Room | null,
  loadButtonHover: boolean,
  unsubscribeOnRoomValue: Unsubscribe | null,
}

export default defineComponent({
  setup() {
    return {
      store: inject('store') as Store,
    }
  },
  data(): State {
    return {
      videoUrlInput: "",
      roomData: null,
      loadButtonHover: false,
      unsubscribeOnRoomValue: null,
    }
  },
  computed: {
    roomId() {
      return this.$route.params.id as string
    },
  },
  watch: {
    'roomId': {
      async handler(toId: string | undefined, fromId: string | undefined, cleanup) {
        this.roomData = null

        if (this.unsubscribeOnRoomValue) this.unsubscribeOnRoomValue()

        if (fromId) await this.removeUserFromRoom(fromId)
        if (toId) {
          const roomRef = doc(db, 'rooms', `${toId}`)

          this.unsubscribeOnRoomValue = onSnapshot(roomRef, (snapshot) => {
            if (snapshot.exists()) {
              this.roomData = snapshot.data() as Room
            }
          })

          await this.addUserToRoom(toId)
        }

        cleanup(() => {
          if (this.unsubscribeOnRoomValue) this.unsubscribeOnRoomValue()
        })
      }
    },
  },
  created() {
    this.addUserToRoom(this.roomId)
  },
  methods: {
    async addUserToRoom(roomId: string) {
      const roomMembersMeRef = doc(db, 'rooms', `${roomId}`, 'members', `${this.store.auth.userId!}`)

      await setDoc(roomMembersMeRef, {
        isOnline: true,
      })
    },
    async removeUserFromRoom(roomId: string) {
      const roomMembersMeRef = doc(db, 'rooms', `${roomId}`, 'members', `${this.store.auth.userId!}`)

      await setDoc(roomMembersMeRef, {
        isOnline: false,
      })
    },
    async onPlayerReady() {
      const roomRef = doc(db, 'rooms', `${this.roomId}`)

      this.unsubscribeOnRoomValue = onSnapshot(roomRef, (snapshot) => {
        if (snapshot.exists()) {
          this.roomData = snapshot.data() as Room
        }

        console.log("roomchange", snapshot.data())
      })
    },
    async onPlayerStateChange(payload: { state: 'playing' | 'paused', time: number }) {
      const roomRef = doc(db, 'rooms', `${this.roomId}`)

      await updateDoc(roomRef, payload)

      // const roomRef = ref(db, "rooms" + `/${this.roomId}`)

      // update(roomRef, payload)
    },
    async onPlayerPlaybackRateChange(payload: { rate: number }) {
      const roomRef = doc(db, 'rooms', `${this.roomId}`)

      await updateDoc(roomRef, payload)

      // const roomRef = ref(db, "rooms" + `/${this.roomId}`)

      // update(roomRef, payload)
    },
    async loadVideo() {
      const url = new URL(this.videoUrlInput)
      const urlParams = new URLSearchParams(url.search)

      if (urlParams.has("v")) {
        const videoId = urlParams.get("v")

        const roomRef = doc(db, 'rooms', `${this.roomId}`)

        await updateDoc(roomRef, {
          videoId: videoId,
        })
        
        // const roomVideoIdRef = ref(db, `rooms/${this.roomId}/videoId`)

        // await set(roomVideoIdRef, videoId)
      }
    },
  },
  components: { Video, ColorSlideEffect, Chat },
})
</script>

<template>
  <div class="page-wrapper">
    <div class="center">
      <div class="player-container">
        <div class="player-ratio-box">
          <div class="player-wrapper">
            <Video @player-ready.once="onPlayerReady" @player-state-change="onPlayerStateChange"
              :room="roomData"></Video>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-container">
      <form @submit.prevent class="load-video-container">
        <input v-model="videoUrlInput" placeholder="video url here" />
        <ColorSlideEffect :active="loadButtonHover" :inactive-bg-color="'#6200ff'" :inactive-text-color="'white'"
          :active-bg-color="'#310080'" :active-text-color="'white'">
          <template v-slot:element>
            <button @click="loadVideo" @mouseover="loadButtonHover = true" @mouseleave="loadButtonHover = false">Load
              video</button>
          </template>
        </ColorSlideEffect>
      </form>
      <Chat :roomId="roomId" />
    </div>
    <!-- </div> -->
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.page-wrapper {
  flex: 1;
  display: flex;
  max-height: 100vh;
  overflow: hidden;
}

.center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161616;
}

.player-container {
  flex: 1;
  max-width: calc(177.77vmin);
}

.player-ratio-box {
  position: relative;
  padding-bottom: 56.25%;
}

.player-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.chat-container {
  display: flex;
  flex-direction: column;
  width: 300px;

  .load-video-container {
    display: flex;
    height: 40px;
    flex-shrink: 0;

    input {
      height: 100%;
      border-radius: 0;
      border: none;
      flex: 1;

      &:focus {
        outline: none;
      }
    }

    button {
      display: block;
      height: 100%;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 600;
      padding: 5px 10px;
      border: 1px solid white;
      background: none;
      color: inherit;
    }
  }
}
</style>

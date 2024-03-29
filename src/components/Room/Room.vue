<script lang="ts">
import { defineComponent, inject } from "vue"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, query, updateDoc, where, type Unsubscribe } from "firebase/firestore"
import type { Store } from "@/main"
import ColorSlideEffect from "../common/ColorSlideEffect.vue"
import Video from "./Video.vue"
import Chat from "./Chat.vue"
import type { Room } from "../Rooms/Rooms.vue"

const db = getFirestore()

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

        if (toId) {
          const roomRef = doc(db, 'rooms', `${toId}`)

          this.unsubscribeOnRoomValue = onSnapshot(roomRef, async (snapshot) => {
            if (snapshot.exists()) this.roomData = snapshot.data() as Room
          })
        }

        cleanup(() => {
          if (this.unsubscribeOnRoomValue) this.unsubscribeOnRoomValue()
        })
      }
    },
    'roomData': {
      async handler(from: State['roomData'], to: State['roomData']) {
        if (from) await this.removeUserFromRoom(from.membersId)
        if (to) await this.addUserToRoom(to.membersId)
      }
    }
  },
  methods: {
    async addUserToRoom(membersId: string) {
      const membersRef = collection(db, `members`)

      await addDoc(membersRef, {
        userId: this.store.auth.userId,
        membersId,
      })
    },
    async removeUserFromRoom(membersId: string) {
      const membersRef = collection(db, `members`)
      const membersMeRef = query(membersRef, where('userId', '==', this.store.auth.userId), where('membersId', '==', membersId))
      const membersMeSnapshot = await getDocs(membersMeRef)

      for (const doc of membersMeSnapshot.docs) {
        await deleteDoc(doc.ref)
      }
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
    },
    async onPlayerPlaybackRateChange(payload: { rate: number }) {
      const roomRef = doc(db, 'rooms', `${this.roomId}`)

      await updateDoc(roomRef, payload)
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
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.page-wrapper {
  flex: 1;
  display: flex;
  max-height: calc(100vh - 75px);
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
  max-width: calc(166.22vmin);
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

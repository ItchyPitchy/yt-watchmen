<script lang="ts">
import type { Store } from "@/main"
import { getDatabase, onValue, push, ref, set, type Unsubscribe } from "firebase/database"
import { defineComponent, inject } from "vue"
import Video from "./Video.vue"
import ColorSlideEffect from "../common/ColorSlideEffect.vue"

const db = getDatabase()

interface Message {
  senderId: string,
  senderName: string,
  text: string,
}

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
  videoUrlInput: string,
  roomData: Room | null,
  messages: Message[],
  messageInput: string,
  sendButtonHover: boolean,
  loadButtonHover: boolean,
  unsubscribeOnValue: Unsubscribe | null,
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
      messages: [],
      messageInput: "",
      sendButtonHover: false,
      loadButtonHover: false,
      unsubscribeOnValue: null,
    }
  },
  computed: {
    roomId() {
      return this.$route.params.id
    },
  },
  created() {
    const roomMessagesRef = ref(db, `messages/${this.roomId}`)

    this.unsubscribeOnValue = onValue(roomMessagesRef, (snapshot) => {
      if (snapshot.exists()) {
        const messages: { [key: string]: Message } = snapshot.val()

        this.messages = Object.values(messages).reverse()
      }
    })
  },
  unmounted() {
    if (this.unsubscribeOnValue) this.unsubscribeOnValue()
  },
  methods: {
    async loadVideo() {
      const url = new URL(this.videoUrlInput)
      const urlParams = new URLSearchParams(url.search)

      if (urlParams.has("v")) {
        const videoId = urlParams.get("v")

        const roomVideoIdRef = ref(db, `rooms/${this.roomId}/videoId`)

        await set(roomVideoIdRef, videoId)

        // this.player?.loadVideoById(videoId)
      }
    },
    async onSendMessage() {
      const roomMessagesRef = ref(db, `messages/${this.roomId}`)

      await push(roomMessagesRef, {
        senderId: this.store.auth.userId,
        senderName: this.store.auth.userId,
        text: this.messageInput,
      })

      this.messageInput = ""
    },
  },
  components: { Video, ColorSlideEffect },
})
</script>

<template>
  <div class="page-wrapper">
    <!-- <div class="container"> -->
    <div class="wrapperr">
      <div class="player-container">
        <div class="video-ratio-box">
          <div class="player-wrapper">
            <Video></Video>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-container">
      <div class="search-container">
        <input v-model="videoUrlInput" placeholder="video url here" />
        <ColorSlideEffect :active="loadButtonHover" :inactive-bg-color="'#6200ff'" :inactive-text-color="'white'"
          :active-bg-color="'#310080'" :active-text-color="'white'">
          <template v-slot:element>
            <button @click="loadVideo"  @mouseover="loadButtonHover = true" @mouseleave="loadButtonHover = false">Load video</button>
          </template>
        </ColorSlideEffect>
      </div>
      <ul class="message-list">
        <li v-for="(message, index) of messages" class="message-item" :class="{ 'incoming-message': message.senderId !== store.auth.userId }">
          <p v-if="index === messages.length - 1 || messages[index + 1].senderId !== message.senderId" class="message-sender">{{ message.senderName }}</p>
          <div class="message-bubble">
            <p class="message-text">{{ message.text }}</p>
          </div>
        </li>
      </ul>
      <form @submit.prevent="onSendMessage" class="send-message-form">
        <input type="text" v-model="messageInput" />
        <ColorSlideEffect :active="sendButtonHover" :inactive-bg-color="'#6200ff'" :inactive-text-color="'white'"
          :active-bg-color="'#310080'" :active-text-color="'white'">
          <template v-slot:element>
            <button type="submit" @mouseover="sendButtonHover = true" @mouseleave="sendButtonHover = false">Send</button>
          </template>
        </ColorSlideEffect>
      </form>
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

// .container {
//   display: flex;
//   gap: 8px;
//   min-width: 800px;
//   background-color: $color-lightgrey;
// }

.wrapperr {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161616;

  .player-container {
    flex: 1;
    max-width: calc(177.77vmin);
  }

  .video-ratio-box {
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
}

.chat-container {
  display: flex;
  flex-direction: column;
  // background-color: $color-lightgrey;
  width: 300px;

  .search-container {
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
      // background-color: $color-primary;
      // color: white;
      padding: 5px 10px;
      border: 1px solid white;
      background: none;
      color: inherit;
    }
  }

  .message-list {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    overflow: auto;
  }

  .message-item {
    max-width: 65%;
    overflow: hidden;
    align-self: flex-end;
    flex-shrink: 0;

    .message-bubble {
      padding: 4px 10px;
      border-radius: 4px;
      background-color: $color-primary;
      color: white;
      margin-bottom: 10px;
    }

    .message-sender {
      color: $color-lightgrey;
      font-size: 12px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .message-text {
      font-size: 16px;
      word-break: break-word;
    }

    &.incoming-message {
      align-self: flex-start;
      .message-bubble {
        background-color: $color-lightgrey;
        color: $color-secondary;
      }
    }
  }


  .send-message-form {
    display: flex;
    height: 40px;
    // margin-top: 30px;
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
      // background-color: $color-primary;
      // color: white;
      padding: 5px 10px;
      border: 1px solid white;
      background: none;
      color: inherit;
    }
  }
}
</style>

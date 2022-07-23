<script lang="ts">
import { defineComponent, inject } from "vue"
import { getDatabase, onValue, push, ref, type Unsubscribe } from "firebase/database"
import type { Store } from "@/main"
import ColorSlideEffect from "../common/ColorSlideEffect.vue"

interface Message {
  senderId: string,
  senderName: string,
  text: string,
}

interface State {
  messages: Message[],
  messageInput: string,
  sendButtonHover: boolean,
  unsubscribeOnMessageValue: Unsubscribe | null,
}

const db = getDatabase()

export default defineComponent({
  setup() {
    return {
      store: inject("store") as Store,
    };
  },
  data(): State {
    return {
      messages: [],
      messageInput: "",
      sendButtonHover: false,
      unsubscribeOnMessageValue: null,
    };
  },
  props: {
    roomId: {
      type: String,
      required: false
    }
  },
  watch: {
    "roomId": {
      async handler(toId: string | undefined, _, cleanup) {
        this.messages = [];
        if (this.unsubscribeOnMessageValue)
          this.unsubscribeOnMessageValue();
        if (toId) {
          const roomMessagesRef = ref(db, `messages/${toId}`);
          this.unsubscribeOnMessageValue = onValue(roomMessagesRef, (snapshot) => {
            if (snapshot.exists()) {
              const messages: {
                [key: string]: Message;
              } = snapshot.val();
              this.messages = Object.values(messages).reverse();
            }
          });
        }
        cleanup(() => {
          if (this.unsubscribeOnMessageValue)
            this.unsubscribeOnMessageValue();
        });
      }
    },
  },
  created() {
    const roomMessagesRef = ref(db, `messages/${this.roomId}`)

    this.unsubscribeOnMessageValue = onValue(roomMessagesRef, (snapshot) => {
      if (snapshot.exists()) {
        const messages: {
          [key: string]: Message;
        } = snapshot.val();
        this.messages = Object.values(messages).reverse();
      }
    })
  },
  methods: {
    async onSendMessage() {
      const roomMessagesRef = ref(db, `messages/${this.roomId}`);
      await push(roomMessagesRef, {
        senderId: this.store.auth.userId,
        senderName: this.store.auth.userId,
        text: this.messageInput,
      });
      this.messageInput = "";
    },
  },
  components: { ColorSlideEffect }
})
</script>

<template>
  <ul class="message-list">
    <li v-for="(message, index) of messages" class="message-item"
      :class="{ 'incoming-message': message.senderId !== store.auth.userId }">
      <p v-if="index === messages.length - 1 || messages[index + 1].senderId !== message.senderId"
        class="message-sender">{{ message.senderName }}</p>
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
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

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

  &.incoming-message {
    align-self: flex-start;

    .message-bubble {
      background-color: $color-lightgrey;
      color: $color-secondary;
    }
  }

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
}


.send-message-form {
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
</style>

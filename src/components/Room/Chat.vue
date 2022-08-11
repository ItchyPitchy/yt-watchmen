<script lang="ts">
import { defineComponent, inject } from "vue"
import type { Store } from "@/main"
import { addDoc, collection, getFirestore, onSnapshot, orderBy, query, Timestamp, type Unsubscribe } from "firebase/firestore"
import ColorSlideEffect from "../common/ColorSlideEffect.vue"
import type { Message } from "../Rooms/Rooms.vue"

interface State {
  messages: Message[],
  messageInput: string,
  sendButtonHover: boolean,
  unsubscribeOnMessageValue: Unsubscribe | null,
}

const db = getFirestore()

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
          const roomMessagesRef = collection(db, 'rooms', `${toId}`, 'messages')

          this.unsubscribeOnMessageValue = onSnapshot(roomMessagesRef, (snapshot) => {
            this.messages = snapshot.docs
              .filter(messageSnapshot => messageSnapshot.exists())
              .map((messageSnapshot) => messageSnapshot.data() as Message)
              .reverse()
          })

          // this.unsubscribeOnMessageValue = onValue(roomMessagesRef, (snapshot) => {
          //   if (snapshot.exists()) {
          //     const messages: {
          //       [key: string]: Message;
          //     } = snapshot.val();
          //     this.messages = Object.values(messages).reverse();
          //   }
          // });
        }
        cleanup(() => {
          if (this.unsubscribeOnMessageValue)
            this.unsubscribeOnMessageValue();
        });
      }
    },
  },
  created() {
    const roomMessagesRef = query(collection(db, 'rooms', `${this.roomId}`, 'messages'), orderBy('createdAt', 'desc'))

    this.unsubscribeOnMessageValue = onSnapshot(roomMessagesRef, (snapshot) => {
      this.messages = snapshot.docs
        .filter(messageSnapshot => messageSnapshot.exists())
        .map((messageSnapshot) => messageSnapshot.data() as Message)
    })
  },
  methods: {
    async onSendMessage() {
      const roomMessagesRef = collection(db, 'rooms', `${this.roomId}`, 'messages')

      console.log({
        senderId: this.store.auth.userId,
        senderName: this.store.auth.userName,
        text: this.messageInput,
        createdAt: Timestamp.now().valueOf(),
      })

      await addDoc(roomMessagesRef, {
        senderId: this.store.auth.userId,
        senderName: this.store.auth.userName,
        text: this.messageInput,
        createdAt: Timestamp.now().valueOf(),
      })

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

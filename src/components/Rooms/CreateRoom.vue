<script lang="ts">
import { defineComponent, inject } from "vue"
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { uuidv4 } from "@firebase/util"
import type { Store } from "@/main"
import ContentSlideEffect from "../common/ContentSlideEffect.vue"
import CustomIcon from "../icons/CustomIcon.vue"
import User from "../icons/User.vue"
import AngleLeft from "../icons/AngleLeft.vue"

interface State {
  roomName: string,
  type: "private" | "public",
  hover: boolean,
  isOpen: boolean,
}

const db = getFirestore()

export default defineComponent({
  setup() {
    return {
      store: inject('store') as Store,
    }
  },
  data(): State {
    return {
      roomName: '',
      type: 'private',
      hover: false,
      isOpen: false,
    }
  },
  computed: {
    error() {
      return this.roomName.length === 0 ? 'Room must have a name!' : null
    },
  },
  methods: {
    async onCreateRoom() {
      const roomId = await this.createRoom()

      this.$router.push(`/rooms/${roomId}`)
    },
    async createRoom() {
      const roomsRef = collection(db, 'rooms')

      const newRoomRef = await addDoc(roomsRef, {
        host: this.store.auth.userId,
        name: this.roomName,
        type: this.type,
        videoId: null,
        rate: 1,
        time: 0,
        state: "paused",
        createdAt: Timestamp.now().valueOf(),
        permissionId: uuidv4(),
      })

      return newRoomRef.id
    },
  },
  components: { ContentSlideEffect, CustomIcon, AngleLeft }
})
</script>

<template>
  <div class="create-room-wrapper" :class="{ isOpen }">
    <div>
      <ContentSlideEffect :active="hover">
        <template v-slot:main-content>
          <form @submit.prevent class="create-room-form">
            <div class="background-primary">
              <div class="input-container">
                <label>Room name</label>
                <input type="text" v-model="roomName" required />
              </div>
            </div>
            <div class="background-primary">
              <div class="input-container">
                <input type="radio" id="private" value="private" v-model="type">
                <label for="private">Private</label>
                <input type="radio" id="public" value="public" v-model="type">
                <label for="public">Public</label>
              </div>
            </div>
          </form>
        </template>
        <template v-slot:slide-content>
          <div class="confirm-create-wrapper" :class="{ error }">
            <p v-if="error">{{ error }}</p>
            <p v-else>Are you sure you want to create <span class="type">{{ type }}</span> room named "<span
                class="room-name">{{
                  roomName
                }}</span>"?</p>
          </div>
        </template>
      </ContentSlideEffect>
      <button @click="() => { !error && onCreateRoom() }" @mouseover="hover = true" @mouseleave="hover = false"
        :class="{ error }">Create
        room</button>
    </div>
    <div class="sidebar-frame">
      <div class="icon-wrapper" @click="isOpen = !isOpen">
        <CustomIcon :size="30" :color="'white'">
          <AngleLeft />
        </CustomIcon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.create-room-wrapper {
  position: sticky;
  top: 75px;
  height: calc(100vh - 75px);
  width: 375px;
  transition: width 0.2s ease-in;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-end;

  &.isOpen {
    width: 40px;
  }
}

.sidebar-frame {
  height: 100%;
  width: 40px;
  background-color: $color-primary;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  margin: 5px;
  // width: 30px;
}

.background-primary {
  padding-bottom: 2px;
  background-color: $color-primary;
}

.create-room-form,
.confirm-create-wrapper {
  width: 335px;
}

.confirm-create-wrapper {
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

  &.error {
    background-color: crimson;
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

  &.error:hover {
    color: crimson;
  }
}

input[type=text] {
  flex: 1;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 20px;

  label {
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }
}
</style>

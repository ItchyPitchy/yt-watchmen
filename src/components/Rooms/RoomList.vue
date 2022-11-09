<script lang="ts">
import { defineComponent, type PropType } from "vue";
import RoomItem from "./RoomItem.vue";
import BeenInView from "../common/BeenInView.vue";
import type { RoomExtended } from "./Rooms.vue";

interface State {
  itemRefs: Element[],
  roomsExtended: Array<RoomExtended & { addedWhileInView: boolean }>,
}

export default defineComponent({
  data(): State {
    return {
      itemRefs: [],
      roomsExtended: [],
    }
  },
  props: {
    rooms: {
      type: Array as PropType<RoomExtended[]>,
      required: true,
    },
    membersByRoom: {
      type: Object as PropType<{ [roomId: string]: number }>,
      required: true,
    },
    hostByRoom: {
      type: Object as PropType<{ [roomId: string]: string }>,
      required: true,
    },
  },
  created() {
    this.roomsExtended = this.rooms.map(room => ({
      ...room,
      addedWhileInView: false,
    }))
  },
  watch: {
    'rooms': {
      handler(newRooms: RoomExtended[], oldRooms: RoomExtended[]) {
        this.roomsExtended = newRooms.map((newRoom) => ({
          ...newRoom,
          addedWhileInView: oldRooms.some((oldRoom) => oldRoom.id !== newRoom.id)
        }))
      }
    },
  },
  methods: {
    setItemRef(el: Element | null, index: number) {
      if (el) {
        this.itemRefs[index] = el
      }
    }
  },
  components: { RoomItem, BeenInView }
})
</script>

<template>
  <div class="room-list-wrapper">
    <ul class="room-list">
      <BeenInView v-for="(room, index) of roomsExtended" :elementRef="itemRefs[index]"
        :disableStartInView="room.addedWhileInView" :key="room.id">
        <li :ref="(el) => setItemRef(el as Element | null, index)">
          <RoomItem :room="room" :onlineMembers="membersByRoom[room.id]" :hostDisplayName="hostByRoom[room.id]" />
        </li>
      </BeenInView>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.room-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  position: relative;
  opacity: 0;
  transform: translateX(50px);
  transition: transform .5s ease-out, opacity .5s ease-out;

  &.been-in-view {
    opacity: 1;
    transform: translateX(0);
  }

  &.start-in-view {
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        transition-delay: $i * .1s;
      }
    }
  }
}
</style>

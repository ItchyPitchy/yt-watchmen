<script lang="ts">
import { defineComponent, type PropType } from "vue";
import RoomItem from "./RoomItem.vue";
import BeenInView from "../common/BeenInView.vue";

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
  itemRefs: Element[],
  roomsExtended: Array<Room & { addedWhileInView: boolean }>
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
      type: Array as PropType<Room[]>,
      required: true,
    }
  },
  created() {
    this.roomsExtended = this.rooms.map(room => ({
      ...room,
      addedWhileInView: false,
    }))
  },
  watch: {
    'rooms': {
      handler(newRooms: Room[], oldRooms: Room[]) {
        this.roomsExtended = newRooms.map((newRoom) => ({
          ...newRoom,
          addedWhileInView: oldRooms.some((oldRoom) => oldRoom.id !== newRoom.id)
        }))
      }
    }
  },
  methods: {
    setItemRef(el: Element | null, index: number) {
      if (el) {
        this.itemRefs[index] = el
        console.log(this.itemRefs)
      }
    }
  },
  components: { RoomItem, BeenInView }
})
</script>

<template>
  <div class="room-list-wrapper">
    <ul class="room-list">
      <BeenInView v-for="(room, index) of roomsExtended" :elementRef="itemRefs[index]" :disableStartInView="room.addedWhileInView" :key="room.id">
        <li :ref="(el) => setItemRef(el as Element | null, index)">
          <RoomItem :room="room"/>
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
  // background-color: #6200ff;
  // color: white;
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

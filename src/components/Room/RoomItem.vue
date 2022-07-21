<script lang="ts">
import { defineComponent, type PropType } from "vue";

interface Room {
  id: string,
  host: string,
  name: string,
  videoId?: string,
  state: "playing" | "paused",
  time: number,
  rate: number,
  members?: { [key: string]: boolean },
  online: number,
}

export default defineComponent({
  props: {
    room: {
      type: Object as PropType<Room>,
      required: true,
    },
  },
})
</script>

<template>
  <RouterLink :to="{ name: 'room', params: { id: room.id } }" class="room-item">
    <h4>{{ room.name }}</h4>
    <p>Type: <span>Public</span></p>
    <p>{{ room.members }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">

</style>

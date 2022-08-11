<script lang="ts">
import { defineComponent, type PropType } from "vue";
import User from "../icons/User.vue";
import CustomIcon from "../icons/CustomIcon.vue";
import Crown from "../icons/Crown.vue";
import ColorSlideEffect from "../common/ColorSlideEffect.vue";
import type { RoomExtended } from "./Rooms.vue";

export default defineComponent({
  data() {
    return {
      hover: false,
    }
  },
  props: {
    room: {
      type: Object as PropType<RoomExtended>,
      required: true,
    },
    onlineMembers: {
      type: Number,
      required: true,
    },
    hostDisplayName: {
      type: String,
      required: true,
    },
  },
  components: { User, CustomIcon, Crown, ColorSlideEffect }
})
</script>

<template>
  <RouterLink :to="{ name: 'room', params: { id: room.id } }" class="room-item-link" @mouseover="hover = true"
    @mouseleave="hover = false">
    <ColorSlideEffect :active="hover" :active-bg-color="'white'" :active-text-color="'#6200ff'"
      :inactive-bg-color="'#6200ff'" :inactive-text-color="'white'">
      <template v-slot:element>
        <div class="room-item">
          <div class="top-row">
            <h4>{{ room.name }}</h4>
            <div class="user-container">
              <div>{{ onlineMembers }}</div>
              <CustomIcon :size="30">
                <User />
              </CustomIcon>
            </div>
          </div>
          <div class="host-container">
            <p>{{ hostDisplayName }}</p>
            <CustomIcon :size="15">
              <Crown />
            </CustomIcon>
          </div>
        </div>
      </template>
      <template v-slot:extra-element>
        <div class="extra">
          <p>Join</p>
        </div>
      </template>
    </ColorSlideEffect>
  </RouterLink>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

h4 {
  font-size: 24px;
}

.room-item-link {
  display: block;
  text-decoration: none;
  border-radius: 4px;
  overflow: hidden;

  .room-item {
    padding: 20px;

    .top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
    }

    .user-container {
      display: flex;
      align-items: center;
    }

    .host-container {
      display: flex;
      gap: 5px;
    }
  }
}


.extra {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;

  p {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px $color-primary;
    opacity: 0.1;
    font-size: 130px;
    line-height: 130px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>

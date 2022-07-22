<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<template>
  <div class="wrapper">
    <slot name="main-content"></slot>
    <div class="top-wrapper" :class="{ active }">
      <div class="top-element">
        <slot name="slide-content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.wrapper {
  position: relative;
  overflow: hidden;

  .top-wrapper {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: left 0.4s;

    .top-element {
      z-index: 50;
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100%;

      transition: left 0.4s;
    }

    &.active {
      left: 0;

      .top-element {
        left: 0;
      }
    }
  }
}
</style>

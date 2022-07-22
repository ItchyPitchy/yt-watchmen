<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    activeBgColor: {
      type: String,
      required: false,
    },
    inactiveBgColor: {
      type: String,
      required: false,
    },
    activeTextColor: {
      type: String,
      required: false,
    },
    inactiveTextColor: {
      type: String,
      required: false,
    },
  },
  computed: {
    cssProps() {
      return {
        "--active-bg-color": this.activeBgColor,
        "--active-text-color": this.activeTextColor,
        "--inactive-bg-color": this.inactiveBgColor,
        "--inactive-text-color": this.inactiveTextColor,
      }
    }
  }
})
</script>

<template>
  <div class="wrapper" :style="cssProps">
    <slot name="element"></slot>
    <slot name="extra-element"></slot>
    <div class="top-wrapper" :class="{ active }">
      <div class="top-element">
        <slot name="element"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.wrapper {
  position: relative;
  overflow: hidden;
  background-color: var(--active-bg-color);
  color: var(--active-text-color);
  fill: var(--active-text-color);

  .top-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: left 0.4s;
    background-color: var(--inactive-bg-color);

    .top-element {
      z-index: 50;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: var(--inactive-text-color);
      fill: var(--inactive-text-color);

      transition: left 0.4s;
    }

    &.active {
      left: 100%;

      .top-element {
        left: -100%;
      }
    }
  }
}
</style>

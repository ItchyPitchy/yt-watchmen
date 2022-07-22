<script lang="ts">
import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      size: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: false,
      },
    },
    computed: {
      cssProps() {
        return {
          "--icon-color": this.color || 'inherit',
          "--icon-size": `${this.size}px`,
        }
      }
    }
  })
</script>

<template>
  <div class="icon-wrapper" :style="cssProps">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .icon-wrapper {
    height: var(--icon-size);
    width: var(--icon-size);
    fill: var(--icon-color);
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue"
  import Video from "./Video.vue"

  export default defineComponent({
    computed: {
      roomId() {
          return this.$route.params.id;
      },
    },
    components: { Video },
})


</script>

<template>
  <div class="page-wrapper">
    <Video></Video>
  </div>
</template>

<style scoped>
  .page-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

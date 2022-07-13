<script lang="ts">
  import { defineComponent } from "vue"
  import Video from "./Video.vue"

  export default defineComponent({
    computed: {
      roomId() {
          return this.$route.params.id;
      },
    },
    components: { Video }
})


</script>

<template>
  <p>{{ roomId }}</p>
  <Video></Video>
  <p></p>
</template>

<style>

</style>

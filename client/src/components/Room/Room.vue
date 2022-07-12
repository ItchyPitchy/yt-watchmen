<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    computed: {
      roomId() {
        // We will see what `params` is shortly
        return this.$route.params.id
      },
    },
    created() {
      console.log('created!')
    }
  })


</script>

<template>
  <p>{{ roomId }}</p>
</template>

<style>

</style>

<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="app">
    <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rooms">Rooms</RouterLink>
      </nav>
    </header> -->
    <RouterView />
  </div>
</template>

<style lang="scss">
  @import "@/assets/base.scss";

  .app {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    z-index: 55;
  }
</style>

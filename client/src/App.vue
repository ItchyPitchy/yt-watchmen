<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <!-- <div class="content"> -->
      <RouterView />
    <!-- </div> -->
  </div>
</template>

<style>
  @import "@/assets/base.css";

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
    border-bottom: 1px solid aqua;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
  }
</style>

<script lang="ts">
import { getAuth } from "firebase/auth"
import { defineComponent, inject } from "vue"
import { RouterLink, RouterView } from "vue-router"
import type { Store } from "./main"

const auth = getAuth()

export default defineComponent({
  setup() {
    return {
      store: inject('store') as Store,
    }
  },
  methods: {
    async logout() {
      await auth.signOut()
    },
  },
})
</script>

<template>
  <div class="app">
    <header v-if="store.auth.loggedIn">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rooms">Rooms</RouterLink>
        <span @click="logout">Log out</span>
      </nav>
    </header>
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
  position: sticky;
  top: 0;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  z-index: 55;
  // background-color: $color-primary;
  border-bottom: 1px solid white;

  a,
  span {
    color: white !important;
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

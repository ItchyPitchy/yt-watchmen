import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login/Login.vue";
import Room from "../components/Room/Room.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Login,
    },
    {
      path: "/room/:id",
      name: "room",
      component: Room,
    }
  ],
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login/Login.vue";
import Room from "../components/Room/Room.vue";
import Rooms from "../components/Room/Rooms.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/rooms/:id',
      name: 'room',
      component: Room,
      meta: {
        requiresAuth: true,
      }
    },
  ]
});


// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   console.log("currentUser", store.auth.loggedIn)

//   if (requiresAuth && !store.auth.loggedIn) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router;

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login/Login.vue";
import Room from "../components/Room/Room.vue";
import Rooms from "../components/Rooms/Rooms.vue";

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
})

const auth = getAuth()

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !await getCurrentUser()) {
    next('/')
  } else {
    next()
  }
})

export default router;

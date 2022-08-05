import { createApp, reactive, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import App from "./App.vue";
import router from "./router";

export interface Store {
  auth: {
    userId: string | null,
    userName: string | null,
    loggedIn: boolean,
  }
}

const auth = getAuth()
const userId = ref<string | null>(null)
const userName = ref<string | null>(null)
const loggedIn = ref(false)

export const store = reactive({
  auth: {
    userId,
    userName,
    loggedIn,
  }
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    userId.value = user.uid
    userName.value = user.displayName
    loggedIn.value = true
  } else {
    // User is signed out
    userId.value = null
    userName.value = null
    loggedIn.value = false

    router.push('/')
  }
})

const app = createApp(App);

app.provide("store", store);

app.use(router);

app.mount("#app");

import { createApp, reactive, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import App from "./App.vue";
import router from "./router";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const db = getFirestore()

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

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in
    userId.value = user.uid
    userName.value = user.displayName
    loggedIn.value = true

    const userRef = doc(db, "users", `${user.uid}`);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      console.log('fetchUserMe', userSnapshot.data().displayName)
      userName.value = userSnapshot.data().displayName
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
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

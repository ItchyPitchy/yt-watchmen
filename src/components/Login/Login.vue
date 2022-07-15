<script lang="ts">
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
  import { getDatabase, ref, set } from "firebase/database"
  import { defineComponent } from 'vue'

  interface LoginState {
    emailSignIn: string,
    passwordSignIn: string,
    emailSignUp: string,
    passwordSignUp: string,
    passwordRepeatSignUp: string,
    activeTab: ActiveTab,
    isChangingTab: boolean,
  }

  enum ActiveTab {
    SIGN_IN,
    SIGN_UP,
  }

  export default defineComponent({
    setup() {
      return {
        ActiveTab,
      }
    },
    data(): LoginState {
      return {
        emailSignIn: "",
        passwordSignIn: "",
        emailSignUp: "",
        passwordSignUp: "",
        passwordRepeatSignUp: "",
        activeTab: ActiveTab.SIGN_IN,
        isChangingTab: false,
      }
    },
    methods: {
      signUp() {
        if (this.passwordSignUp.length !== 0 && this.passwordSignUp === this.passwordRepeatSignUp) {
          const auth = getAuth()
          const db = getDatabase()

          createUserWithEmailAndPassword(auth, this.emailSignUp, this.passwordSignUp)
            .then(async (userCredential) => {
              const user = userCredential.user
              console.log("user", user)

              const usersRef = ref(db, `users/${user.uid}`)

              await set(usersRef, {
                userId: user.uid,
                displayName: "Karlsson på taket",
              })
            })
            .catch((error) => {
              console.log(error)
              const errorCode = error.code;
              const errorMessage = error.message;
            })
        }
      },
      signIn() {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, this.emailSignIn, this.passwordSignIn)
          .then((userCredential) => {
            const user = userCredential.user
            console.log("user", user)
          })
          .catch((error) => {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
          })
        console.log("Sign in!")
      },
      changeTab(to: ActiveTab) {
        // isChangingTab.value = true

        // setTimeout(() => {
        //   isChangingTab.value = false
        //   activeTab.value = to
        // }, 1000)
        this.activeTab = to
      }
    }

  })



</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="overlay" :class="{ right: activeTab === ActiveTab.SIGN_IN}">
        <div class="sign-in-info" :class="{ active: activeTab === ActiveTab.SIGN_IN, inactive: activeTab !== ActiveTab.SIGN_IN }">
          <p>SIGN IN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?</p>
          <button @click="() => changeTab(ActiveTab.SIGN_UP)">Sign UP instead!</button>
        </div>
        <div class="sign-up-info" :class="{ active: activeTab === ActiveTab.SIGN_UP, inactive: activeTab !== ActiveTab.SIGN_UP }">
          <p>SIGN UP: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?</p>
          <button @click="() => changeTab(ActiveTab.SIGN_IN)">Sign IN instead!</button>
        </div>
      </div>
      <form @submit.prevent="signIn" class="sign-in-form">
        <label>Email</label>
        <input v-model="emailSignIn" />
        <label>Password</label>
        <input type="password" v-model="passwordSignIn" />
        <button type="submit">Sign in</button>
      </form>
      <form @submit.prevent="signUp" class="sign-up-form">
        <label>Email</label>
        <input v-model="emailSignUp" />
        <label>Password</label>
        <input type="password" v-model="passwordSignUp" />
        <label>Repeat password</label>
        <input type="password" v-model="passwordRepeatSignUp" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .page-wrapper {
    flex: 1;
    display: flex;
    padding: 0 100px;
    justify-content: flex-end;
    align-items: center;
  }

  .container {
    position: relative;
    flex: 1;
    display: flex;
    gap: 10px;
    background-color: #d1d1d1;
    max-width: 550px;
    min-height: 300px;
  }

  .container > * {
    flex-basis: 50%;
  }

  .sign-in-form, .sign-up-form {
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;

    transition: left 0.5s;
  }

  .overlay.right {
    left: 50%;
  }

  .sign-in-info, .sign-up-info {
    z-index: 50;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0; */

    transition: left 0.5s;
  }

  .sign-up-info.inactive {
    left: -100%;
  }

  .sign-up-info.active, .sign-in-info.active  {
    left: 0;
  }

  .sign-in-info.inactive {
    left: 100%;
  }

</style>
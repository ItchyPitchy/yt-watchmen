<script lang="ts">
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"
import { defineComponent } from 'vue'
import Background from "../Background/Background.vue"

interface LoginState {
  emailSignIn: string,
  passwordSignIn: string,
  emailSignUp: string,
  userNameSignUp: string,
  passwordSignUp: string,
  passwordRepeatSignUp: string,
  activeTab: ActiveTab,
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
      userNameSignUp: "",
      passwordSignUp: "",
      passwordRepeatSignUp: "",
      activeTab: ActiveTab.SIGN_IN,
    }
  },
  methods: {
    signUp() {
      if (this.activeTab !== ActiveTab.SIGN_UP) return

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
              displayName: this.userNameSignUp,
            })
          })
          .catch((error) => {
            console.log(error)
            const errorCode = error.code
            const errorMessage = error.message
          })
      }
    },
    signIn() {
      if (this.activeTab !== ActiveTab.SIGN_IN) return

      const auth = getAuth()

      signInWithEmailAndPassword(auth, this.emailSignIn, this.passwordSignIn)
        .then((userCredential) => {
          const user = userCredential.user
          console.log("user", user)
        })
        .catch((error) => {
          console.log(error)
          const errorCode = error.code
          const errorMessage = error.message
        })
      console.log("Sign in!")
    },
    changeTab(to: ActiveTab) {
      this.activeTab = to
    }
  },
  components: { Background },
})



</script>

<template>
  <div class="background">
    <Background />
  </div>
  <div class="page-wrapper">
    <div class="login-wrapper">
      <div class="login-container">
        <div class="overlay" :class="{ right: activeTab === ActiveTab.SIGN_IN }">
          <div class="sign-in-info"
            :class="{ active: activeTab === ActiveTab.SIGN_IN, inactive: activeTab !== ActiveTab.SIGN_IN }">
            <h3>Connect and play!</h3>
            <p>Create your own room and share youtube videos with users from all around the world. Do this and much much
              more - sign up today.</p>
            <button @click="() => changeTab(ActiveTab.SIGN_UP)">Sign up</button>
          </div>
          <div class="sign-up-info"
            :class="{ active: activeTab === ActiveTab.SIGN_UP, inactive: activeTab !== ActiveTab.SIGN_UP }">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia!
              Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda
              dicta neque exercitationem?</p>
            <p>Already have an account?</p>
            <button @click="() => changeTab(ActiveTab.SIGN_IN)">Sign in</button>
          </div>
        </div>
        <div>
          <h2>Sign in</h2>
          <form @submit.prevent="signIn" class="sign-in-form">
            <label>Email</label>
            <input v-model="emailSignIn" :disabled="activeTab !== ActiveTab.SIGN_IN" />
            <label>Password</label>
            <input type="password" v-model="passwordSignIn" :disabled="activeTab !== ActiveTab.SIGN_IN" />
            <button type="submit" :disabled="activeTab !== ActiveTab.SIGN_IN">Sign in</button>
            <RouterLink to="">Forgot password?</RouterLink>
          </form>
        </div>
        <div>
          <h2>Sign up</h2>
          <form @submit.prevent="signUp" class="sign-up-form">
            <label>Email</label>
            <input v-model="emailSignUp" :disabled="activeTab !== ActiveTab.SIGN_UP" />
            <label>Username</label>
            <input v-model="userNameSignUp" :disabled="activeTab !== ActiveTab.SIGN_UP" />
            <label>Password</label>
            <input type="password" v-model="passwordSignUp" :disabled="activeTab !== ActiveTab.SIGN_UP" />
            <label>Repeat password</label>
            <input type="password" v-model="passwordRepeatSignUp" :disabled="activeTab !== ActiveTab.SIGN_UP" />
            <button type="submit" :disabled="activeTab !== ActiveTab.SIGN_UP">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.page-wrapper {
  flex: 1;
  display: flex;
  padding: 100px;
  justify-content: center;
  align-items: center;
}

.login-wrapper {
  flex: 1;
}

.login-container {
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 550px;
  background-color: $color-lightgrey;
  border-radius: 4px;
  overflow: hidden;
}

@media(min-width: 1000px) {
  .login-wrapper {
    margin-left: 50%;
  }

  .login-container {
    max-width: 800px;
  }
}

.login-container>* {
  flex-basis: 50%;
  background-color: white;
  padding: 28px 24px 40px 24px;
}


h2 {
  font-size: 24px;
  font-weight: 600;
}

.sign-in-form,
.sign-up-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 20px;
}

.sign-in-form>button,
.sign-up-form>button {
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  background-color: white;
  color: $color-primary;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid $color-primary;
  margin-top: 30px;
}

.sign-in-form>button:hover,
.sign-up-form>button:hover {
  background-color: $color-primary;
  color: white;
  border-color: white;
}

a {
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}

label {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 6px;
}

input {
  margin-bottom: 12px;
}

.overlay {
  background-color: $color-primary;
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

.sign-in-info,
.sign-up-info {
  z-index: 50;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 28px 24px 40px 24px;

  transition: left 0.5s;
}

.sign-up-info.inactive {
  left: -100%;
}

.sign-up-info.active,
.sign-in-info.active {
  left: 0;
}

.sign-in-info.inactive {
  left: 100%;
}

.sign-in-info>h3,
.sign-up-info>h3 {
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
}

.sign-in-info>p,
.sign-up-info>p {
  font-size: 14px;
  font-weight: 200;
  color: white;
}

.sign-in-info>button,
.sign-up-info>button {
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  background-color: $color-primary;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid white;
  margin-top: 30px;
}

.sign-in-info>button:hover,
.sign-up-info>button:hover {
  background-color: white;
  color: $color-primary;
  border-color: $color-primary;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    /* background-color: rgba(0, 0, 0, 0.7); */
    pointer-events: none;
  }
}

</style>

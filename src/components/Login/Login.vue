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
    <div class="container-wrapper">
      <div class="login-container">
        <div class="overlay" :class="{ right: activeTab === ActiveTab.SIGN_IN}">
          <div class="sign-in-info" :class="{ active: activeTab === ActiveTab.SIGN_IN, inactive: activeTab !== ActiveTab.SIGN_IN }">
            <h3>Connect and play!</h3>
            <p>Create your own room and share youtube videos with users from all around the world. Do this and much much more - sign up today.</p>
            <button @click="() => changeTab(ActiveTab.SIGN_UP)">Sign up</button>
          </div>
          <div class="sign-up-info" :class="{ active: activeTab === ActiveTab.SIGN_UP, inactive: activeTab !== ActiveTab.SIGN_UP }">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?</p>
            <p>Already have an account?</p>
            <button @click="() => changeTab(ActiveTab.SIGN_IN)">Sign in</button>
          </div>
        </div>
        <div>
          <h2>Sign in</h2>
          <form @submit.prevent="signIn" class="sign-in-form">
            <label>Email</label>
            <input v-model="emailSignIn" />
            <label>Password</label>
            <input type="password" v-model="passwordSignIn" />
            <button type="submit">Sign in</button>
            <RouterLink to="/">Glömt lösenord?</RouterLink>
          </form>
        </div>
        <div>
          <h2>Sign up</h2>
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
    </div>
  </div>
</template>

<style scoped>
  .page-wrapper {
    flex: 1;
    display: flex;
    padding: 0 100px;
    justify-content: center;
    align-items: center;
  }

  .container-wrapper {
    flex: 1;
  }

  .login-container {
    position: relative;
    display: flex;
    gap: 8px;
    min-width: 550px;
    background-color: #d1d1d1;
  }

  @media(min-width: 1100px) {
    .container-wrapper {
      margin-left: 50%;
    }

    .login-container {
      max-width: 800px;
    }
  }

  .login-container > * {
    flex-basis: 50%;
    background-color: #fff;
    padding: 28px 24px 40px 24px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  .sign-in-form, .sign-up-form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;
  }

  .sign-in-form > button, .sign-up-form > button {
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 600;
    background-color: white;
    color: #6200ff;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid #6200ff;
    margin-top: 30px;
  }

  .sign-in-form > button:hover, .sign-up-form > button:hover {
    background-color: #6200ff;
    color: white;
    border-color: white;
  }

  a {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
  }

  a:visited {
    color: unset;
  }

  label {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 6px;
  }

  input {
    font-family: 'Poppins';
    font-size: 13px;
    padding: 6px;
    border: 1px solid #6200ff;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .overlay {
    background-color: #6200ff;
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
    padding: 28px 24px 40px 24px;

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

  .sign-in-info > h3, .sign-up-info > h3 {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 18px;
  }

  .sign-in-info > p, .sign-up-info > p {
    font-size: 14px;
    font-weight: 200;
    color: white;
  }

  .sign-in-info > button, .sign-up-info > button {
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 600;
    background-color: #6200ff;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid white;
    margin-top: 30px;
  }

  .sign-in-info > button:hover, .sign-up-info > button:hover {
    background-color: white;
    color: #6200ff;
    border-color: #6200ff;
  }

</style>

<template>
  <div class="reset-password">
    <ModalComp
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <LoadingComp v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'admin.login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <!-- <email class="icon" /> -->
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
// import email from "../../assets/Icons/envelope-regular.svg";
import ModalComp from "@/components/ModalComp";
import LoadingComp from "@/components/LoadingComp";
// import firebase from "firebase/app";
// import "firebase/auth";
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    // email,
    ModalComp,
    LoadingComp,
  },
  methods: {
    resetPassword() {
      this.loading = true;
      // firebase
      //   .auth()
      //   .sendPasswordResetEmail(this.email)
      //   .then(() => {
      //     this.modalMessage = "If your account exists, you will receive a email";
      //     this.loading = false;
      //     this.modalActive = true;
      //   })
      //   .catch((err) => {
      //     this.modalMessage = err.message;
      //     this.loading = false;
      //     this.modalActive = true;
      //   });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>

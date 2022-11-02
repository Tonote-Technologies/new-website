<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create Your FireBlog Account</h2>

      <div v-if="error === true" class="danger">{{ errorMsg }}</div>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="first_name" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="last_name" />
          <user class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="authbackground"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Api from "@/api/Api.js";

const first_name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref("");
const error = ref(false);
const errorMsg = ref("");

const register = () => {
  if (
    first_name.value != "" &&
    last_name.value != "" &&
    email.value != "" &&
    password.value != ""
  ) {
    error.value = false;
    errorMsg.value = "";

    const formObj = {
      email: email.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
    };
    console.log(formObj);
    Api.post("auth/register.php", formObj).then((response) => {
      console.log(response);
    });
    return;
  }
  error.value = true;
  errorMsg.value = "Please fill out all the fields!";
  console.log(error.value);
  console.log(errorMsg.value);
  return;
};
</script>
<style>
@import "@/assets/auth.css";
</style>

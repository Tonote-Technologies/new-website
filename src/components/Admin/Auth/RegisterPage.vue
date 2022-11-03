<template>
  <div class="form-wrap">
    <form class="register" @submit.prevent="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <!-- {{ users }} -->

      <h2>Create Your Account</h2>

      <div v-if="error === true" class="danger">{{ errorMsg }}</div>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstname" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastname" />
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
      <button>Sign Up</button>
      <div class="angle"></div>
    </form>

    <div class="authbackground"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import Api from "@/api/Api.js";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

import { db } from "@/firebase";

const users = ref([]);

onMounted(() => {
  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  onSnapshot(collection(db, "users"), (querySnapshot) => {
    const dataUsers = [];
    querySnapshot.forEach((doc) => {
      const user = {
        firstname: doc.data().firstname,
        lastname: doc.data().lastname,
        email: doc.data().email,
        password: doc.data().password,
      };
      dataUsers.push(user);
    });
    users.value = dataUsers;
  });
});

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");

const register = () => {
  // const newUser = {};
  addDoc(collection(db, "users"), {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
  });
  firstname.value = "";
};

// const error = ref(false);
// const errorMsg = ref("");

// const register = () => {
//   if (
//     first_name.value != "" &&
//     last_name.value != "" &&
//     email.value != "" &&
//     password.value != ""
//   ) {
//     error.value = false;
//     errorMsg.value = "";

//     const formObj = {
//       email: email.value,
//       password: password.value,
//       first_name: first_name.value,
//       last_name: last_name.value,
//     };
//     // console.log(formObj);
//     Api.post("auth/register.php", formObj).then((response) => {
//       console.log(response);
//     });
//     return;
//   }
//   error.value = true;
//   errorMsg.value = "Please fill out all the fields!";
//   console.log(error.value);
//   console.log(errorMsg.value);
//   return;
// };
</script>

<style>
@import "@/assets/auth.css";
</style>

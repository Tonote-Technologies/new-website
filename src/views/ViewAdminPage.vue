<template>
  <div class="page-wrapper toggled">
    <AdminHeader v-if="!navigation" />

    <main class="page-content bg-light">
      <AdminHeaderTop v-if="!navigation" />

      <transition-page>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition-page>

      <AdminFooter v-if="!navigation" />
    </main>
  </div>
</template>

<script setup>
import TransitionPage from "@/components/Transitions/TransitionPage.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import AdminHeaderTop from "@/components/Admin/AdminHeaderTop.vue";
import AdminFooter from "@/components/Admin/AdminFooter.vue";
</script>

<script>
// import firebaseApp from "../firebase/firebaseinit";
import firebaseApp from "firebase/app";
import "firebase/auth";
export default {
  name: "app",
  // components: { Navigation, Footer },
  // data() {
  //   return {
  //     navigation: null,
  //   };
  // },
  created() {
    console.log(firebaseApp);
    // firebaseApp.auth().onAuthStateChanged((user) => {
    //   this.$store.commit("updateUser", user);
    //   if (user) {
    //     this.$store.dispatch("getCurrentUser", user);
    //   }
    // });
    // this.checkRoute();
    // this.$store.dispatch("getPost");
  },
  mounted() {
    console.log(firebaseApp);
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "LoginPage" ||
        this.$route.name === "RegisterPage" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style scoped>
@import "@/assets/admin-style.min.css";
</style>

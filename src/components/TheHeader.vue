<template>
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <router-link class="logo" to="/">
        <img
          src="/assets/images/logo-b.png"
          height="24"
          class="logo-light-mode"
          alt="ToNote Brand"
        />
        <img
          src="/assets/images/logo-b-light.png"
          height="24"
          class="logo-dark-mode"
          alt="ToNote Brand"
        />
      </router-link>

      <div class="menu-extras">
        <div class="menu-item">
          <a class="navbar-toggle" id="isToggle" @click="toggleMenu">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>

      <div class="lg-screen">
        <ul class="buy-button list-inline mb-0">
          <li class="list-inline-item mb-0">
            <a href="https://user.gettonote.com/" target="_blank">
              <div class="btn btn-sm fw-size mybtn">Sign In</div>
            </a>
          </li>

          <li class="list-inline-item ps-1 mb-0">
            <a href="https://user.gettonote.com/register" target="_blank">
              <div class="btn btn-sm btn-primary fw-size mybtn">
                Start free trial
              </div>
            </a>
          </li>
        </ul>
      </div>

      <TheNavbar />
    </div>
  </header>
</template>

<script setup>
import TheNavbar from "./TheNavbar.vue";

import { useRoute } from "vue-router";
import { watch } from "vue";
// const router = useRouter();
const route = useRoute();

watch(
  () => route.name,
  (to) => {
    if (to) {
      document.getElementById("isToggle").classList.toggle("open");
      var isOpen = document.getElementById("navigation");
      if (isOpen.style.display == "block") {
        isOpen.style.display = "none";
      }
    }
  },
);

function toggleMenu() {
  document.getElementById("isToggle").classList.toggle("open");
  var isOpen = document.getElementById("navigation");
  if (isOpen.style.display == "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}
</script>

<style scoped></style>

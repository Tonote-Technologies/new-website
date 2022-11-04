<template>
  <!-- <TheHeader /> -->

  <transition-page>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition-page>

  <!-- <TheFooter /> -->
</template>

<script setup>
import "animate.css";
import TransitionPage from "@/components/Transitions/TransitionPage.vue";
// import TheHeader from "@/components/TheHeader.vue";
// import TheFooter from "@/components/TheFooter.vue";
</script>

<style></style>

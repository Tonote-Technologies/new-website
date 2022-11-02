<template>
  <div class="page-wrapper toggled">
    <AdminHeader />

    <main class="page-content bg-light">

      <AdminHeaderTop />

      <transition-page>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition-page>

      <AdminFooter />
    </main>
  </div>
</template>

<script setup>
import TransitionPage from "@/components/Transitions/TransitionPage.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import AdminHeaderTop from "@/components/Admin/AdminHeaderTop.vue";
import AdminFooter from "@/components/Admin/AdminFooter.vue";
</script>

<style scoped>
@import '@/assets/admin-style.min.css';
</style>
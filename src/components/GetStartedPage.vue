<template>
  <section class="w-100 dark-blue p-2 py-5" id="contactUs">
    <h2 class="text-center text-light py-2">Getting started is easy</h2>
    <p class="text-center text-light py-2">
      Contact us to find out more about our notary solutions for your personal
      or business needs.
    </p>
    <div class="justify-content-center d-flex py-3">
      <div class="btn-group route-link">
        <router-link :to="{ name: 'contact' }" class="btn btn-light fw-normal">
          Contact Sales <Icon icon="akar-icons:arrow-right" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>

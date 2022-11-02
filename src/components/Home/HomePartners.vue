<template>
  <section class="section w-100 py-5">
    <div class="container pt-3 lg-screen">
      <h6 style="font-weight: lighter">Our Happy Clients</h6>
    </div>

    <div class="container pt-2 sm-screen">
      <h6 style="font-weight: lighter" class="text-center">
        Our Happy Clients
      </h6>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 mt-4">
          <TinySlider />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TinySlider from "./TinySlider.vue";
</script>

<style scoped></style>

<template>
  <section class="section w-100 bg-half-100">
    <div class="container">
      <div class="row align-items-center">
        <slot name="aside-left"></slot>

        <slot name="aside-right"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ size: Object, order: String });
</script>

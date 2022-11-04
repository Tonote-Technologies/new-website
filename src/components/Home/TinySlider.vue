<template>
  <VueTinySlider :options="options" ref="slider" class="text-center">
    <div class="py-2">
      <img
        src="assets/images/clients/acas.png"
        class="avatar avatar-ex-sm"
        alt=""
        width="150"
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/bfa.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/image4.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/image5.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/image6.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/image7.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/image8.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>

    <div class="py-2">
      <img
        src="assets/images/clients/image9.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>
    <div class="py-2">
      <img
        src="assets/images/clients/image10.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>
    <div class="py-2">
      <img
        src="assets/images/clients/image12.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>
    <div class="py-2">
      <img
        src="assets/images/clients/image13.png"
        class="avatar avatar-ex-sm"
        alt=""
        width="200"
      />
    </div>
    <div class="py-2">
      <img
        src="assets/images/clients/image14.png"
        class="avatar avatar-ex-sm"
        alt=""
      />
    </div>
  </VueTinySlider>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import VueTinySlider from "@mentorkadriu/vue-tiny-slider";
const slider = ref(null);

function useBreakpoints() {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    if (windowWidth.value < 550) return "xs";
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return "md";
    if (windowWidth.value >= 1200) return "lg";
    return null;
  });

  const width = computed(() => windowWidth.value);

  return { width, type };
}

const { type } = useBreakpoints();

const options = {
  items: type.value == "xs" ? 2 : type.value == "md" ? 4 : 14,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 500,
  gutter: 12,
  responsive: {
    992: {
      items: 6,
    },

    767: {
      items: 3,
    },

    320: {
      items: 2,
    },
  },

  // autoWidth: false,
  // gutter: 10,
  // mouseDrag: true,
  // swipeAngle: false,
  // speed: 400,
  // navAsThumbnails: true,
  // arrowKeys: true,
  // controls: false,
  // autoplay: true,
  // autoplayHoverPause: true,
  // autoplayButtonOutput: false,
  // navPosition: 'bottom',
  // autoplayTimeout: 3000,
};
</script>

<style>
@import "@/assets/tiny-slider.css";
</style>

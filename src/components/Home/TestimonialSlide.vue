<template>
  <!-- Testi Start -->
  <VueTinySlider :options="optionsCounnt" ref="slider" class="testimonial-wrap">
    <div class="card m-2 border py-4 px-2">
      <div class="card-wrap">
        <div>
          <div class="px-4 text-primary">Joan</div>
          <div class="card-body pt-1">
            I’ve received my document. Thank you so much for a Perfect Service.
            I have attached a signed copy, as requested.
          </div>
        </div>
      </div>
    </div>

    <div class="card m-2 border py-4 px-2">
      <div class="card-wrap">
        <div>
          <div class="px-4 text-primary">User</div>
          <div class="card-body pt-1">
            Thank you so much! I am really really impressed and happy for this
            solution; absolutely brilliant and exceptional!
          </div>
        </div>
      </div>
    </div>

    <div class="card m-2 border py-4 px-2">
      <div class="card-wrap">
        <div>
          <div class="px-4 text-primary">Msurshima Ugande</div>
          <div class="card-body pt-1">
            It was such a seamless process with excellent service. I highly
            recommend.
          </div>
        </div>
      </div>
    </div>

    <div class="card m-2 border py-4 px-2">
      <div class="card-wrap">
        <div>
          <div class="px-4 text-primary">Doyin Adetuyi</div>
          <div class="card-body pt-1">
            Professional, Prompt and excellent service!
          </div>
        </div>
      </div>
    </div>

    <div class="card m-2 border py-4 px-2">
      <div class="card-wrap">
        <div>
          <div class="px-4 text-primary">Feyisayo Rotimi</div>
          <div class="card-body pt-1">
            This is much appreciated, thank you for a seamless process.
          </div>
        </div>
      </div>
    </div>

    <div class="card m-2 border py-4 px-2">
      <div class="card-wrap">
        <div>
          <div class="px-4 text-primary">Josephat Kennedy</div>
          <div class="card-body pt-1">
            Thank you very much! All my life, this is the only digitalised
            active institute in Nigeria that meet up to business standard and
            correspondence on time to their customer’s needs, very effective
            👍👌✅
          </div>
        </div>
      </div>
    </div>
  </VueTinySlider>

  <!--end section-->
  <!-- Testi End -->
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

const optionsCounnt = {
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
      items: 3,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
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
.card-wrap {
  min-height: 200px;
  display: flex;
  align-items: center;
}
</style>

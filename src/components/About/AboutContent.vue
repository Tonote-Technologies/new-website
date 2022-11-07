<template>
  <section class="section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="card">
            <div class="card-body">
              <img
                src="assets/images/illustrator/about-2.png"
                width="450"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6">
          <div class="section-title p-2">
            <h2>Who we are</h2>

            <p>
              <span class="data-1">
                Imagine a world where every transaction and document shared can
                be trusted.
                <br /><br />
                ToNote was founded with a mission to simplify the way people
                agree and foster trust.
                <br /><br />
                The result - Trust made easy.
                <br /><br />
              </span>
              <span class="data-2" v-show="isOpen">
                Today, we help people sign, notarise, verify and manage
                documents, fully online. By making these everyday activities
                easier, we encourage digital transformation across personal and
                business functions.
                <br /><br />
                This is extremely valuable because paper based documentation and
                traditional trust paradigms are broken, slow and inefficient in
                todays fast paced world.
                <br /><br />
                We care about the climate and strongly believe that by saving
                paper we are able to save the trees and forests that absorb and
                reduce carbon emissions, thus purifying the air that we breathe.
                <br /><br />
                Beyond this, we remain committed to helping people trust, the
                easy way.
              </span>
            </p>
            <div class="">
              <button class="btn btn-light fw-normal" @click="open">
                <template v-if="!isOpen">
                  Read more <i class="mdi mdi-chevron-down me-2"></i>
                </template>
                <template v-else>
                  Show less <i class="mdi mdi-chevron-up me-2"></i>
                </template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};
</script>

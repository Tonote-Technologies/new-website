<template>
  <div id="navigation">
    <ul class="navigation-menu">
      <div class="menu-small sm-screen">
        <li>
          <router-link class="sub-menu-item fw-size" to="/">Home</router-link>
          <!-- <router-link class="sub-menu-item fw-size" :to="/">Home</router-link> -->
        </li>
      </div>
      <li>
        <router-link :to="{ name: 'About' }" class="sub-menu-item fw-size" exact
          >About Us</router-link
        >
      </li>
      <li class="has-submenu parent-parent-menu-item" @click="dropSolution">
        <a href="javascript:void(0)" class="fw-size">Solutions</a
        ><span class="menu-arrow"></span>

        <ul class="submenu" :class="{ 'd-block': openSolution }">
          <li>
            <router-link
              :to="{ name: 'solution.sign' }"
              class="sub-menu-item fw-size"
              exact
            >
              <div class="row">
                <div class="col-2">
                  <span
                    ><img src="/assets/images/icon/icon-sign.png" width="15"
                  /></span>
                </div>
                <div class="col-6"><span>ToSign</span></div>
                <div class="col-4 text-end">
                  <span><Icon icon="akar-icons:arrow-right" /></span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'solution.notarise' }"
              class="sub-menu-item fw-size"
              exact
            >
              <div class="row">
                <div class="col-2">
                  <span
                    ><img src="/assets/images/icon/icon-note.png" width="15"
                  /></span>
                </div>
                <div class="col-6"><span>ToNotarise</span></div>
                <div class="col-4 text-end">
                  <span><Icon icon="akar-icons:arrow-right" /></span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'solution.verify' }"
              class="sub-menu-item fw-size"
              exact
            >
              <div class="row">
                <div class="col-2">
                  <span
                    ><img src="/assets/images/icon/icon-verify.png" width="15"
                  /></span>
                </div>
                <div class="col-6"><span>ToVerify</span></div>
                <div class="col-4 text-end">
                  <span><Icon icon="akar-icons:arrow-right" /></span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          :to="{ name: 'Pricing' }"
          class="sub-menu-item fw-size"
          exact
          >Pricing</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Notary' }"
          class="sub-menu-item fw-size"
          exact
          >For Notaries</router-link
        >
      </li>
      <li class="has-submenu parent-parent-menu-item" @click="dropResource">
        <a href="javascript:void(0)" class="fw-size">Resources</a
        ><span class="menu-arrow"></span>
        <ul class="submenu" :class="{ 'd-block': openResource }">
          <li>
            <router-link
              :to="{ name: 'resource.partners' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>Partners</span>
              <Icon icon="akar-icons:arrow-right" />
            </router-link>
          </li>
          <li class="d-none">
            <router-link
              :to="{ name: 'resource.blog' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>Blog</span>
              <Icon icon="akar-icons:arrow-right" />
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'resource.faq' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>FAQs</span>
              <Icon icon="akar-icons:arrow-right" />
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="menu-small sm-screen">
      <li class="btn btn-sm btn-outline-primary p-0">
        <a
          href="https://user.gettonote.com"
          target="_blank"
          class="text fw-size"
          >Sign In</a
        >
      </li>

      <li class="btn btn-sm btn-primary my-1 p-0">
        <a
          href="https://user.gettonote.com/register"
          target="_blank"
          class="sub-menu-item fw-size text-light"
        >
          Start free trial
        </a>
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const openSolution = ref(false);
function dropSolution() {
  openSolution.value = !openSolution.value;
}

const openResource = ref(false);
function dropResource() {
  openResource.value = !openResource.value;
}

// watch: {
//   '$route' () {
//         const element = document.querySelector("#nav-collapse");
//         let isShown = element.classList.contains("show");
//         if(isShown){
//             this.$root.$emit('bv::toggle::collapse', 'nav-collapse')
//         }
//     }
// }
</script>

<style scoped></style>

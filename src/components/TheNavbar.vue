<template>
  <div id="navigation">
    <ul class="navigation-menu">
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
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>ToSign</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'solution.notarise' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>ToNotarise</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'solution.verify' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>ToVerify</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
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
              :to="{ name: 'resource.blog' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>Blog</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'resource.faq' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>FAQs</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ name: 'resource.partners' }"
              class="sub-menu-item fw-size d-flex justify-content-between"
              exact
            >
              <span>Partners</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
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

const openSolution = ref(false);
function dropSolution() {
  openSolution.value = !openSolution.value;
}

const openResource = ref(false);
function dropResource() {
  openResource.value = !openResource.value;
}
</script>

<style scoped></style>

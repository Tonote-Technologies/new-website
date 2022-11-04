<template>
  <section class="w-100 dark-blue py-5">
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

  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-py-60">
            <div class="row">
              <div class="col-lg-6 col-12 mb-0 mb-md-4 py-3">
                <router-link :to="{ name: 'Home' }" class="logo-footer" exact>
                  <img
                    src="/assets/images/logo-b-light.png"
                    height="24"
                    alt="ToNote Brand"
                  />
                </router-link>
              </div>
              <div
                class="col-lg-6 col-12 mb-0 mb-md-8 d-flex justify-content-lg-end"
              >
                <div class="w-100">
                  <div class="input-group mb-3 myinput-wrap p-1 rounded">
                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="Enter your email here"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <span class="btn btn-light" id="basic-addon2"
                        >Follow our Journey</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <h5 class="text-light">About Us</h5>
                <p class="mt-4">
                  Today, we help people sign, notarise, verify and manage
                  documents, fully online.
                </p>
              </div>

              <div
                class="col-lg-2 col-md-4 col col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <h5 class="text-light">Solutions</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li>
                    <a href="#basic" class="text-foot">For Individuals</a>
                  </li>
                  <li>
                    <a href="#pro" class="text-foot">For Teams</a>
                  </li>
                  <li>
                    <a href="#business" class="text-foot"> For Business</a>
                  </li>

                  <li>
                    <router-link
                      :to="{ name: 'resource.partners' }"
                      class="text-foot"
                      exact
                    >
                      <span>Partners</span> <span class="submenu-arrow"></span>
                    </router-link>
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-2 col-md-4 col col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <h5 class="text-light">Support</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li>
                    <router-link
                      :to="{ name: 'resource.faq' }"
                      class="text-foot"
                      exact
                    >
                      FAQs</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'resource.blog' }"
                      class="text-foot"
                      exact
                    >
                      Blog</router-link
                    >
                  </li>

                  <li>
                    <router-link :to="{ name: 'contact' }" class="text-foot">
                      Contact Us</router-link
                    >
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-2 col-md-4 col col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <h5 class="text-light">Legals</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      Terms of Use</a
                    >
                  </li>

                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      Cookies Policy</a
                    >
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-3 col-md-4 col col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <ul class="list-unstyled social-icon foot-social-icon mb-0">
                  <li class="list-inline-item me-1">
                    <a
                      href="https://www.instagram.com/mytonote/"
                      class="rounded"
                    >
                      <Icon icon="akar-icons:instagram-fill" />
                    </a>
                  </li>
                  <li class="list-inline-item me-1">
                    <a
                      href="https://twitter.com/gettonote?s=11"
                      class="rounded"
                    >
                      <Icon icon="iconoir:twitter" />
                    </a>
                  </li>
                  <li class="list-inline-item me-1">
                    <a
                      href="https://www.linkedin.com/company/gettonote"
                      class="rounded"
                    >
                      <Icon icon="akar-icons:linkedin-fill" />
                    </a>
                  </li>
                </ul>
                <p class="mt-4">
                  1625B Saka Jojo Street, off Idejo Victoria Island, Lagos,
                  Nigeria
                </p>
                <div class="d-none">
                  <p class="h5 text-light">ToNote Inc.</p>

                  <div>8 The GRN STE A Dover DE 19901</div>
                </div>
                <div>+234 814 650 7035</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-py-30 footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-start">
              <p class="mb-0">
                ©
                {{ new Date().getFullYear() }}
                ToNote Inc.
              </p>
            </div>
          </div>

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0 d-none">
            <!-- <ul class="list-unstyled text-sm-end mb-0">
              <li class="list-inline-item"><a href="javascript:void(0)"><img
                    src="assets/images/payments/american-ex.png" class="avatar avatar-ex-sm" title="American Express"
                    alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/discover.png"
                    class="avatar avatar-ex-sm" title="Discover" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img
                    src="assets/images/payments/master-card.png" class="avatar avatar-ex-sm" title="Master Card"
                    alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/paypal.png"
                    class="avatar avatar-ex-sm" title="Paypal" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/visa.png"
                    class="avatar avatar-ex-sm" title="Visa" alt=""></a></li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="card cookie-popup shadow rounded py-3 px-4 d-none">
    <p class="text-muted mb-0">
      This website uses cookies to provide you with a great user experience. By
      using it, you accept our
      <a href="https://shreethemes.in/" target="_blank" class="text-success h6"
        >use of cookies</a
      >
    </p>
    <div class="cookie-popup-actions text-end">
      <button><i class="uil uil-times text-dark fs-4"></i></button>
    </div>
  </div>

  <a href="#" @click="topFunction" id="back-to-top" class="back-to-top fs-5">
    <Icon icon="akar-icons:arrow-up" />
  </a>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

const backToTopBn = ref("");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (backToTopBn.value != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      backToTopBn.value.style.display = "block";
    } else {
      backToTopBn.value.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// const isShow = true;
onMounted(() => {
  backToTopBn.value = document.getElementById("back-to-top");
});
</script>

<style scoped></style>

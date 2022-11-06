<template>
  <section class="bg-half-100 d-table w-100 bg-gradient">
    <div class="container-fluid py-5">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="pages-heading">
            <h1 class="mb-0 text-center">Frequently Asked <br />Questions</h1>
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                Have questions? We’re here to help you
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="position-relative d-none">
    <div class="shape overflow-hidden text-color-white">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-5 col-12">
          <div class="card section-title p-4 rounded">
            <ul
              class="nav nav-pills justify-content-center bg-transparent mb-0"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link rounded shadow active"
                  id="pills-buying-tab"
                  data-bs-toggle="pill"
                  href="#pills-buying"
                  role="tab"
                  aria-controls="pills-buying"
                  aria-selected="true"
                >
                  <div class="text-start py-1 px-3">
                    <h6 class="mb-0">ToNote For Users</h6>
                  </div>
                </a>
              </li>

              <li class="nav-item" role="presentation">
                <a
                  class="nav-link rounded shadow"
                  id="pills-general-tab"
                  data-bs-toggle="pill"
                  href="#pills-general"
                  role="tab"
                  aria-controls="pills-general"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="text-start py-1 px-3">
                    <h6 class="mb-0">ToNote For Notary</h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-12 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade active show"
              id="pills-buying"
              role="tabpanel"
              aria-labelledby="pills-buying-tab"
            >
              <div class="section-title mt-4 d-none" id="tech">
                <h5>For Users</h5>
              </div>

              <div class="accordion mt-4 pt-2" id="generalquestion">
                <template
                  v-for="({ id, question, answer }, index) in userQue"
                  :key="index"
                >
                  <div class="accordion-item rounded my-2">
                    <h2 class="accordion-header" :id="'headingPart-users' + id">
                      <button
                        class="accordion-button border-0 bg-light collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#collapsePart-users' + id"
                        aria-expanded="true"
                        :aria-controls="'collapsePart-users' + id"
                      >
                        {{ question }}
                      </button>
                    </h2>
                    <div
                      :id="'collapsePart-users' + id"
                      class="accordion-collapse border-0 collapse"
                      :class="[id == 1 ? 'show' : 'collapse']"
                      :aria-labelledby="'headingPart-users' + id"
                      data-bs-parent="#generalquestion"
                    >
                      <div class="accordion-body text-muted">
                        <p v-html="answer" />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-general"
              role="tabpanel"
              aria-labelledby="pills-general-tab"
            >
              <div class="section-title d-none" id="general">
                <h5>For Notaries</h5>
              </div>

              <div class="accordion mt-4 pt-2" id="notaryquestion">
                <template
                  v-for="({ id, question, answer }, index) in notaryQue"
                  :key="index"
                >
                  <div class="accordion-item rounded my-2">
                    <h2
                      class="accordion-header"
                      :id="'headingPart-notary' + id"
                    >
                      <button
                        class="accordion-button border-0 bg-light collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#collapsePart-notary' + id"
                        aria-expanded="true"
                        :aria-controls="'collapsePart-notary' + id"
                      >
                        {{ question }}
                      </button>
                    </h2>
                    <div
                      :id="'collapsePart-notary' + id"
                      class="accordion-collapse border-0 collapse"
                      :class="[id == 1 ? 'show' : 'collapse']"
                      :aria-labelledby="'headingPart-notary' + id"
                      data-bs-parent="#notaryquestion"
                    >
                      <div class="accordion-body text-muted">
                        <p v-html="answer" />
                      </div>
                    </div>
                  </div>
                </template>

                <div class="accordion-item rounded d-none">
                  <h2 class="accordion-header" id="headingfive">
                    <button
                      class="accordion-button border-0 bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded="true"
                      aria-controls="collapsefive"
                    >
                      What is ToNote ?
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    class="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingfive"
                    data-bs-parent="#generalquestion"
                  >
                    <div class="accordion-body text-muted">
                      ToNote is a legally binding and fully remote way to sign,
                      notarise, and share documents with ease.
                    </div>
                  </div>
                </div>

                <div class="accordion-item rounded mt-2 d-none">
                  <h2 class="accordion-header" id="headingsix">
                    <button
                      class="accordion-button border-0 bg-light collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesix"
                      aria-expanded="false"
                      aria-controls="collapsesix"
                    >
                      How do I notarise a document with ToNote ?
                    </button>
                  </h2>
                  <div
                    id="collapsesix"
                    class="accordion-collapse border-0 collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#generalquestion"
                  >
                    <div class="accordion-body text-muted">
                      <div class="card-body">
                        <p class="h6">
                          Follow these simple steps to get an affidavit or
                          request a notary session:
                        </p>
                        <p>
                          1. Sign up on the ToNote platform and complete your
                          profile
                        </p>
                        <p>
                          2. On the dashboard, you can choose to get an
                          affidavit or request a notary session.
                        </p>
                        <p>3. Complete the request form.</p>
                        <p>4. Make payment.</p>
                        <p>
                          5. Once payment is received, we will connect you with
                          a notary and let you know if your virtual presence is
                          required.
                        </p>
                        <p>6. Join a conference call if necessary.</p>
                        <p>
                          7. The process is complete. Your documents will be
                          emailed to you or delivered to your door-step
                          depending on your choice. Delivery fees apply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="position-absolute top-50 end-0 translate-middle-y"
      style="z-index: -1; opacity: 0.1"
    >
      <img src="/assets/images/icon-gradient.html" height="550" alt="" />
    </div>
    <GetStarted />
  </section>
</template>

<script setup>
import { users, notary } from "./data.js";
import { ref } from "vue";
import GetStarted from "@/components/GetStartedPage.vue";

const userQue = ref("");
const notaryQue = ref("");

userQue.value = users;
notaryQue.value = notary;

// console.log(userQue.value);
</script>

<style scoped></style>

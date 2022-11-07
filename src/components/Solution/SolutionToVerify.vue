<template>
  <section class="section bg-gradient">
    <div class="container mt-60 mt-4">
      <div class="row align-items-center">
        <div
          class="col-lg-5 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
        >
          <div class="section-title animate__animated animate__slideInLeft">
            <h2 class="page-header">ToVerify</h2>
            <p class="page-subheader">
              Enter your email below and get early access when we launch.
            </p>

            <form class="row">
              <div class="col-10 order-0 order-md-1">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control py-3"
                    placeholder="Enter your email"
                    name=""
                  />
                </div>
                <div class="form-group mt-2">
                  <button class="btn btn-primary fw-normal py-3">
                    Get early access <Icon icon="akar-icons:arrow-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          class="col-lg-7 col-md-6 order-1 order-md-2 d-flex justify-content-end"
        >
          <div class="p-0">
            <div class="card-body mt-sm-5 animate__animated animate__zoomIn">
              <div class="lg-screen">
                <img
                  src="/assets/images/illustrator/toverify.png"
                  class="img-fluid lg-screen animate__animated animate__zoomIn"
                  alt=""
                />
              </div>
              <div class="sm-screen">
                <img
                  src="/assets/images/illustrator/toverify-sm.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-primary">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title mb-4 pb-2 text-center">
            <div class="title2" style="display: inline-block">
              <span class="text-title-orange">ToVerify</span> makes it easy to
              trust the authenticity of every document received.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="text-center subcribe-form my-4 py-2 lg-screen">
            <form>
              <input
                type="text"
                id="document_number"
                name="document_number"
                readonly
                class="rounded bg-white-50 border"
                placeholder="Provide document number"
              />
              <div class="">
                <button type="submit" class="btn btn-primary">
                  Coming Soon <Icon icon="akar-icons:arrow-right" />
                </button>
              </div>
            </form>
          </div>

          <div class="text-center my-4 py-2 sm-screen">
            <form>
              <div class="">
                <input
                  type="text"
                  name="document_number"
                  class="form-control w-100 rounded border"
                  placeholder="Provide document number"
                  style="color: #fff !important; background-color: transparent"
                />
              </div>

              <div class="my-2">
                <button type="submit" class="btn btn-light w-100">
                  Coming Soon <Icon icon="akar-icons:arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="text-center">
          <img
            src="/assets/images/illustrator/comingsoon.png"
            class="img-fluid d-none"
            width="400"
            alt=""
          />
        </div>
        <div class="row">
          <div class="text-light text-center py-2 d-none">
            Our technology simplifies onboarding, KYC and due diligence
            processes by using technology to validate evidence of identity,
            utility, certification and notarised documents.
          </div>
        </div>
        <div class="row align-items-center">
          <div class="sub-coming">
            We are working hard to get this up and running.
          </div>
          <div class="text-center text-light pt-4">
            In the meantime, Please send an email to ask@gettonote.com to find
            out more about the document authentication services that we offer
          </div>
          <div class="progress-box my-5">
            <div class="progress my-progress">
              <div
                class="progress-bar position-relative bg-primary-50 my-progress-bar"
                style="width: 50%"
              >
                <div class="progress-value d-block text-muted h6">50%</div>
              </div>
            </div>
          </div>

          <div class="text-center py-4">
            <button class="btn btn-outline-white fw-normal">
              Notify me <Icon icon="akar-icons:arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>

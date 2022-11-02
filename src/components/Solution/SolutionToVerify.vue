<template>
  <section class="section bg-gradient">
    <div class="container mt-60 my-5">
      <div class="row align-items-center">
        <div
          class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
        >
          <div class="section-title">
            <h2 class="page-header">ToVerify</h2>
            <p class="page-subheader">
              Trust the authenticity of all documents received.
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
                <div class="form-group mt-2 btn-route">
                  <button class="btn btn-primary fw-normal py-3">
                    Get early access
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          class="col-lg-6 col-md-6 order-1 order-md-2 d-flex justify-content-end"
        >
          <div class="p-2">
            <div class="card-body">
              <img
                src="/assets/images/illustrator/toverify.png"
                class="img-fluid"
                alt=""
              />
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
          <div class="text-center subcribe-form my-4 py-2">
            <form>
              <input
                type="text"
                id="document_number"
                name="document_number"
                readonly
                class="rounded bg-white-50 border"
                placeholder="Provide document number"
              />
              <div class="btn-route">
                <button type="submit" class="btn btn-primary">
                  Coming Soon
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="text-center">
          <img
            src="/assets/images/illustrator/comingsoon.png"
            class="img-fluid"
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
            In the meantime, please email ask@gettonote.com to find out more
            about the document authentication services that we offer
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

          <div class="text-center py-4 btn-route">
            <button class="btn btn-outline-white fw-normal">Notify me</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>

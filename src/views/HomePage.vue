<template>
  <div class="bg-gradient">
    <HomeHero />

    <HomePartners />
  </div>

  <HomeServices />

  <HomePlan id="basic">
    <template #aside-left>
      <div class="col-lg-5 col-md-6 col-12">
        <div class="section-title" style="padding-left: 1rem !important">
          <h2>ToNote Basic</h2>
          <p class="sub-title">
            Electronically sign, notarise and share essential documents with
            third parties, from anywhere, at any time. The basic plan is
            absolutely free and great for personal use.
          </p>
          <div class="route-link">
            <a href="">Get Started<i class="mdi mdi-arrow-right me-2"></i> </a>
          </div>
        </div>
      </div>
    </template>
    <template #aside-right>
      <div class="col-lg-7 col-md-6 col-12">
        <div class="card">
          <div class="card-body">
            <img
              src="assets/images/illustrator/asset1.png"
              width=""
              class="img-fluid lg-screen"
              alt=""
            />
            <img
              src="assets/images/illustrator/asset-sm-1.png"
              width=""
              class="img-fluid sm-screen"
              alt=""
            />
          </div>
        </div>
      </div>
    </template>
  </HomePlan>

  <HomePlan id="pro">
    <template #aside-left>
      <div class="col-lg-7 col-md-6 col-12 order-1 order-lg-0 p-0">
        <div class="card">
          <div class="card-body">
            <img
              src="assets/images/illustrator/pro.png"
              width=""
              class="img-fluid lg-screen"
              alt=""
            />
            <img
              src="assets/images/illustrator/asset-sm-2.png"
              width=""
              class="img-fluid sm-screen"
              alt=""
            />
          </div>
        </div>
      </div>
    </template>
    <template #aside-right>
      <div class="col-lg-5 col-md-6 col-12 order-0 order-lg-1">
        <div class="section-title" style="padding-left: 1rem !important">
          <h2>ToNote Pro</h2>
          <div class="sub-header my-3">
            Set permissions and restrictions for teams
          </div>
          <p class="sub-title">
            When it comes to documentation management, we understand team
            dynamics and how roles and responsibilities are shared. <br />This
            is why you can set permissions and restrictions, selecting which
            team members are able to prepare, review, e-sign, notarise and share
            essential documentation.
          </p>
          <div class="route-link">
            <a href="">Get Started<i class="mdi mdi-arrow-right me-2"></i> </a>
          </div>
        </div>
      </div>
    </template>
  </HomePlan>

  <HomePlan id="business">
    <template #aside-left>
      <div class="col-lg-5 col-md-6 col-12 order-0 order-lg-0 g-0">
        <div class="section-title" style="padding-left: 1rem !important">
          <h2>ToNote for Business</h2>
          <div class="sub-header my-3">Close deals faster/seamlessly.</div>
          <p class="sub-title">
            Are you a business that has customers who need to sign, certify and
            submit documents from time to time? We have automated this process
            so that you and your customers will now be able to collaboratively
            sign & certify essential documents or swear affidavits virtually and
            in record time. Closing transactions has never been this easy.
          </p>
          <div class="route-link">
            <a href="">Get Started<i class="mdi mdi-arrow-right me-2"></i> </a>
          </div>
        </div>
      </div>
    </template>
    <template #aside-right>
      <div class="col-lg-7 col-md-6 col-12 order-1 order-lg-0 g-0">
        <div class="card">
          <div class="card-body">
            <img
              src="assets/images/illustrator/business.png"
              class="img-fluid lg-screen"
              alt=""
            />
            <img
              src="assets/images/illustrator/asset-sm-3.png"
              width=""
              class="img-fluid sm-screen"
              alt=""
            />
          </div>
        </div>
      </div>
    </template>
  </HomePlan>

  <HomePlan>
    <template #aside-left>
      <div class="col-lg-5 col-md-6 col-12 order-0 order-lg-1">
        <div class="section-title" style="padding-left: 1rem !important">
          <h2>ToNote for Notaries</h2>
          <div class="sub-header my-3">
            Join Africa’s largest e-notary network today.
          </div>
          <p class="sub-title">
            Access a wide range of customers world-wide who are in need of
            notarial services for business or personal purposes.
            <br />
            <br />
            This means you can notarise client’s documents from anywhere using a
            combination of our e-signature, digital seal and audio-visual
            conferencing features.
          </p>
          <div class="route-link">
            <a href="">Get Started<i class="mdi mdi-arrow-right me-2"></i> </a>
          </div>
        </div>
      </div>
    </template>
    <template #aside-right>
      <div class="col-lg-7 col-md-6 col-12 order-1 order-lg-0 p-0">
        <div class="card">
          <div class="card-body">
            <img
              src="assets/images/illustrator/asset4.png"
              class="img-fluid lg-screen"
              alt=""
            />
            <img
              src="assets/images/illustrator/asset-sm-4.png"
              width=""
              class="img-fluid sm-screen"
              alt=""
            />
          </div>
        </div>
      </div>
    </template>
  </HomePlan>

  <section class="section w-100 bg-half-100 cta">
    <div class="container pt-5">
      <div class="background">
        <div class="row align-items-center p-5 high">
          <div class="col-lg-7 col-12 high d-flex align-items-center">
            <div>
              <h2 class="py-2">Getting started is easy</h2>
              <p class="py-2">
                Contact us to find out more about our signature and notary
                solutions for your personal or business needs.
              </p>
              <div class="py-3">
                <div class="btn-group btn-route">
                  <button class="btn btn-light fw-normal">Contact Sales</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HomeHero from "@/components/Home/HomeHero.vue";
import HomePartners from "../components/Home/HomePartners.vue";
import HomeServices from "@/components/Home/HomeServices.vue";
import HomePlan from "@/components/Home/HomePlan.vue";
</script>

<style scoped></style>

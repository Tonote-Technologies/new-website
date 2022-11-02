<template>
  <section class="section w-100 bg-half-100 border-bottom pb-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 mb-4 pb-2">
          <div
            class="card blog blog-primary rounded border-0 shadow overflow-hidden"
          >
            <div class="row g-0">
              <div class="col-md-6 order-2 order-md-1 align-items-center">
                <div class="card-body content bg-primary">
                  <h3 class="my-5">
                    <a
                      href="javascript:void(0)"
                      class="card-title title text-light"
                      >Joining our Notary community as a Lawyer</a
                    >
                  </h3>
                  <p class="text-light my-5">
                    We are building a community that recognizes the notary
                    public service and.
                  </p>
                  <div class="post-meta d-flex justify-content-between my-5">
                    <div class="fw-normal">
                      <a
                        href="blog-detail.html"
                        class="btn btn-outline-white readmore"
                        >Read More
                        <i class="uil uil-angle-right-b align-middle"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 order-1 order-md-2 p-0 bg-dark">
                <img
                  src="/assets/images/blog/blog-1.png"
                  class="img-fluid"
                  width="600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-6">
          <section class="my-3 ms-3">
            <h2>Other Articles</h2>
            <div class="d-flex justify-content-around">
              <div class="btn rounded-pill btn-primary fs-12">All</div>
              <div class="btn rounded-pill smoke-yellow fs-12">E-Signing</div>
              <div class="btn rounded-pill smoke-yellow fs-12">
                Notarisation
              </div>
              <div class="btn rounded-pill smoke-yellow fs-12">Affidavit</div>
              <div class="btn rounded-pill smoke-yellow fs-12">
                Productivity
              </div>
              <div class="btn rounded-pill smoke-yellow fs-12">
                Time Management
              </div>
              <div class="btn rounded-pill smoke-yellow fs-12">Climate</div>
            </div>
          </section>
          <div class="row">
            <div v-for="(item, index) in 8" :key="index">
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <!-- <a class="pe-3" href="#"> AS </a> -->
                  <div class="commentor-detail">
                    <div class="d-flex justify-content-around">
                      <small class="text-muted"
                        >15th August, 2021 at 01:25 pm</small
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center border-bottom my-3 pb-5">
                <div class="flex-1 ms-3">
                  <a
                    href="javascript:void(0)"
                    class="d-block title text-dark h4"
                    >Explaining how ToNote for Businesses works</a
                  >
                  <p class="esept" style="padding-right: 4rem">
                    Today, we help people sign, notarise, verify and manage
                    documents, fully online. By making these everyday activities
                    easier, we encourage digital transformation across personal
                    and business functions.
                  </p>
                  <div class="d-inline">
                    <span class="btn btn-light rounded-pill">Business</span>
                    <span class="text-muted"> 3 min read</span>
                  </div>
                </div>
                <img
                  src="/assets/images/blog/blog-2.png"
                  class="avatar avatar-large rounded"
                  style="width: auto"
                  alt=""
                />
              </div>
            </div>

            <div class="col-12">
              <ul class="pagination justify-content-center mb-0">
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    >Prev</a
                  >
                </li>
                <li class="page-item active">
                  <a class="page-link" href="javascript:void(0)">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">3</a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    >Next</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="card border-0 sidebar sticky-bar ms-lg-4">
            <div class="card-body p-0">
              <div class="text-center">
                <span
                  class="bg-light d-block py-2 rounded shadow text-center h6 mb-0"
                >
                  Related Articles
                </span>
              </div>

              <div v-for="(item, index) in 2" :key="index">
                <div class="widget mt-4">
                  <div
                    class="card blog blog-primary rounded border-0 shadow overflow-hidden"
                  >
                    <div class="position-relative">
                      <img
                        :src="`/assets/images/blog/blog-` + item + `.png`"
                        class="card-img-top"
                        alt="Blog"
                      />
                      <div class="overlay rounded-top"></div>
                    </div>
                    <div class="card-body content">
                      <h6>
                        <a
                          href="javascript:void(0)"
                          class="card-title title text-dark"
                          >How apps is changing the IT world</a
                        >
                      </h6>
                      <div
                        class="post-meta d-flex justify-content-between mt-3"
                      >
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item me-2 mb-0">
                            <a href="javascript:void(0)" class="text-muted like"
                              ><i class="uil uil-folder me-1"></i>
                              Notarisation</a
                            >
                          </li>
                        </ul>
                        <a href="blog-detail.html" class="text-muted readmore">
                          <i class="uil uil-clock align-middle me-1"></i>Over a
                          week
                        </a>
                      </div>
                      <p class="esept">
                        Today, we help people sign, notarise, verify and manage
                        documents, fully online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget mt-4">
                <span
                  class="bg-light d-block py-2 rounded shadow text-center h6 mb-0"
                >
                  Tagclouds
                </span>

                <div class="tagcloud text-center mt-4">
                  <a href="jvascript:void(0)" class="rounded">Business</a>
                  <a href="jvascript:void(0)" class="rounded">Finance</a>
                  <a href="jvascript:void(0)" class="rounded">Marketing</a>
                  <a href="jvascript:void(0)" class="rounded">Fashion</a>
                  <a href="jvascript:void(0)" class="rounded">Bride</a>
                  <a href="jvascript:void(0)" class="rounded">Lifestyle</a>
                  <a href="jvascript:void(0)" class="rounded">Travel</a>
                  <a href="jvascript:void(0)" class="rounded">Beauty</a>
                  <a href="jvascript:void(0)" class="rounded">Video</a>
                  <a href="jvascript:void(0)" class="rounded">Audio</a>
                </div>
              </div>

              <div class="widget mt-4">
                <span
                  class="bg-light d-block py-2 rounded shadow text-center h6 mb-0"
                >
                  Social Media
                </span>

                <ul
                  class="list-unstyled social-icon social text-center mb-0 mt-4"
                >
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram fea icon-sm fea-social"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path
                          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        ></path>
                        <line
                          x1="17.5"
                          y1="6.5"
                          x2="17.51"
                          y2="6.5"
                        ></line></svg
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter fea icon-sm fea-social"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                        ></path></svg
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-linkedin fea icon-sm fea-social"
                      >
                        <path
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        ></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle></svg
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>

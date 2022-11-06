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
            <div v-for="(item, index) in blogsData" :key="index">
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <!-- <a class="pe-3" href="#"> AS </a> -->
                  <div class="commentor-detail">
                    <div class="d-flex justify-content-around">
                      <small class="text-muted">{{
                        dateTime(item.created_at)
                      }}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center border-bottom my-3 pb-5">
                <div class="flex-1 ms-3">
                  <a
                    href="javascript:void(0)"
                    class="d-block title text-dark h4"
                    >{{ item.title }}</a
                  >
                  <p class="esept" style="padding-right: 4rem">
                    {{ item.excerpt }}
                  </p>
                  <div class="d-inline">
                    <span class="btn btn-light rounded-pill">{{
                      item.category
                    }}</span>
                    <!-- <span class="text-muted"> 3 min read</span> -->
                  </div>
                </div>
                <img
                  :src="item.file"
                  class="avatar avatar-large rounded"
                  style="width: 176px"
                  :alt="item.title"
                />
                <!-- <img
                  src="/assets/images/blog/blog-2.png"
                  class="avatar avatar-large rounded"
                  style="width: 176px; height:140px"
                  alt=""
                /> -->
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

              <div v-for="(item, index) in blogsData" :key="index">
                <div class="widget mt-4">
                  <div
                    class="card blog blog-primary rounded border-0 shadow overflow-hidden"
                  >
                    <div class="position-relative text-center">
                      <img
                        :src="item.file"
                        class="avatar avatar-large rounded"
                        style="width: 176px"
                        :alt="item.title"
                      />
                      <div class="overlay rounded-top"></div>
                    </div>
                    <div class="card-body content">
                      <h6 class="text-truncate" style="width: 200px">
                        <a
                          href="javascript:void(0)"
                          class="card-title title text-dark"
                          >{{ item.title }}</a
                        >
                      </h6>
                      <div
                        class="post-meta d-flex justify-content-between mt-3"
                      >
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item mb-0">
                            <a href="javascript:void(0)" class="text-muted like"
                              ><i class="uil uil-folder"></i> Notarisation</a
                            >
                          </li>
                        </ul>
                        <a href="#" class="text-muted readmore">
                          <i class="uil uil-clock align-middle"></i>Over a week
                        </a>
                      </div>
                      <p class="esept text-trunncate" style="width: 200px">
                        {{ item.excerpt }}
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
    <GetStarted />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import GetStarted from "@/components/GetStartedPage.vue";
import { db } from "@/firebase";
import moment from "moment";
// import { Icon } from "@iconify/vue";

// import { useActions } from "vuex-composition-helpers/dist";

// const { getUserDocument } = useActions({
//   getUserDocument: "/create",
// });

const blogsData = ref([]);

const dateTime = (value) => {
  return moment(value).format("Do MMM YYYY, HH:mm A");
};

onMounted(() => {
  onSnapshot(collection(db, "blogPost"), (querySnapshot) => {
    const dataBlogs = [];

    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      const blogObj = {
        docId: doc.id,
        title: doc.data().title,
        category: doc.data().category,
        excerpt: doc.data().excerpt,
        content: doc.data().content,
        status: doc.data().status,
        file: doc.data().file,
        created_at: doc.data().created_at,
      };
      dataBlogs.push(blogObj);
    });
    blogsData.value = dataBlogs;
    console.log(blogsData.value);
  });
});
</script>

<style scoped></style>

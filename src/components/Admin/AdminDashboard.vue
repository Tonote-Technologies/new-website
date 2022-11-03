<template>
  <div class="container-fluid">
    <div class="layout-specing card">
      <div class="d-md-flex justify-content-between">
        <div>
          <h5 class="mb-0">Blog Post</h5>

          <nav aria-label="breadcrumb" class="d-inline-block mt-1">
            <!-- <span>View list of all blog posts and create a new one.</span> -->
          </nav>
        </div>

        <div class="my-4 mt-sm-0">
          <router-link :to="{ name: 'admin.create' }" class="btn btn-primary"
            >Create Blog</router-link
          >
        </div>
      </div>

      <div class="row">
        <div class="card border-0">
          <div class="d-flex justify-content-between p-4 shadow rounded-top">
            <h6 class="fw-bold mb-0">
              View list of all blog posts and create a new one.
            </h6>

            <ul class="list-unstyled mb-0">
              <li class="dropdown dropdown-primary list-inline-item">
                <button
                  type="button"
                  class="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical"></i>
                </button>
                <div
                  class="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3"
                >
                  <a class="dropdown-item text-dark" href="#"> In Draft</a>
                  <a class="dropdown-item text-dark" href="#"> Live</a>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="table-responsive shadow rounded-bottom"
            data-simplebar="init"
            style="height: 545px"
          >
            <div class="simplebar-wrapper" style="margin: 0px">
              <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer"></div>
              </div>
              <div class="simplebar-mask">
                <div class="simplebar-offset" style="right: 0px; bottom: 0px">
                  <div
                    class="simplebar-content-wrapper"
                    tabindex="0"
                    role="region"
                    aria-label="scrollable content"
                    style="height: 100%; overflow: scroll"
                  >
                    <div class="simplebar-content" style="padding: 0px">
                      <div class="table-responsive">
                        <!-- <table class="table table-center bg-white mb-0"> -->
                        <!-- {{ blogsData }} -->
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th class="border-bottom p-3">No.</th>
                              <th
                                class="border-bottom p-3"
                                style="min-width: 220px"
                              >
                                Title
                              </th>
                              <th class="border-bottom p-3">Caveat</th>
                              <th
                                class="border-bottom p-3"
                                style="min-width: 250px"
                              >
                                Category
                              </th>
                              <th class="border-bottom p-3">Status</th>
                              <th>created_at</th>
                              <th
                                class="text-end border-bottom p-3"
                                style="min-width: 100px"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(blog, index) in blogsData" :key="index">
                              <th class="p-3">{{ index + 1 }}</th>
                              <td class="p-3">
                                <div
                                  class="text-truncate"
                                  style="max-width: 100px"
                                >
                                  <a href="#" class="text-primary">
                                    <div class="d-flex align-items-center">
                                      <img
                                        :src="blog.file"
                                        class="avatar avatar-ex-small rounded-circle shadow"
                                        alt=""
                                      />
                                      <span class="ms-2">{{ blog.title }}</span>
                                    </div>
                                  </a>
                                </div>
                              </td>
                              <td
                                class="p-3 text-truncate"
                                style="max-width: 200px"
                              >
                                {{ blog.excerpt }}
                              </td>
                              <td class="p-3">
                                {{ blog.category }}
                              </td>
                              <td class="text-center p-3">
                                <div
                                  class="badge rounded px-3 py-1"
                                  :class="[
                                    blog.status == 'draft'
                                      ? 'bg-soft-danger'
                                      : 'bg-soft-success',
                                  ]"
                                >
                                  {{ blog.status }}
                                </div>
                              </td>
                              <td>{{ dateTime(blog.created_at) }}</td>
                              <td
                                class="p-3 d-flex justify-content-center align-item-center"
                              >
                                <button class="btn btn-sm btn-primary me-1">
                                  <Icon icon="icon-park-outline:preview-open" />
                                </button>
                                <router-link
                                  :to="{
                                    name: 'admin.edit',

                                    params: { blog_id: blog.docId },
                                  }"
                                  class="btn btn-sm btn-outline-primary"
                                >
                                  <Icon icon="icon-park-outline:edit" />
                                </router-link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="simplebar-placeholder"
                style="width: auto; height: 747px"
              ></div>
            </div>
            <div
              class="simplebar-track simplebar-horizontal"
              style="visibility: visible"
            >
              <div
                class="simplebar-scrollbar"
                style="
                  width: 688px;
                  transform: translate3d(0px, 0px, 0px);
                  display: block;
                "
              ></div>
            </div>
            <div
              class="simplebar-track simplebar-vertical"
              style="visibility: visible"
            >
              <div
                class="simplebar-scrollbar"
                style="
                  height: 397px;
                  transform: translate3d(0px, 0px, 0px);
                  display: block;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import moment from "moment";
import { Icon } from "@iconify/vue";

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
  });
});
</script>

<style scoped></style>

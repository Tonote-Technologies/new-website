<template>
  <div class="container">
    <div class="layout-specing">
      <section class="card p-4">
        <div class="d-md-flex justify-content-between">
          <div>
            <h5 class="mb-0">Edit Blog</h5>
          </div>

          <div class="my-4 mt-sm-0"></div>
        </div>
        <div class="row">
          <div v-if="error === true" class="danger">{{ errorMsg }}</div>
          <div class="col-md-8 my-5">
            <form @submit.prevent="updatePost" role="form">
              <div class="form-group">
                <label>Post Title </label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  v-model="title"
                  placeholder="Enter the title of the blog"
                  required
                />
              </div>

              <div class="form-group my-2">
                <label class="form-label">Blog Category</label>
                <select class="form-control" v-model="category" required>
                  <option value="">Select Category</option>
                  <option value="e-signing">E-signing</option>
                  <option value="buisness">Buisness</option>
                </select>
              </div>
              <div class="form-group">
                <label>
                  Featured Image - This image will be displayed on your blog
                  post!
                </label>
                <div class="form-group">
                  <div><img :src="file" width="150" :alt="title" /></div>
                  <template v-if="!isUpload">
                    <p>MAX FILE SIZE: 2MB</p>
                    <p class="text-danger">{{ fileValidated }}</p>
                    <DropZone @drop.prevent="drop" @change="selectedFile">
                      <template #format> PNG, JPEG OR JPG </template>
                      <template #input>
                        <input
                          type="file"
                          id="dropzoneFile"
                          class="dropzoneFile"
                          accept="image/png, image/jpg, image/jpeg"
                        />
                      </template>
                    </DropZone>
                  </template>
                  <template v-else>
                    <div
                      class="d-flex justify-content-center align-items-center my-2"
                    >
                      <div class="grid grid__1 w-100" style="height: 200px">
                        <div class="position-relative">
                          <img
                            :src="preview"
                            class="img-fluid"
                            width="120"
                            alt="preview"
                          />
                          <div
                            class="position-absolute top-0 start-100 translate-middle"
                          >
                            <button
                              class="btn-close bg-danger rounded-circle"
                              v-show="isUpload"
                              @click="isUpload = !isUpload"
                              style="padding: 10px"
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="form-group my-2">
                <label>Excerpt - optional</label>
                <textarea
                  required
                  class="form-control excerpt"
                  name="excerpt"
                  v-model="excerpt"
                  placeholder="Write an excerpt"
                  style="height: 120px"
                ></textarea>
              </div>

              <div class="form-group my-2">
                <label>Post content </label>
                <textarea
                  required
                  class="form-control bcontent"
                  name="content"
                  v-model="content"
                  style="height: 120px"
                  placeholder="Compose content for the blog post. Users will see everything on this post once it is published."
                ></textarea>
              </div>
              <div class="form-group my-2">
                <label class="label-control" for="status">Status</label>
                <div>
                  <select
                    v-model="status"
                    name="status"
                    type="checkbox"
                    class="form-control"
                  >
                    <option value="">Select Status</option>
                    <option value="draft">Draft</option>
                    <option value="live">Live</option>
                  </select>
                </div>
              </div>
              <div class="form-group my-2">
                <input type="hidden" name="created_at" v-model="created_at" />
              </div>
              <div class="">
                <!-- <button class="btn btn-md btn-outline-dark me-1">Save as draft</button> -->
                <button class="btn btn-md btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import DropZone from "@/components/DropZone.vue";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";

const isUpload = ref(false);

const dropzoneFile = ref("");
const preview = ref(null);
const fileValidated = ref("");
const isSelected = ref(false);

const preparedFile = (file) => {
  let reader = new FileReader();

  reader.onloadend = () => {
    preview.value = reader.result;
  };

  reader.readAsDataURL(file);
  isSelected.value = true;
};

const drop = (e) => {
  isUpload.value = true;
  let dropFiles = (dropzoneFile.value = e.dataTransfer.files[0]);
  const fileSize = dropFiles.size;
  const fileMb = fileSize / 1024 ** 2;
  if (fileMb >= 2) {
    isUpload.value = false;
    fileValidated.value = "Please select a file less than 2MB.";
    setTimeout(() => {
      isSelected.value = false;
    }, 100);
  }

  preparedFile(dropFiles);
};

const selectedFile = () => {
  isUpload.value = true;
  let dropFiles = (dropzoneFile.value =
    document.querySelector(".dropzoneFile").files[0]);
  const fileSize = dropFiles.size;
  const fileMb = fileSize / 1024 ** 2;

  if (fileMb >= 2) {
    isUpload.value = false;
    fileValidated.value = "Please select a file less than 2MB.";
    setTimeout(() => {
      isSelected.value = false;
    }, 100);
  }

  preparedFile(dropFiles);
};

const today = () => {
  return moment().format("YYYY-MM-DD, HH:mm A");
};

const route = useRouter();
const blogId = ref("");
const title = ref("");
const category = ref("");
const excerpt = ref("");
const content = ref("");
const status = ref("");
const file = ref("");
const updated_at = ref(today());
const error = ref(false);
const errorMsg = ref("");

const fetchData = async (docRef) => {
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    const data = docSnap.data();
    title.value = data.title;
    category.value = data.category;
    excerpt.value = data.excerpt;
    content.value = data.content;
    status.value = data.status;
    preview.value = file.value = data.file ;
    // file.value = data.file;
    updated_at.value = today();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

// const blogPost = ref([]);
const updatePost = () => {
  if (
    title.value != "" &&
    category.value != "" &&
    excerpt.value != "" &&
    content.value != "" &&
    status.value != ""
  ) {
    error.value = false;
    errorMsg.value = "";

    const sendData = doc(db, "blogPost", blogId.value);
    const obj = {
      title: title.value,
      category: category.value,
      excerpt: excerpt.value,
      content: content.value,
      status: status.value,
      file: preview.value,
    };
    // console.log(obj);
    // console.log(updateDoc);
    updateDoc(sendData, obj);
    route.push({ name: "admin.dashboard" }); // return;
  }
  error.value = true;
  errorMsg.value = "Please fill out all the fields!";
  console.log(error.value);
  console.log(errorMsg.value);
  return;
};

onMounted(() => {
  blogId.value = route.currentRoute.value.params.blog_id;
  const docRef = doc(db, "blogPost", blogId.value);
  fetchData(docRef);
});
</script>

<style scoped>
.dropzoneFile {
  display: none;
}
</style>

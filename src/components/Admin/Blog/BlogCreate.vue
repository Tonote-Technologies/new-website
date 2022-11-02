<template>
  <div class="container">
    <div class="layout-specing">
      <div>
        <h5>Write New Post</h5>
        <p>Create your own post by creating your own words and content.</p>
      </div>

      <section class="card p-4">
        <div class="d-md-flex justify-content-between">
          <div>
            <h5 class="mb-0">Blog Post</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-1">
              <!-- <span>View list of all blog posts and create a new one.</span> -->
            </nav>
          </div>

          <div class="my-4 mt-sm-0"></div>
        </div>
        <div class="row">
          <div class="col-md-8 my-5">
            <form method="post" role="form">
              <div class="form-group">
                <label>Post Title </label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Enter the title of the blog"
                />
              </div>

              <div class="form-group my-2">
                <label class="form-label">Blog Category</label>
                <select class="form-control">
                  <option>E-signing</option>
                  <option>Buisness</option>
                </select>
              </div>
              <div class="form-group">
                <label>
                  Featured Image - This image will be displayed on your blog
                  post!
                </label>
                <div class="form-group">
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
                  class="form-control excerpt"
                  name="excerpt"
                  placeholder="Write an excerpt"
                  style="height: 120px"
                ></textarea>
              </div>

              <div class="form-group my-2">
                <label>Post content </label>
                <textarea
                  class="form-control bcontent"
                  name="content"
                  style="height: 120px"
                  placeholder="Compose content for the blog post. Users will see everything on this post once it is published."
                ></textarea>
              </div>

              <div class="">
                <button class="btn btn-md btn-outline-dark me-1">
                  Save as draft
                </button>
                <button class="btn btn-md btn-primary">Publish</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropZone from "@/components/DropZone.vue";
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
</script>

<style scoped>
.dropzoneFile {
  display: none;
}
</style>

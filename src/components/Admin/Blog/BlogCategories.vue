<template>
  <div class="container-fluid">
    <div class="layout-specing card">
      <div class="d-md-flex justify-content-between">
        <div>
          <h5 class="mb-0">Blog Category</h5>

          <nav aria-label="breadcrumb" class="d-inline-block mt-1">
            <!-- <span>View list of all blog posts and create a new one.</span> -->
          </nav>
        </div>

        <div class="my-4 mt-sm-0">
          <a
            href="#"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#newblogadd"
            >Add Category</a
          >
          <!-- <router-link :to="{ name: 'admin.create' }" class="btn btn-primary">Add Category</router-link> -->
        </div>
      </div>

      <div class="row">
        <div class="card border-0">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" />
                  </th>
                  <th>Categories</th>
                  <th>Date Created</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" />
                  </td>
                  <td>E-signing</td>
                  <td>2022-08-12 at 17:15pm</td>
                  <td>
                    <div class="">
                      <button class="btn btn-sm btn-outline-primary">
                        Edit
                      </button>
                      <button class="btn btn-sm btn-outline-danger ms-1">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

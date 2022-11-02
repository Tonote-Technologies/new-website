<template>
  <nav id="sidebar" class="sidebar-wrapper sidebar">
    <div class="sidebar-content" data-simplebar="init" style="height: calc(100% - 60px);">
      <div class="simplebar-wrapper" style="margin: 0px;">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
            <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
              style="height: 100%; overflow: hidden scroll;">
              <div class="simplebar-content" style="padding: 0px;">
                <div class="sidebar-brand">
                  <a href="index.html">
                    <img src="@/assets/logo-b.png" height="24" class="logo-light-mode" alt="">
                    <img src="@/assets/logo-b-light.png" height="24" class="logo-dark-mode" alt="">
                    <span class="sidebar-colored">
                      <img src="@/assets/logo-b-light.png" height="24" alt="">
                    </span>
                  </a>
                </div>

                <ul class="sidebar-menu">
                  <!-- <li><a href="app/"><i class="ti ti-home me-2"></i>Dashboard</a></li> -->
                  <li>
                    <router-link :to="{ name: 'admin.dashboard' }" exact>
                      <i class="ti ti-home me-2"></i> Blog
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'admin.category' }" exact>
                      <i class="ti ti-home me-2"></i> Category
                    </router-link>
                  </li>

                </ul>
                <!-- sidebar-menu  -->
              </div>
            </div>
          </div>
        </div>
        <div class="simplebar-placeholder" style="width: auto; height: 1070px;"></div>
      </div>
      <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
        <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
      </div>
      <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
        <div class="simplebar-scrollbar" style="height: 187px; transform: translate3d(0px, 0px, 0px); display: block;">
        </div>
      </div>
    </div>


    <!-- Sidebar Footer -->
    <ul class="sidebar-footer list-unstyled mb-0 d-none">
      <li class="list-inline-item mb-0">
        <a href="https://1.envato.market/landrick" target="_blank" class="btn btn-icon btn-soft-light"><i
            class="ti ti-shopping-cart"></i></a> <small class="text-muted fw-medium ms-1">Buy Now</small>
      </li>
    </ul>
    <!-- Sidebar Footer -->
  </nav>
</template>

<script setup>

</script>

<style scoped>
/* <link href="../assets/libs/simplebar/simplebar.min.css" rel="stylesheet"> */
/* @import '/assets/libs/simplebar/simplebar.min.css' */
</style>
<template>
  <div class="main_wrap w-100 h-100 p-relative">
    <div
      class="file_wrap d-flex flex-column justify-content-between align-items-center"
      :class="{
        'cursor-pointer': !clickAbout && !clickPortfolio && !clickFinder,
      }"
      @click="onClickAbout"
    >
      <div class="file-icon"></div>
      <p class="d-inline-block">ABOUT ME</p>
    </div>
    <div
      class="file_wrap d-flex flex-column justify-content-between align-items-center"
      :class="{
        'cursor-pointer': !clickAbout && !clickPortfolio && !clickFinder,
      }"
      @click="onClickPortfolio"
    >
      <div class="file-icon"></div>
      <p class="d-inline-block">PORTFOLIO</p>
    </div>

    <dock-bar @finderClick="onClickFinder"></dock-bar>

    <!-- ABOUT ME Click 시  Modal -->
    <base-modal v-if="clickAbout" @modalClose="clickAbout = false">
      <template #modal-content>
        <file-about-modal></file-about-modal>
      </template>
    </base-modal>

    <!-- PORTFOLIO Click 시  Modal -->
    <base-modal v-if="clickPortfolio" @modalClose="clickPortfolio = false">
      <template #modal-content>
        <file-portfolio-modal></file-portfolio-modal>
      </template>
    </base-modal>

    <!-- Finder Icon Click 시  Modal -->
    <base-modal v-if="clickFinder" @modalClose="clickFinder = false">
      <template #modal-content>
        <finder-modal></finder-modal>
      </template>
    </base-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "@nuxtjs/composition-api";

import DockBar from "@/components/common/DockBar.vue";

import BaseModal from "@/components/common/Modal.vue";
import FileAboutModal from "@/components/modal/FileAboutModal.vue";
import FilePortfolioModal from "@/components/modal/FilePortfolioModal.vue";
import FinderModal from "@/components/modal/FinderModal.vue";

const clickAbout = ref<boolean>(false);
const clickPortfolio = ref<boolean>(false);
const clickFinder = ref<boolean>(false);

const onClickAbout = () => {
  if (!clickAbout.value && !clickPortfolio.value && !clickFinder.value) {
    clickAbout.value = true;
  }
  if (clickPortfolio.value || clickAbout.value || clickFinder.value) {
    return;
  }
};

const onClickPortfolio = () => {
  if (!clickAbout.value && !clickPortfolio.value && !clickFinder.value) {
    clickPortfolio.value = true;
  }
  if (clickAbout.value || clickPortfolio.value || clickFinder.value) {
    return;
  }
};

const onClickFinder = (v: boolean) => {
  clickFinder.value = v;

  if (clickAbout.value || clickPortfolio.value) {
    clickFinder.value = false;
    return;
  }
};

onMounted(() => {
  const onResizeListener = () => {
    if (window.innerWidth < 601) {
      clickAbout.value = false;
      clickPortfolio.value = false;
      clickFinder.value = false;
    }
  };

  window.addEventListener("resize", onResizeListener);
});
</script>

<script lang="ts">
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
.main_wrap {
  padding: 35px;
  // height: calc(100% - 4vh);

  .file_wrap {
    width: 80px;
    height: auto;
    gap: 7px;

    &:nth-child(1) {
      margin-top: 30px;
    }

    &:nth-child(2) {
      margin-top: 20px;
    }

    .file-icon {
      width: 75px;
      height: 60px;
      background-image: url("/image/main/file.png");
      background-position: center;
      background-size: cover;
    }

    p {
      font-size: 12px;
    }
  }
}

@media (max-width: 600px) {
  .main_wrap {
    padding: 15px;
    // height: 100%;

    .file_wrap {
      display: none;
    }
  }
}
</style>

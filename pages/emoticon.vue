<template>
  <div class="emoticon_wrap">
    <web-header :search-bar-title="'https://ogqmarket.naver.com/'"></web-header>
    <emoticon-header
      :class="{ 'border-bottom': scrollPosition > 30 }"
    ></emoticon-header>
    <emoticon-main></emoticon-main>
    <div class="emoticon_content_wrap w-100 d-flex justify-content-center">
      <emoticon-zip></emoticon-zip>
      <emoticon-buy></emoticon-buy>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "@nuxtjs/composition-api";

import WebHeader from "@/components/common/WebHeader.vue";

import EmoticonHeader from "@/components/emoticon/EmoticonHeader.vue";
import EmoticonMain from "@/components/emoticon/EmoticonMain.vue";
import EmoticonZip from "@/components/emoticon/EmoticonZip.vue";
import EmoticonBuy from "@/components/emoticon/EmoticonBuy.vue";

const scrollPosition = ref();

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });
});
</script>

<script lang="ts">
export default {
  layout: "scroll",
};
</script>

<style scoped lang="scss">
.emoticon_wrap {
  .border-bottom {
    border-bottom: 1px solid #ddd;
  }

  .emoticon_content_wrap {
    gap: 30px;
    margin-bottom: 100px;
  }
}

@media (max-width: 600px) {
  .emoticon_wrap {
    .emoticon_content_wrap {
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }
  }
}
</style>

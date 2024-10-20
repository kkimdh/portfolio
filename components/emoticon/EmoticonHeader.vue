<template>
  <div class="emoticon_header_wrap w-100 d-flex align-items-center p-fixed">
    <div class="market-logo"></div>
    <div class="market_nav_wrap d-flex align-items-center">
      <div
        v-for="list in marketNav.list"
        :key="`market-nav-${list.title}`"
        class="market-nav"
      >
        {{ list.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "@nuxtjs/composition-api";

const marketNav = reactive({
  list: [
    { title: "홈" },
    { title: "컨텐츠" },
    { title: "크리에이터" },
    { title: "굿즈" },
    { title: "이벤트" },
  ],
});
</script>

<style scoped lang="scss">
.emoticon_header_wrap {
  height: 8vh;
  top: 9vh;
  z-index: 3;
  background-color: #ffffff;

  .market-logo {
    width: 200px;
    height: 30px;
    background-image: url("/image/emoticon/market_logo.png");
    background-size: cover;
    background-position: center;
  }

  .market_nav_wrap {
    gap: 15px;
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
  }
}

@media (min-width: 430px) and (max-width: 600px) {
  .emoticon_header_wrap {
    height: 7vh;
    top: 10vh;

    .market-logo {
      width: 37vw;
      min-width: 160px;
      height: 10vw;
    }

    .market_nav_wrap {
      gap: 10px;
      font-size: 2.5vw;
    }
  }
}

@media (max-width: 429px) {
  .emoticon_header_wrap {
    height: 7vh;
    top: 10vh;

    .market-logo {
      width: 37vw;
      min-width: 160px;
      height: 10vw;
    }

    .market_nav_wrap {
      display: none;
    }
  }
}
</style>

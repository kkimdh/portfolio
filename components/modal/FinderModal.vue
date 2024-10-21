<template>
  <div class="finder_modal_wrap d-flex flex-wrap">
    <div
      v-for="list in contentList.list"
      :key="`content-${list.title}`"
      class="content d-flex flex-column text-center"
    >
      <div class="title_img_wrap">
        <template v-if="list.url">
          <a :href="list.router" target="blank">
            <div
              class="title-img w-100 h-100"
              :style="`background-image: url('/image/main/${list.img}.png')`"
            ></div>
          </a>
        </template>
        <template v-else>
          <div
            class="title-img w-100 h-100 cursor-pointer"
            :style="`background-image: url('/image/main/${list.img}.png')`"
            @click="$router.push({ path: `${list.router}` })"
          ></div>
        </template>
      </div>
      <span>{{ list.title }}</span>
      <span>{{ list.subTitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, reactive } from "@nuxtjs/composition-api";

const $router = useRouter();

const contentList = reactive({
  list: [
    {
      title: "Lie's Bedding",
      subTitle: "(Portfolio 1)",
      img: "portfolio_img_1",
      router: "https://dohye-liebeeding.netlify.app/",
      url: true,
    },
    {
      title: "Takeim",
      subTitle: "(Portfolio 2)",
      img: "portfolio_img_2",
      router: "https://dohye-takeim.netlify.app/",
      url: true,
    },
    {
      title: "Da Agency",
      subTitle: "(Portfolio 3)",
      img: "portfolio_img_3",
      router: "https://dohye-daagency.netlify.app/",
      url: true,
    },
    {
      title: "KBL Fantasy",
      subTitle: "(Real Service)",
      img: "kbl",
      router: "https://fantasy.kbl.or.kr",
      url: true,
    },
    {
      title: "Never OGQ Market",
      subTitle: "(Emoticon)",
      img: "emoticon",
      router: "emoticon",
      url: false,
    },
    {
      title: "About Me",
      subTitle: "",
      img: "about",
      router: "introduction",
      url: false,
    },
  ],
});
</script>

<style scoped lang="scss">
.finder_modal_wrap {
  gap: 10px;

  .content {
    width: 30%;
    height: 35%;
    font-family: "Nunito Sans";
    font-size: 14px;

    .title_img_wrap {
      width: 100%;
      height: 60%;
      box-shadow: 2px 3px 2px #cacaca;
      margin-bottom: 10px;

      .title-img {
        background-size: cover;
        background-position: center;
      }
    }
  }
}
</style>

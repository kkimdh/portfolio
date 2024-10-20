<template>
  <div class="about_modal_wrap d-flex flex-wrap">
    <div
      v-for="list in contentList.list"
      :key="`content-${list.title}`"
      class="content d-flex flex-column text-center"
    >
      <div class="title_img_wrap">
        <div
          class="title-img w-100 h-100 cursor-pointer"
          :style="`background-image: url('/image/main/${list.img}.png')`"
          @click="
            $router.push({
              path: `/introduction`,
              query: { category: `${list.query}` },
            })
          "
        ></div>
      </div>
      <span>{{ list.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, reactive } from "@nuxtjs/composition-api";

const $router = useRouter();

const contentList = reactive({
  list: [
    {
      title: "About Me",
      img: "about",
      query: "",
    },
    {
      title: "Skill",
      img: "skill",
      query: "skill",
    },
    {
      title: "Contact",
      img: "contact_me",
      query: "contact",
    },
  ],
});
</script>

<style scoped lang="scss">
.about_modal_wrap {
  gap: 25px;

  .content {
    width: 45%;
    height: 50%;
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

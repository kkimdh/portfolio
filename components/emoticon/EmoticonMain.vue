<template>
  <div class="emoticon_main_wrap w-100 set-center">
    <div class="emoticon-main"></div>
    <div class="emoticon-description d-flex flex-column">
      <div
        class="emoticon_icon_wrap d-flex align-items-center justify-content-end"
      >
        <div
          class="emoticon-heart-icon cursor-pointer"
          :style="`background-image: url(/image/emoticon/${
            clickHeart ? 'full_heart' : 'heart'
          }.png);`"
          @click="clickHeart = !clickHeart"
        ></div>
        <div class="emoticon-share-icon"></div>
      </div>
      <div class="title">왔다! 김북치</div>
      <div class="description">
        기획부터 디자인, 제작까지 100% 제가 직접 제작한 이모티콘으로, "네이버
        OGQ market" 에서 판매되고 있습니다.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@nuxtjs/composition-api";

const clickHeart = ref<boolean>(false);
</script>

<style scoped lang="scss">
.emoticon_main_wrap {
  padding: 15px;
  //   margin-top: calc(9vh + 8vh);
  margin-top: 17vh;
  gap: 10%;

  .emoticon-main {
    width: 250px;
    height: 250px;
    background-image: url("/image/emoticon/emoticon_zip/emoticon_main.png");
    background-size: cover;
    background-position: center;
  }

  .emoticon-description {
    width: 323px;
    height: 230px;
    font-weight: bold;

    .emoticon_icon_wrap {
      width: 100%;
      height: 50px;
      gap: 20px;

      .emoticon-share-icon,
      .emoticon-heart-icon {
        width: 23px;
        height: 23px;
        background-size: cover;
        background-position: center;
      }

      .emoticon-share-icon {
        background-image: url("/image/emoticon/share.png");
      }
    }

    .title {
      font-size: 20px;
      margin: 20px 0 30px 0;
    }

    .description {
      white-space: normal;
      font-size: 15px;
    }
  }
}

@media (max-width: 600px) {
  .emoticon_main_wrap {
    flex-direction: column;
    //   margin-top: calc(9vh + 7vh);
    margin-top: 16vh;
    gap: 15px;

    .emoticon-main {
      width: 220px;
      height: 220px;
    }

    .emoticon-description {
      width: 300px;
      height: 180px;

      .title {
        font-size: 18px;
        margin: 15px 0 25px 0;
      }

      .description {
        font-size: 15px;
      }
    }
  }
}
</style>

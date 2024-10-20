<template>
  <div
    class="dock_bar_wrap p-absolute d-flex flex-wrap justify-content-between align-items-center"
  >
    <div class="dock-icon finder" data-tooltip="파인더" @click="onClickFinder">
      <img src="/image/main/finder.png" alt="finder" />
    </div>

    <div class="dock-icon lie" data-tooltip="라이스베딩">
      <a href="https://dohye-liebeeding.netlify.app/" target="blank">
        <img src="/image/main/LIE.png" alt="LIE" />
      </a>
    </div>

    <div class="dock-icon takeim" data-tooltip="테이킴">
      <a href="https://dohye-takeim.netlify.app/" target="blank">
        <img src="/image/main/takeim.png" alt="takeim" />
      </a>
    </div>

    <div class="dock-icon da" data-tooltip="에이전시">
      <a href="https://dohye-daagency.netlify.app/" target="blank">
        <img src="/image/main/da.png" alt="da" />
      </a>
    </div>

    <div class="dock-icon artgallery" data-tooltip="아트갤러리">
      <a href="https://dohye-double-h-artgallery.netlify.app/" target="blank">
        <img src="/image/main/artgallery.png" alt="artgallery" />
      </a>
    </div>

    <div
      class="dock-icon ogq"
      data-tooltip="이모티콘"
      @click="$router.push({ path: '/emoticon' })"
    >
      <img src="/image/main/ogq.png" alt="ogq" />
    </div>

    <div class="dock-icon line"></div>

    <!-- <div class="dock-icon chrome_1">
      <img src="/image/main/chrome_1.png" alt="chrome_1" />
    </div> -->

    <div
      class="dock-icon gallery"
      data-tooltip="ABOUT ME"
      @click="$router.push({ path: '/introduction' })"
    >
      <img src="/image/main/gallery.png" alt="gallery" />
    </div>

    <div
      class="dock-icon ios"
      data-tooltip="SKILL"
      @click="
        $router.push({ path: '/introduction', query: { category: 'skill' } })
      "
    >
      <img src="/image/main/ios.png" alt="ios" />
    </div>

    <div
      class="dock-icon contact"
      data-tooltip="CONTACT"
      @click="
        $router.push({ path: '/introduction', query: { category: 'contact' } })
      "
    >
      <img src="/image/main/contact.png" alt="contact" />
    </div>

    <!-- <div class="dock-icon trashcan_1">
      <img src="/image/main/trashcan_1.png" alt="trashcan_1" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter, provide, ref, watch } from "@nuxtjs/composition-api";

const $router = useRouter();

const onClick = ref<boolean>(false);

const $emit = defineEmits<{
  (e: "finderClick", v: boolean): void;
}>();

const onClickFinder = () => {
  onClick.value = !onClick.value;
  $emit("finderClick", onClick.value);
};
</script>

<style scoped lang="scss">
.dock_bar_wrap {
  width: 600px;
  height: 60px;
  background: rgb(255, 255, 255, 0.4);
  border-radius: 20px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  .dock-icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
      transform: scale(1.1);
      transition: all 0.1s linear;
    }

    &.line {
      display: block;
      cursor: default;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  /* 툴팁 option */
  .dock-icon[data-tooltip]:not([data-tooltip=""])::before {
    content: attr(data-tooltip);
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #000000;
    font-size: 10px;
    font-weight: bold;
    padding: 3px 15px;
    border-radius: 7px;
    bottom: 95%;
    opacity: 0;
    transition: all 0.1s linear;
  }

  .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::before,
  .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::after {
    opacity: 1;
  }

  .line {
    width: 1px;
    height: 45px;
    background-color: #000000;
  }
}

@media (max-width: 600px) {
  .dock_bar_wrap {
    width: calc(100% - 30px);
    background: none;
    border-radius: 0;
    top: calc(5vh + 15px);
    left: 8px;
    transform: none;
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, 57px);
    gap: 5px;

    .dock-icon {
      width: 70px;
      height: 70px;

      &.finder {
        display: none;
      }

      &.line {
        display: none;
      }
    }

    .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::before,
    .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::after {
      opacity: 0;
    }
  }
}
</style>

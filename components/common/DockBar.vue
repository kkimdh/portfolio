<template>
  <div
    class="dock_bar_wrap p-absolute d-flex flex-wrap justify-content-between align-items-center"
  >
    <div
      class="dock-icon finder"
      data-tooltip="파인더"
      @click="onClickFinder"
      @mouseover="finderHover = true"
      @mouseleave="finderHover = false"
    >
      <div v-if="finderHover" class="tooltip p-absolute">파인더</div>
      <img src="/image/main/finder.png" alt="finder" />
    </div>

    <div
      class="dock-icon lie"
      data-tooltip="라이스베딩"
      @mouseover="lieHover = true"
      @mouseleave="lieHover = false"
    >
      <a href="https://dohye-liebeeding.netlify.app/" target="blank">
        <div v-if="lieHover" class="tooltip p-absolute">라이스베딩</div>
        <img src="/image/main/LIE.png" alt="LIE" />
      </a>
    </div>

    <div
      class="dock-icon takeim"
      data-tooltip="테이킴"
      @mouseover="tekeimHover = true"
      @mouseleave="tekeimHover = false"
    >
      <a href="https://dohye-takeim.netlify.app/" target="blank">
        <div v-if="tekeimHover" class="tooltip p-absolute">테이킴</div>
        <img src="/image/main/takeim.png" alt="takeim" />
      </a>
    </div>

    <div
      class="dock-icon da"
      data-tooltip="에이전시"
      @mouseover="daHover = true"
      @mouseleave="daHover = false"
    >
      <a href="https://dohye-daagency.netlify.app/" target="blank">
        <div v-if="daHover" class="tooltip p-absolute">에이전시</div>
        <img src="/image/main/da.png" alt="da" />
      </a>
    </div>

    <div class="dock-icon artgallery" data-tooltip="아트갤러리">
      <a href="https://dohye-double-h-artgallery.netlify.app/" target="blank">
        <img src="/image/main/artgallery.png" alt="artgallery" />
      </a>
    </div>

    <div
      class="dock-icon kbl"
      data-tooltip="KBL판타지"
      @mouseover="kblHover = true"
      @mouseleave="kblHover = false"
    >
      <a href="https://fantasy.kbl.or.kr/" target="blank">
        <div v-if="kblHover" class="tooltip kbl p-absolute">KBL판타지</div>
        <img src="/image/main/kbl-logo.png" alt="kbl-fantasy" />
      </a>
    </div>

    <div
      class="dock-icon bao"
      data-tooltip="바오산전"
      @mouseover="baoHover = true"
      @mouseleave="baoHover = false"
    >
      <a href="https://bao-company.imweb.me/" target="blank">
        <div v-if="baoHover" class="tooltip bao p-absolute">바오산전</div>
        <img src="/image/main/bao-logo.png" alt="bao-company" />
      </a>
    </div>

    <div
      class="dock-icon ogq"
      data-tooltip="이모티콘"
      @click="$router.push({ path: '/emoticon' })"
      @mouseover="emoticonHover = true"
      @mouseleave="emoticonHover = false"
    >
      <div v-if="emoticonHover" class="tooltip p-absolute">이모티콘</div>
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
      @mouseover="aboutMeHover = true"
      @mouseleave="aboutMeHover = false"
    >
      <div v-if="aboutMeHover" class="tooltip p-absolute">ABOUT ME</div>
      <img src="/image/main/gallery.png" alt="gallery" />
    </div>

    <div
      class="dock-icon ios"
      data-tooltip="SKILL"
      @click="
        $router.push({ path: '/introduction', query: { category: 'skill' } })
      "
      @mouseover="skillHover = true"
      @mouseleave="skillHover = false"
    >
      <div v-if="skillHover" class="tooltip p-absolute">SKILL</div>
      <img src="/image/main/ios.png" alt="ios" />
    </div>

    <!-- <div
      class="dock-icon contact"
      data-tooltip="CONTACT"
      @click="
        $router.push({ path: '/introduction', query: { category: 'contact' } })
      "
      @mouseover="contactHover = true"
      @mouseleave="contactHover = false"
    >
      <div v-if="contactHover" class="tooltip p-absolute">CONTACT</div>
      <img src="/image/main/contact.png" alt="contact" />
    </div> -->

    <!-- <div class="dock-icon trashcan_1">
      <img src="/image/main/trashcan_1.png" alt="trashcan_1" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter, provide, ref, watch } from "@nuxtjs/composition-api";

const $router = useRouter();

const onClick = ref<boolean>(false);

const finderHover = ref<boolean>(false);
const lieHover = ref<boolean>(false);
const tekeimHover = ref<boolean>(false);
const daHover = ref<boolean>(false);
const kblHover = ref<boolean>(false);
const baoHover = ref<boolean>(false);
const emoticonHover = ref<boolean>(false);
const aboutMeHover = ref<boolean>(false);
const skillHover = ref<boolean>(false);
const contactHover = ref<boolean>(false);

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
    position: relative;

    .tooltip {
      background-color: #ffffff;
      border: 1px solid #000000;
      font-size: 10px;
      font-weight: bold;
      padding: 3px 15px;
      border-radius: 7px;
      bottom: 95%;
      left: 50%;
      transform: translateX(-50%);
      color: #000000 !important;

      &.kbl,
      &.bao {
        bottom: 115%;
      }
    }

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

    &.kbl,
    &.bao {
      width: 45px;
      height: 45px;
      margin: 0 1%;

      img {
        border-radius: 10px;
        border: 1px solid #000000;
      }
    }
  }

  // /* 툴팁 option */
  // .dock-icon[data-tooltip]:not([data-tooltip=""])::before {
  //   content: attr(data-tooltip);
  //   position: absolute;
  //   background-color: #ffffff;
  //   border: 1px solid #000000;
  //   font-size: 10px;
  //   font-weight: bold;
  //   padding: 3px 15px;
  //   border-radius: 7px;
  //   bottom: 95%;
  //   opacity: 0;
  //   transition: all 0.1s linear;
  // }

  // .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::before,
  // .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::after {
  //   opacity: 1;
  // }

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

      .tooltip {
        display: none;
      }

      &.finder {
        display: none;
      }

      &.line {
        display: none;
      }

      &.kbl,
      &.bao {
        width: 51px;
        height: 53px;
        margin-left: 10px;
      }
    }

    // .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::before,
    // .dock-icon:hover[data-tooltip]:not([data-tooltip=""])::after {
    //   opacity: 0;
    // }
  }
}
</style>

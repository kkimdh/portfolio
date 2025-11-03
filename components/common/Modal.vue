<template>
  <div class="base_modal_wrap p-absolute d-flex">
    <div class="menubar h-100 p-absolute">
      <div class="button_wrap w-100 d-flex align-items-center">
        <div
          class="menubar-btn close-btn cursor-pointer"
          @click="$emit('modalClose')"
        ></div>
        <div class="menubar-btn"></div>
        <div class="menubar-btn"></div>
      </div>

      <div class="menu_wrap">
        <p class="title">즐겨찾기</p>

        <div
          v-for="list in menuList.list"
          :key="`menu-${list.title}`"
          class="d-flex align-items-center menu-list"
        >
          <div
            class="menu-icon"
            :style="`background-image: url('/image/main/${list.icon}.png')`"
          ></div>
          <span>{{ list.title }}</span>
        </div>
      </div>

      <div class="menu_wrap">
        <p class="title icloud">icloud</p>

        <div class="d-flex align-items-center menu-list">
          <div class="menu-icon icloud-drive"></div>
          <span>icloud drive</span>
        </div>
      </div>

      <div class="menu_wrap">
        <p class="title portfolio">위치</p>

        <div class="d-flex align-items-center menu-list">
          <div class="menu-icon portfolio"></div>
          <span>Portfolio</span>
        </div>
      </div>
    </div>
    <div class="content-area h-100 p-absolute">
      <div
        class="content-header w-100 d-flex justify-content-between align-items-center"
      >
        <div class="d-flex align-items-center arrow-icon">
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
          <div class="main-title">최근 항목</div>
        </div>

        <div class="search-icon"></div>
      </div>
      <div class="content-body d-grid">
        <slot name="modal-content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "@nuxtjs/composition-api";

const menuList = reactive({
  list: [
    { icon: "airdrop", title: "AirDrop" },
    { icon: "category", title: "최근 항목" },
    { icon: "document", title: "문서" },
    { icon: "downloadImg", title: "다운로드" },
  ],
});

const $emit = defineEmits<{
  (e: "modalClose"): void;
}>();
</script>

<style scoped lang="scss">
.base_modal_wrap {
  width: 80%;
  max-width: 720px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  .menubar {
    width: 27%;
    top: 0;
    left: 0;
    background-color: rgb(233, 213, 206, 0.7);
    padding: 0 20px;

    .button_wrap {
      height: 70px;
      padding: 20px 10px;
      gap: 10px;

      .menubar-btn {
        width: 17px;
        height: 17px;
        border-radius: 50%;

        &:nth-child(1) {
          background-color: #ed6a57;
        }
        &:nth-child(2) {
          background-color: #f4bf50;
        }
        &:nth-child(3) {
          background-color: #61c554;
        }
      }
    }

    .menu_wrap {
      .title {
        font-size: 15px;
        color: #919191;

        &.icloud,
        &.portfolio {
          margin-top: 10px;
        }
      }

      .menu-list {
        .menu-icon {
          width: 35px;
          height: 35px;
          background-position: center;
          background-size: cover;

          &.icloud-drive {
            background-image: url("/image/main/icould.png");
          }

          &.portfolio {
            background-image: url("/image/main/com.png");
          }
        }

        span {
          font-size: 12px;
        }
      }
    }
  }

  .content-area {
    width: calc(100% - 27%);
    max-width: 550px;
    top: 0;
    right: 0;

    .content-header {
      height: 50px;
      padding: 10px;

      .arrow-icon {
        gap: 10px;
        @mixin arrow {
          width: 13px;
          height: 13px;
          transform: rotate(-45deg);
        }

        .arrow-left {
          @include arrow;
          border-top: 2px solid #ddd;
          border-left: 2px solid #ddd;
        }

        .arrow-right {
          @include arrow;
          border-right: 2px solid #ddd;
          border-bottom: 2px solid #ddd;
        }

        .main-title {
          font-size: 14px;
          font-weight: bold;
          margin-left: 10px;
        }
      }

      .search-icon {
        width: 40px;
        height: 40px;
        background-image: url("/image/main/search_2.png");
        background-position: center;
        background-size: cover;
      }
    }

    .content-body {
      height: calc(100% - 50px);
      padding: 10px;
    }
  }
}
</style>

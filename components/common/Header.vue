<template>
  <div
    class="header_wrap d-flex justify-content-between align-items-center p-fixed"
  >
    <div class="title">DOHYE'S PORTFOLIO</div>
    <div class="nav_right set-center">
      <div class="nav-icon wifi"></div>
      <div class="nav-icon search"></div>
      <div class="nav-icon battery"></div>
      <div class="nav-icon siri"></div>

      <div class="current-time normal">{{ currentTime }}</div>
      <div class="current-time simple">{{ simpleCurrentTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, ref } from "@nuxtjs/composition-api";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const currentDate = ref<Date>(new Date());

const currentTime = computed(() => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[currentDate.value.getDay()];
  const month = (currentDate.value.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.value.getDate().toString().padStart(2, "0");
  const hours = currentDate.value.getHours();
  const minutes = currentDate.value.getMinutes().toString().padStart(2, "0");

  return `${month}월 ${day}일 (${dayOfWeek}) ${hours}:${minutes}`;
});

const simpleCurrentTime = computed(() => {
  const hours = currentDate.value.getHours();
  const minutes = currentDate.value.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
});

setInterval(() => {
  currentDate.value = new Date();
}, 1000);
</script>

<style lang="scss" scoped>
.header_wrap {
  width: 100vw;
  height: 4vh;
  background-color: rgb(245, 245, 245);
  border-bottom: 1.5px solid #2a2a2a;
  padding: 0 10px;
  z-index: 3;
  top: 0;

  .title {
    font-family: "Roboto Mono";
    font-weight: bold;
  }

  .nav_right {
    gap: 5px;

    .nav-icon {
      background-size: cover;
      background-position: center;
      background-image: var(--background-img);

      &.wifi {
        width: 20px;
        height: 13px;
        --background-img: url("/image/main/wifi.png");
      }

      &.search {
        width: 17px;
        height: 15px;
        --background-img: url("/image/main/search_1.png");
      }

      &.battery {
        width: 23px;
        height: 12px;
        --background-img: url("/image/main/fully-charged-battery.png");
      }

      &.siri {
        width: 20px;
        height: 20px;
        --background-img: url("/image/main/siri.png");
      }
    }

    .current-time {
      font-size: 13px;
      font-family: "Noto Sans KR";
      font-weight: bold;
      margin-left: 10px;

      &.normal {
        display: block;
      }

      &.simple {
        display: none;
      }
    }
  }
}

@media (min-width: 430px) and (max-width: 600px) {
  .header_wrap {
    height: 5vh;

    .nav_right {
      .nav-icon {
        &.search {
          display: none;
        }

        &.siri {
          display: none;
        }
      }
    }

    .current-time {
      margin-left: 0 !important;

      &.normal {
        display: block;
      }

      &.simple {
        display: none;
      }
    }
  }
}

@media (max-width: 429px) {
  .header_wrap {
    height: 5vh;

    .nav_right {
      .nav-icon {
        &.search {
          display: none;
        }

        &.siri {
          display: none;
        }
      }
    }

    .current-time {
      margin-left: 0 !important;

      &.normal {
        display: none !important;
      }

      &.simple {
        display: block !important;
      }
    }
  }
}
</style>

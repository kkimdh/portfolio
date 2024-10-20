<template>
  <div
    class="web_header_wrap w-100 d-flex align-items-center justify-content-between p-fixed"
  >
    <div class="web_header_main_content_wrap d-flex align-items-center h-100">
      <!-- round button -->
      <div class="web_header_btn_wrap d-flex">
        <div
          class="web-header-btn cursor-pointer"
          @click="$router.push({ path: '/' })"
        ></div>
        <div class="web-header-btn"></div>
        <div class="web-header-btn"></div>
      </div>

      <!-- arrow button (mobile X) -->
      <div class="web_header_arrow_wrap d-flex">
        <div
          class="prev-arrow set-center cursor-pointer"
          @click="$router.push({ path: '/' })"
        >
          <div class="arrow"></div>
        </div>
        <div class="next-arrow set-center">
          <div class="arrow"></div>
        </div>
      </div>

      <!-- search bar -->
      <div
        class="web_header_search_bar_wrap d-flex align-items-center justify-content-between"
      >
        <div class="title-area d-flex align-items-center">
          <div class="search-icon"></div>
          <span>{{ props.searchBarTitle }}</span>
        </div>
        <div class="reset-icon"></div>
      </div>
    </div>

    <!-- sub icon (mobile X) -->
    <div class="web_header_sub_icon_wrap d-flex align-items-center">
      <div class="sharing_icon_wrap">
        <div class="sharing-icon"></div>
      </div>
      <div class="page_icon_wrap">
        <div class="page-icon"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "@nuxtjs/composition-api";

const $router = useRouter();

const props = defineProps<{
  searchBarTitle: string;
}>();
</script>

<style scoped lang="scss">
.web_header_wrap {
  height: 5vh;
  background-color: #eae8eb;
  border-bottom: 1px solid #2a2a2a;
  padding: 0 10px;
  overflow-y: hidden;
  z-index: 3;
  top: 4vh;

  .web_header_main_content_wrap {
    width: 80%;
    .web_header_btn_wrap {
      gap: 10px;
      .web-header-btn {
        width: 18px;
        height: 18px;
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

    .web_header_arrow_wrap {
      gap: 1px;
      margin-left: 15px;

      .prev-arrow,
      .next-arrow {
        width: 23px;
        height: 27px;
        background-color: #f9f9f9;
        border-radius: 5px;
        box-shadow: 0.5px 1px 0.5px 0.5px #dddddd;
      }

      @mixin web-header-arrow {
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
      }
      .prev-arrow .arrow {
        @include web-header-arrow;
        border-left: 1.8px solid #919191;
        border-bottom: 1.8px solid #919191;
      }
      .next-arrow .arrow {
        @include web-header-arrow;
        border-right: 1.8px solid #dadada;
        border-top: 1.8px solid #dadada;
      }
    }

    .web_header_search_bar_wrap {
      width: 70%;
      height: 70%;
      background-color: #f9f9f9;
      border-radius: 7px;
      box-shadow: 0.5px 1px 0.5px 0.5px #dddddd;
      margin-left: 30px;

      @mixin icon {
        width: 35px;
        height: 35px;
        background-size: cover;
        background-position: center;
      }

      .title-area {
        .search-icon {
          @include icon;
          background-image: url("/image/emoticon/link_icon2.png");
        }

        span {
          font-size: 15px;
          font-weight: bold;
        }
      }

      .reset-icon {
        @include icon;
        background-image: url("/image/emoticon/link_icon3.png");
      }
    }
  }

  .web_header_sub_icon_wrap {
    gap: 10px;

    @mixin sub-icon {
      width: 30px;
      height: 30px;
      background-size: cover;
      background-position: center;
    }

    .sharing_icon_wrap,
    .page_icon_wrap {
      background-color: #f9f9f9;
      box-shadow: 0.5px 1px 0.5px 0.5px #dddddd;
      border-radius: 5px;
    }

    .sharing_icon_wrap {
      .sharing-icon {
        @include sub-icon;
        background-image: url("/image/emoticon/link_icon4.png");
      }
    }

    .page_icon_wrap {
      .page-icon {
        @include sub-icon;
        background-image: url("/image/emoticon/link_icon5.png");
      }
    }
  }
}

@media (max-width: 600px) {
  .web_header_wrap {
    top: 5vh;

    .web_header_main_content_wrap {
      width: 100%;

      .web_header_btn_wrap {
        gap: 6px;

        .web-header-btn {
          width: 3vw;
          height: 3vw;
          min-width: 15px;
          min-height: 15px;
        }
      }

      .web_header_arrow_wrap {
        display: none;
      }

      .web_header_search_bar_wrap {
        width: 80%;
        margin-left: 15px;

        @mixin icon {
          width: 6vw;
          height: 6vw;
          background-size: cover;
          background-position: center;
        }

        .title-area {
          .search-icon {
            @include icon;
          }

          span {
            font-size: 3vw;
          }
        }

        .reset-icon {
          @include icon;
        }
      }
    }

    .web_header_sub_icon_wrap {
      display: none;
    }
  }
}
</style>

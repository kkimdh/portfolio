<template>
  <div class="emoticon_buy_wrap w-100">
    <div
      class="emoticon-buy-content d-flex flex-column justify-content-between"
    >
      <div
        class="description d-flex align-items-center justify-content-between w-100"
      >
        <div class="cash">1,500원</div>
        <div class="licenses">스트리밍 라이선스</div>
      </div>
      <div class="guide-line"></div>
      <div class="sub-description">
        네이버 서비스가 존속하는 한 지속적인 사용 보장
      </div>
    </div>
    <a
      href="https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=5c7b357ec66bd"
      target="blank"
    >
      <div class="buy-btn text-center">구매하기</div>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.emoticon_buy_wrap {
  width: 250px;
  height: 250px;
  box-shadow: 0 8px 40px -4px #02241a0f;
  padding: 30px 0;
  font-family: "Nunito Sans";

  .emoticon-buy-content {
    width: 85%;
    height: 130px;
    background-color: #fff;
    border: 1px solid #f0f5f6;
    border-radius: 14px;
    box-shadow: 0 4px 48px -8px #02241a0f;
    margin: 0 auto;
    padding: 30px 15px;

    .description {
      .cash {
        font-size: 14px;
      }

      .licenses {
        font-size: 10px;
        background-color: #f0f5f6;
        padding: 5px 10px;
        border-radius: 5px;
      }
    }

    .guide-line {
      width: 100%;
      height: 1px;
      background-color: #f0f5f6;
    }

    .sub-description {
      font-size: 9px;
      color: #9e9e9e;
    }
  }

  .buy-btn {
    width: 85%;
    height: 40px;
    border-radius: 5px;
    margin: 0 auto;
    background-color: #00c389;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
  }
}

@media (max-width: 600px) {
  .emoticon_buy_wrap {
    width: 70%;
  }
}
</style>

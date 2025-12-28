<template>
  <div class="introduction_about_me_wrap d-flex">
    <div class="about-me d-flex align-items-center justify-content-around">
      <div class="photo"></div>
      <div class="my-info d-flex flex-column">
        <p>NAME : 김도혜 / KIM DO HYE</p>
        <p>BIRTH : 1999.01.07</p>
        <!-- <p>CAREER : 3년차 프론트엔드 개발자</p> -->
        <p>PHONE : 010-4148-0297</p>
        <p>E-MAIL : ehgpwkd@naver.com</p>
        <p>HOME : 경기도 안산시 / Ansan, Gyeonggi-do</p>
      </div>
    </div>

    <div class="about-me d-flex align-items-center justify-content-around">
      <div class="career-container">
        <div class="career-title">Career</div>
        <div class="career-content d-flex flex-column">
          <div class="career-period">2025.01 - 2025.08 (8개월)</div>
          <div class="career-company">레디엔터테인먼트</div>
          <div class="career-role">TMS개발팀 / 프론트엔드</div>
        </div>

        <div class="career-content d-flex flex-column">
          <div class="career-period">2022.02 - 2024.08 (2년 7개월)</div>
          <div class="career-company">비투지 게임즈</div>
          <div class="career-role">개발팀 / 프론트엔드</div>
        </div>
      </div>

      <div class="career-container">
        <div class="career-title">Education</div>
        <div class="career-content d-flex flex-column">
          <div class="career-period">2021.03 - 2021.09</div>
          <div class="career-company">라인컴퓨터아트학원</div>
          <div class="career-role">JAVA기반 스마트웹 개발</div>
        </div>

        <div class="career-content d-flex flex-column">
          <div class="career-period">2017.03 - 2019.02</div>
          <div class="career-company">인하공업전문대학</div>
          <div class="career-role">항공운항과</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.introduction_about_me_wrap {
  width: 90%;
  padding: 100px 0 70px 0;

  .about-me {
    &:nth-child(1) {
      width: 45%;
    }

    &:nth-child(2) {
      width: 55%;
    }

    .photo {
      width: 170px;
      height: 220px;
      background-image: url("/image/about/me.JPG");
      background-size: cover;
      background-position: center;
      border-radius: 4px;
    }

    .my-info {
      gap: 10px;
      font-size: 14px;
      font-weight: bold;
    }

    .career-container {
      width: 35%;

      .career-title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .career-content {
        font-weight: bold;
        margin-bottom: 15px;
        .career-period {
          color: #979797;
          font-size: 12px;
        }

        .career-company {
          font-size: 14px;
          margin: 3px 0 1px 0;
        }

        .career-role {
          font-size: 12px;
        }
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 1100px) {
  .introduction_about_me_wrap {
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 50px 0;

    .about-me {
      width: 80% !important;

      .photo {
        width: 150px;
        height: 200px;
        background-image: url("/image/about/me.JPG");
        background-size: cover;
        background-position: center;
        border-radius: 4px;
      }

      .my-info {
        gap: 10px;
        font-size: 14px;
        font-weight: bold;
      }

      .career-container {
        .career-title {
          font-weight: bold;
        }

        .career-content {
          font-weight: bold;
        }
      }
    }
  }
}

@media (max-width: 599px) {
  .introduction_about_me_wrap {
    flex-direction: column;
    padding: 60px 0;
    gap: 70px;

    .about-me {
      width: 100% !important;

      &:nth-child(1) {
        flex-direction: column;
      }

      .photo {
        width: 150px;
        height: 200px;
        background-image: url("/image/about/me.JPG");
        background-size: cover;
        background-position: center;
        border-radius: 4px;
      }

      .my-info {
        gap: 10px;
        font-size: 14px;
        font-weight: normal;

        align-items: center;
        margin-top: 35px;
      }

      .career-container {
        .career-title {
          font-weight: 500;
        }

        .career-content {
          font-weight: normal;
        }
      }
    }
  }
}
</style>

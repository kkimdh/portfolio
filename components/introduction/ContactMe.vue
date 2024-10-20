<template>
  <div class="introduction_contact_wrap w-100 text-center">
    <div class="contact-title">Contact Us</div>

    <!-- <div class="contact-sub-title">Get in Touch !</div> -->

    <div
      class="contact_content_wrap d-flex align-items-center justify-content-around"
    >
      <div
        v-for="contact in contactList.list"
        :key="`contact-me-${contact.icon}`"
        class="contact-content-container d-flex justify-content-between align-items-center"
        @click="copyKeyword"
      >
        <img :src="`image/about/${contact.icon}.png`" :alt="contact.icon" />
        <div class="contact-content">
          {{ contact.content }}
        </div>
      </div>
    </div>

    <div class="contact-footer">Please contact me. Thank you :)</div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "@nuxtjs/composition-api";

const contactList = reactive({
  list: [
    { icon: "call", content: "010-4148-0297" },
    { icon: "mail", content: "ehgpwkd@naver.com" },
    { icon: "talk", content: "ehgpwkd0107" },
  ],
});

const copyKeyword = () => {};
</script>

<style scoped lang="scss">
.introduction_contact_wrap {
  max-width: 850px;
  padding: 100px 0;
  font-family: "Nunito Sans";

  .contact-title {
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.7vw;
    color: #2a2a2a;
  }

  // .contact-sub-title {
  //   font-size: 15px;
  //   margin-top: 35px;
  //   color: #3a3a3a;
  // }

  .contact_content_wrap {
    margin: 90px 0 75px 0;
    .contact-content-container {
      padding: 2px 10px 2px 5px;
      box-shadow: 0.5px 1px 0.5px 0.5px #dddddd;
      border-radius: 10px;

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }

      .contact-content {
        font-weight: 500;
        font-size: 15px;
      }
    }
  }

  .contact-footer {
    font-size: 18px;
    font-family: "Roboto Mono";
    color: #2a2a2a;
  }
}

@media (max-width: 600px) {
  .introduction_contact_wrap {
    padding: 100px 0;

    .contact-title {
      font-size: 30px;
    }

    .contact_content_wrap {
      margin: 80px 0 75px 0;
      flex-direction: column;
      gap: 20px;
      .contact-content-container {
        width: 200px;

        img {
          width: 40px;
          height: 40px;
          margin-right: 5px;
        }

        .contact-content {
          font-weight: 500;
          font-size: 15px;
        }
      }
    }

    .contact-footer {
      font-size: 15px;
    }
  }
}
</style>

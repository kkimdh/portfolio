<template>
  <div class="introduction_header_wrap w-100 d-flex align-items-center p-fixed">
    <div class="introduction-logo">
      <img
        src="/image/about/about_logo.png"
        alt="introduction-logo"
        class="w-100 h-100"
      />
    </div>
    <div class="title-bar d-flex align-items-center">
      <span>{{ props.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
.introduction_header_wrap {
  height: 12vh;
  top: 9vh;
  z-index: 3;
  background-color: #ffffff;
  padding: 20px;

  .introduction-logo {
    width: 150px;
    height: 60px;
  }

  .title-bar {
    width: 60%;
    max-width: 500px;
    height: 75%;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 1px 2px 5px 1px #dddddd;
    margin-left: 30px;
    padding: 0 20px;
    font-weight: bold;
  }
}

@media (max-width: 600px) {
  .introduction_header_wrap {
    height: 10vh;
    top: 10vh;
    padding: 0 15px;

    .introduction-logo {
      width: 140px;
      height: 50px;
    }

    .title-bar {
      width: 70%;
      height: 60%;
      margin-left: 10px;
      padding: 0 25px;
    }
  }
}
</style>

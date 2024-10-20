<template>
  <div class="wrapper">
    <common-header></common-header>
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url("/image/main/body_1.png");
  background-position: center;
  background-size: cover;
  overflow-y: hidden;
  overflow-x: hidden;
}

@media (max-width: 600px) {
  .wrapper {
    background-image: url("/image/main/body_3.png");
  }
}
</style>

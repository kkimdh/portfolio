<template>
  <div class="emoticon_zip_wrap w-100 align-items-center">
    <div v-for="i in 24" :key="`emoticon-zip-icon-${i}`" class="emoticon-zip">
      <img
        :src="`/image/emoticon/emoticon_zip/emoticon_${i}.png`"
        :alt="`emoticon-icon-${i}`"
        class="w-100 h-100"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.emoticon_zip_wrap {
  width: 50%;
  background-color: #f9fbfa;
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, 170px);
  justify-content: center;

  .emoticon-zip {
    width: 170px;
    height: 170px;

    img {
      opacity: 0.3;
      transition: all 0.2s;

      &:hover {
        transition: all 0.2s;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .emoticon_zip_wrap {
    grid-template-columns: repeat(auto-fit, 150px);

    .emoticon-zip {
      width: 150px;
      height: 150px;
    }
  }
}

@media (max-width: 599px) {
  .emoticon_zip_wrap {
    width: 85%;
    min-width: 310px;
    grid-template-columns: repeat(auto-fit, 150px);
    margin-top: 30px;

    .emoticon-zip {
      width: 150px;
      height: 150px;
    }
  }
}
</style>

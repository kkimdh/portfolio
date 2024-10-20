<template>
  <div class="introduction_wrap">
    <web-header
      :search-bar-title="'https://about_me&skill&contact.com/'"
    ></web-header>

    <introduction-header
      :class="{ 'border-bottom': scrollPosition > 30 }"
      :title="titleBarText"
    ></introduction-header>

    <div class="introduction-content d-flex flex-column align-items-center">
      <about-me></about-me>

      <div class="skill_chart_wrap d-flex align-items-center">
        <skill-chart
          v-for="skill in skillList.list"
          :key="`skill-${skill.id}`"
          :chart-id="`skill-${skill.id}`"
          :chart-data="skill.data"
          :chart-figure="skill.data"
          :chart-title="skill.id"
        ></skill-chart>
      </div>

      <contact></contact>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
  reactive,
  computed,
  useRoute,
  watch,
} from "@nuxtjs/composition-api";

// gsap
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
``;

gsap.registerPlugin(ScrollToPlugin);

import WebHeader from "@/components/common/WebHeader.vue";

import IntroductionHeader from "@/components/introduction/IntroductionHeader.vue";

import AboutMe from "@/components/introduction/about/AboutMe.vue";

import SkillChart from "~/components/introduction/SkillChart.vue";

import Contact from "~/components/introduction/ContactMe.vue";

const scrollPosition = ref();

const windowInnerWidth = ref();

const $route = useRoute();

const routerSkill = ref<boolean>(false);

const skillList = reactive({
  list: [
    { id: "HTML", data: 99 },
    { id: "CSS / SCSS", data: 90 },
    { id: "JAVASCRIPT", data: 90 },
    { id: "VUE", data: 99 },
    { id: "TYPESCRIPT", data: 80 },
    { id: "NUXT JS", data: 90 },
  ],
});

const titleBarText = computed(() => {
  if (!windowInnerWidth.value || windowInnerWidth.value > 1100) {
    if (!scrollPosition.value || scrollPosition.value < 400) {
      return "About Me";
    }

    if (scrollPosition.value >= 400 && scrollPosition.value < 915) {
      return "Skill";
    }

    if (scrollPosition.value >= 915) {
      return "Contact Me";
    }
  }

  if (windowInnerWidth.value <= 1100 && windowInnerWidth.value > 600) {
    if (!scrollPosition.value || scrollPosition.value < 550) {
      return "About Me";
    }

    if (scrollPosition.value >= 550 && scrollPosition.value < 980) {
      return "Skill";
    }

    if (scrollPosition.value >= 980) {
      return "Contact Me";
    }
  }

  if (windowInnerWidth.value <= 600) {
    if (!scrollPosition.value || scrollPosition.value < 680) {
      return "About Me";
    }

    if (scrollPosition.value >= 680 && scrollPosition.value < 1460) {
      return "Skill";
    }

    if (scrollPosition.value >= 1460) {
      return "Contact Me";
    }
  }

  return "";
});

watch(
  () => routerSkill.value,
  () => {
    if (!windowInnerWidth.value || windowInnerWidth.value > 1100) {
      gsap.to(window, { duration: 0.3, scrollTo: { y: 430 } });
    }
    if (windowInnerWidth.value <= 1100 && windowInnerWidth.value > 600) {
      gsap.to(window, { duration: 0.3, scrollTo: { y: 600 } });
    }
    if (windowInnerWidth.value <= 600) {
      gsap.to(window, { duration: 0.3, scrollTo: { y: 800 } });
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  if ($route.value.query.category) {
    if ($route.value.query.category === "skill") {
      routerSkill.value = true;
    }

    if ($route.value.query.category === "contact") {
      gsap.to(window, { duration: 0.4, scrollTo: { y: "max" } });
    }
  }

  windowInnerWidth.value = window.innerWidth;

  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });

  window.addEventListener("resize", () => {
    windowInnerWidth.value = window.innerWidth;
  });
});
</script>

<script lang="ts">
export default {
  layout: "scroll",
};
</script>

<style scoped lang="scss">
.introduction_wrap {
  .border-bottom {
    border-bottom: 1px solid #ddd;
  }

  .introduction-content {
    margin-top: 21vh;

    .skill_chart_wrap {
      width: 85%;
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-around;
      padding: 100px 0;
    }
  }
}

@media (max-width: 600px) {
  .introduction_wrap {
    .introduction-content {
      margin-top: 20vh;

      .skill_chart_wrap {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        padding: 70px 0;
      }
    }
  }
}
</style>

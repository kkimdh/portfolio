export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  // target: "static",
  target: "static", // 정적 사이트 배포 모드
  ssr: false, // 클라이언트 사이드 렌더링
  generate: {
    fallback: true, // 404.html 생성 (SPA 모드)
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DOHYE'S PORTFOLIO",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/chartjs/index.ts", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module",
    ["@pinia/nuxt", { disableVuex: false }],
    [
      "@nuxt/typescript-build",
      {
        ignoreNotFoundWarnings: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

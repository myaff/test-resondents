import webpack from "webpack";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/test-respondents/"
        }
      }
    : {};

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Test",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ],
    script: []
  },

  mode: "spa",

  css: ["~/assets/styles/main.scss"],

  modules: ["@nuxtjs/style-resources", "@nuxtjs/svg-sprite", "@nuxtjs/axios"],

  styleResources: {
    scss: ["~assets/styles/_variables.scss", "~assets/styles/_mixins.scss"]
  },

  plugins: [
    { src: "~/plugins/svg4everybody.js", ssr: false },
    { src: "~/plugins/click-outside.js" }
  ],

  loading: {
    color: "#f9b000",
    height: "2px"
  },

  ...routerBase
};

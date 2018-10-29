module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "zh-Hant"
      // 不設定會一直跑出翻譯
      // https://www.injerry.com/blog-view.php?PID=5&sn=125
    },
    title: "rubyourhands",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "rubyouhandssite" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: "~/components/loading.vue",
  /*
   ** Global CSS
   */
  css: [
    {
      src: "@assets/style/index.less",
      lang: "less"
    },
    "swiper/dist/css/swiper.css"
  ],
  /*
   ** router
   */
  router: {
    // 每次切換頁面都會 做的事情
    middleware: ["test"],
    extendRoutes(routes, resolve) {
      // 當使用者切換到的目錄不存在時 會出現這一個頁面
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "components/404page.vue")
      });
    }
  },
  /*
   ** modules
   */
  modules: ["@nuxtjs/axios", ["@nuxtjs/moment", ["zh-tw"]], "@nuxtjs/pwa"],
  axios: {
    proxy: true
    // proxyHeaders: false
  },
  proxy: {
    "/api/": "https://opendata.cwb.gov.tw/", //  在打api 的時候會變成  https://opendata.cwb.gov.tw/api/
    "/authinit/": {
      target: process.env.SESSION_API_URL || "https://opendata.cwb.gov.tw/",
      pathRewrite: { "^/authinit/": "" } // 這邊會變成    https://opendata.cwb.gov.tw/   會自己將authinit 取代掉
    }
  },
  /*
   ** Plugins
   */
  plugins: [
    {
      src: "@plugins/iview.js"
    },
    {
      src: "@plugins/waterfall.js",
      ssr: false
    },
    {
      src: "@plugins/v-charts.js",
      ssr: false
    },
    { src: "~/plugins/swiper.js", ssr: false },
    { src: "~/plugins/vuedraggable.js", ssr: false },
    { src: "~/plugins/vue-swal.js" },
    {
      src: "~plugins/ant-design-vue.js"
    }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    /*
** Add vue-swal
*/
    vendor: ["vue-swal"]
  }
};

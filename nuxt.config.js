module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'rubyourhands',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'rubyouhandssite' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: [
    {
      src: '@assets/style/index.less',
      lang: 'less'
    }
  ],
  /*
   ** router
   */
  router: {
    // 每次切換頁面都會 做的事情
    middleware: ['test'],
    extendRoutes(routes, resolve) {
      // 當使用者切換到的目錄不存在時 會出現這一個頁面
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'components/404page.vue')
      })
    }
  },
  /*
   ** modules
   */
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true
    // proxyHeaders: false
  },
  proxy: {
    '/api/': 'https://opendata.cwb.gov.tw/'
  },
  /*
   ** Plugins
   */
  plugins: [
    {
      src: '@plugins/iview.js'
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
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

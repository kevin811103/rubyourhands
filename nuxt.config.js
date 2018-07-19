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
  router: { base: '/rubyourhands/' },
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

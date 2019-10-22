/*
 * @Author: liruigang
 * @Date: 2019-10-21 20:05:03
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-21 21:25:47
 * @UI:
 */
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // 'ant-design-vue/dist/antd.css',
    { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
    { src: '~assets/index.less', lang: 'less' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui', '@/plugins/vue-inject.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-vuex-localstorage', '@nuxtjs/axios'],
  axios: {
    requestInterceptor: (config, { store }) => {
      // config.headers.common.Authorization =
      //   store.state.user.headers.access_token
      return config
    },
    responseInterceptor: (res, ctx) => {}
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1da979'
          // 'component-background': '#ffffff'
        }
      }
    },
    extend(config, ctx) {}
  }
}

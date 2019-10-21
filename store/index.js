/*
 * @Author: liruigang
 * @Date: 2019-10-21 20:05:03
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-21 21:20:42
 * @UI:
 */
import Vue from 'vue'
import Vuex from 'vuex'

import home from './home.module'
import ApiService from '~/common/api.service'
// import auth from './auth.module'
// import article from './article.module'
// import profile from './profile.module'

Vue.use(Vuex)
ApiService.init()
let store

const initStore = () => {
  return (
    store ||
    (store = new Vuex.Store({
      modules: {
        home
      }
    }))
  )
}
export default initStore
// export default new Vuex.Store({
//   modules: {
//     home
//     // auth,
//     // article,
//     // profile
//   }
// })

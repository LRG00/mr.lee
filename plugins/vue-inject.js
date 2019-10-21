/*
 * @Author: liruigang
 * @Date: 2019-10-21 20:27:50
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-21 20:28:22
 * @UI:
 */
import Vue from 'vue'

Vue.prototype.$myInjectedFunction = (string) =>
  // eslint-disable-next-line no-console
  console.log('This is an example', string)

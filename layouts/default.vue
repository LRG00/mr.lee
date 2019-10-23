<!--
 * @Author: liruigang
 * @Date: 2019-10-22 19:05:12
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-22 23:12:00
 * @UI: 
 -->
<template>
  <div
    style="height:100%;background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);"
  >
    <BlogHeader />
    <nuxt />
    <BlogFooter />
  </div>
</template>
<script>
import BlogFooter from './TheFooter'
import BlogHeader from './theHeader'
export default {
  components: {
    BlogFooter,
    BlogHeader
  }
}
</script>
<style></style>

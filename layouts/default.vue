<!--
 * @Author: liruigang
 * @Date: 2019-10-22 19:05:12
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-22 23:12:00
 * @UI: 
 -->
<template>
  <div class="layouts-default">
    <BlogHeader />
    <div class="default-main">
      <nuxt />
    </div>
    <BlogFooter />
  </div>
</template>
<script>
import BlogFooter from './footer'
import BlogHeader from './header'
export default {
  components: {
    BlogFooter,
    BlogHeader
  }
}
</script>
<style lang="less">
.layouts-default {
  .default-main {
    padding-top: 75px;
    padding-bottom: 15px;
    height: 100%;
  }
}
</style>

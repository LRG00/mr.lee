<!--
 * @Author: liruigang
 * @Date: 2019-10-22 09:14:42
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-22 09:14:42
 * @UI: 
 -->
<template>
  <footer>
    <div class="footer-container">
      <nuxt-link class="logo-font" to="/">
        leeruigan
      </nuxt-link>
      <span class="attribution">
        长路漫漫，为剑作伴
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BlogFooter'
}
</script>
<style lang="less">
footer {
  position: relative;
  background: #f3f3f3;
  margin-top: 3rem;
  padding: 1rem 0;
  bottom: 0;
  width: 100%;
  .footer-container {
    max-width: 1140px;
    margin: 0 auto;
    text-align: center;
    .logo-font {
      color: #1da979;
      font-size: 1.2rem;
      font-family: titillium web, sans-serif;
      vertical-align: middle;
    }
    .attribution {
      vertical-align: middle;
      margin-left: 10px;
      font-size: 0.8rem;
      color: #bbb;
      font-weight: 300;
    }
  }
}
</style>

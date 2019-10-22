<!--
 * @Author: liruigang
 * @Date: 2019-10-22 09:14:42
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-22 09:14:42
 * @UI: 
 -->
<template>
  <header>
    <div class="header-container">
      <nuxt-link class="logo-font" to="/">
        leeruigan
      </nuxt-link>
      <Music style="position: absolute;right: 0; top:0; z-index:1000" />
    </div>
  </header>
</template>

<script>
import Music from '~/components/Music'
export default {
  name: 'BlogHeader',
  components: {
    Music
  }
}
</script>
<style lang="less">
header {
  background: #f3f3f3;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  z-index: 999;
  opacity: 0.8;
  .header-container {
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
    .logo-font {
      color: #1da979;
      font-size: 1.2rem;
      font-family: titillium web, sans-serif;
      vertical-align: middle;
    }
  }
}
</style>

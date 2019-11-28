<template>
<div class="home">
  <icon-svg name="daoru"></icon-svg>
  <icon-svg :name="iconList[0]"></icon-svg>
  <div class="p1">
      <div class="s1">1</div>
      <div class="s2">1</div>
  </div>
  <div class="p2">
      <div class="s5">1</div>
      <div class="s6">1</div>
  </div>
</div>
</template>
<script>
  import Icon from '@/icons'
  export default {
    created () {
      this.iconList = Icon.getNameList()
    },
  }
</script>
<style lang="less">
  .home {
    // color: red;
    // background: pink;
    border: 1px solid pink;
    height: 100vh;
.p1 {font-size: 16px; line-height: 32px;}
.s1 {font-size: 2em;}
.s2 {font-size: 2em; line-height: 2em;}

.p2 {font-size: 16px; line-height: 2;}
.s5 {font-size: 2em;}
.s6 {font-size: 2em; line-height: 2em;}
  }
</style>
<template>
<div class="home">
  <icon-svg name="daoru"></icon-svg>
  <icon-svg :name="iconList[0]"></icon-svg>
  <span>哈哈</span>
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
    border: 1px solid pink;
  }
</style>
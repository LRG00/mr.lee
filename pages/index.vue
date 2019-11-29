<!--
 * @Author: liruigang
 * @Date: 2019-11-28 20:37:10
 * @LastEditors: liruigang
 * @LastEditTime: 2019-11-28 22:36:35
 * @UI: 
 -->
<template>
<div class="page-home">
  <!-- <icon-svg name="daoru"></icon-svg>
  <icon-svg :name="iconList[0]"></icon-svg>
  <span>哈哈</span> -->
  <div class="main lrg-pbk lrg-jz">
    <div class="main-nav">
      <main-nav></main-nav>
    </div>
    <div class="main-content">
      <main-content></main-content>
    </div>
    <div class="main-right">main-right</div>
  </div>
</div>
</template>
<script>
  import Icon from '@/icons'
  import MainNav from '../components/MainNav'
  import MainContent from '../components/MainContent'
  export default {
    components: {
      MainNav,
      MainContent
    },
    created () {
      this.iconList = Icon.getNameList()
    },
    methods: {
    },
  }
</script>
<style lang="less">
  .page-home {
    .main {
      display: flex;
      flex-direction: row;
      .main-nav {
        width: 160px;
        margin-right: 15px;
        position: fixed;
      }
      .main-right {
        width: 240px;
        background: rgba(255, 255, 255, 0.6);
        margin-left: 15px
      }
      .main-content {
        flex: 1;
        margin-left: 175px;
      }
    }
  }
</style>
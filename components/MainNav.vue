<!--
 * @Author: liruigang
 * @Date: 2019-11-28 20:50:43
 * @LastEditors: liruigang
 * @LastEditTime: 2019-11-28 22:17:59
 * @UI: 
 -->
<template>
  <div class="nav">
    <a @click="handleClick(idx)" :class="index === idx ? 'active' : ''" :key="idx" v-for="(item, idx) in navList" href="#"><icon-svg name="up"></icon-svg> <span>{{item}}</span></a>
    <!-- <span href="#"><icon-svg name="daoru"></icon-svg> <span>我的收藏</span></a>
    <a class="active" href="#"><icon-svg name="daoru"></icon-svg> <span>我的收藏</span></a>
    <a href="#"><icon-svg name="daoru"></icon-svg> <span>我的收藏</span></a>
    <a href="#"><icon-svg name="daoru"></icon-svg> <span>我的收藏</span></a> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      index: 0,
      navList: ['我的收藏', '文章列表', '我的code', '云裳爆款']
    }
  },
  methods: {
    handleClick (idx) {
      this.index = idx
    }
  },
}
</script>
<style lang="less">
  .nav {
    width: 100%;

    a {
      height: 45px;
      line-height: 45px;
      display: block;
      padding: 0 10px;
      transition: all 0.3s ease;
      color: rgba(0, 0, 0, 0.54);
      svg {
        vertical-align: middle;
        font-size: 18px;
      }
    }

    a:hover {
      color: rgb(151, 191, 247);
    }

    .active {
      color: rgb(151, 191, 247);
      background: #fff
    }
  }
</style>
<!--
 * @Author: liruigang
 * @Date: 2019-11-28 20:50:43
 * @LastEditors: liruigang
 * @LastEditTime: 2019-11-28 22:17:59
 * @UI: 
 -->
<template>
  <div class="nav">
    <a @click="handleClick(idx)" :class="index === idx ? 'active' : ''" :key="idx" v-for="(item, idx) in navList" :href="item.to"><icon-svg name="up"></icon-svg> <span>{{item.name}}</span></a>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      index: 0,
      navList: [
        {name: '我的文章', to: '/'},
        {name: '个人音乐', to: '/music'},
      ]
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
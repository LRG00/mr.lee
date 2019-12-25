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
      <main-content :list='list'></main-content>
    </div>
    <div class="main-right">
      <div class="tag-container">
        <span :key="index" v-for="(item, index) in tagList">{{item.tag}}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import Icon from '@/icons'
  import MainNav from '../components/MainNav'
  import MainContent from '../components/MainContent'
//   import {
//   ArticlesService
// } from "@/common/api.service";
  export default {
    data() {
      return {
        description: ''
      }
    },
    components: {
      MainNav,
      MainContent
    },
    created () {
      this.iconList = Icon.getNameList()
    },
    mounted() {
      console.log(this.description, 'm')
    },
    async asyncData(context) {
      const list = await context.app.$axios.post('api/article/list').then(res => {
        return res.data.data
      })
      const tagList = await context.app.$axios.post('api/tag/list').then(res => {
        return res.data.data
      })
      return {
        list,
        tagList
      }
    },
    methods: {
    },
  }
</script>
<style lang="less">
  .page-home {
    // background: url('../static/background.png');
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
        height: 200px;
        background: rgba(255, 255, 255, 0.6);
        margin-left: 15px;
        .tag-container {
          padding: 10px;
        }
        span {
          border: 1px solid #d9d9d9;
          background: #fafafa;
          border-radius: 4px;
          padding: 0 10px;
          display: inline-block;
          cursor: pointer;
          margin-bottom: 10px;
          margin-right: 8px;
        }
      }
      .main-content {
        flex: 1;
        margin-left: 175px;
      }
    }
  }
</style>
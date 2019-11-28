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
  <div class="page-home-container">
    <div class="header-container">
      <div class="header lrg-pbk lrg-jz">
        <div class="header-logo">
          Mr.Lee
        </div>
      </div>
    </div>
    <div class="main lrg-pbk lrg-jz">
      <div class="main-nav">
        <main-nav></main-nav>
      </div>
      <div class="main-content">
        <h2 class="textured-type">Helmeted Hornbill</h2>
      </div>
      <div class="main-right">main-right</div>
    </div>
    <div class="footer-container">
      <div class="footer lrg-pbk lrg-jz">footer</div>
    </div>
  </div>
</div>
</template>
<script>
  import Icon from '@/icons'
  import MainNav from '../components/MainNav'
  export default {
    components: {
      MainNav
    },
    created () {
      this.iconList = Icon.getNameList()
    },
  }
</script>
<style lang="less">
  .page-home {
    display: flex;
    flex-direction: column;
    .page-home-container {
      .header-container {
        background: rgba(255, 255, 255, 0.6);
        width: 100%;
        position: fixed;
        .header {
          height: 60px;
          // background: red;
          .header-logo {
            color: #1b94f5;
            font-size: 30px;
            font-weight: 700;
            padding: 10px;
            width: 300px;
            mix-blend-mode: screen;
          }
        }
      }
      .footer-container {
        background: #f8f8f8;
        width: 100%;
        .footer {
          height: 60px;
          line-height: 60px;
          text-align: center;
        }
      }

      .main {
        padding-top: 75px;
        padding-bottom: 15px;
        height: 1500px;
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
          // background: rgba(255, 255, 255, 0.6);
          background: #000;
          .textured-type {
            font-weight: 600px;
            font-size: 40px;
            background: url('../static/repeat-white.png');
            -webkit-text-fill-color: transparent;
            color: #fff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-animation: scratchy 0.253s linear forwards infinite;
            -moz-animation: scratchy 0.253s linear forwards infinite;
            animation: scratchy 0.253s linear forwards infinite;
          }
        }
@-webkit-keyframes scratchy {
  0% {
    background-position: 0 0; }
  25% {
    background-position: 0 0; }
  26% {
    background-position: 20px -20px; }
  50% {
    background-position: 20px -20px; }
  51% {
    background-position: 40px -40px; }
  75% {
    background-position: 40px -40px; }
  76% {
    background-position: 60px -60px; }
  99% {
    background-position: 60px -60px; }
  100% {
    background-position: 0 0; } }
@-moz-keyframes scratchy {
  0% {
    background-position: 0 0; }
  25% {
    background-position: 0 0; }
  26% {
    background-position: 20px -20px; }
  50% {
    background-position: 20px -20px; }
  51% {
    background-position: 40px -40px; }
  75% {
    background-position: 40px -40px; }
  76% {
    background-position: 60px -60px; }
  99% {
    background-position: 60px -60px; }
  100% {
    background-position: 0 0; } }
@keyframes scratchy {
  0% {
    background-position: 0 0; }
  25% {
    background-position: 0 0; }
  26% {
    background-position: 20px -20px; }
  50% {
    background-position: 20px -20px; }
  51% {
    background-position: 40px -40px; }
  75% {
    background-position: 40px -40px; }
  76% {
    background-position: 60px -60px; }
  99% {
    background-position: 60px -60px; }
  100% {
    background-position: 0 0; } }
      }
    }
  }
</style>
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
      <div class="main-nav">main-nav</div>
      <div class="main-content">main-content</div>
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
  export default {
    created () {
      this.iconList = Icon.getNameList()
    },
  }
</script>
<style lang="less">
  .page-home {
    border: 1px solid pink;
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
            background-color: rgba(255, 255, 255, 0.6);
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
        background: pink;
        .footer {
          height: 60px;
          background: red;
        }
      }

      .main {
        padding-top: 60px;
        height: 1500px;
        display: flex;
        flex-direction: row;
        .main-nav {
          width: 160px;
          background: rebeccapurple;
          margin-right: 15px;
          position: fixed;
          height: 300px;
        }
        .main-right {
          width: 240px;
          background: rebeccapurple;
          margin-left: 15px
        }
        .main-content {
          flex: 1;
          margin-left: 175px;
          background: rgb(216, 207, 224);
        }
      }
    }
  }
</style>
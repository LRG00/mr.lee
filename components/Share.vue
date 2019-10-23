<!--
 * @Author: liruigang
 * @Date: 2019-10-23 00:16:56
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-23 00:22:09
 * @UI: 
 -->
<template>
  <div class="icon-bar">
    <a href="#" class="facebook"><i class="iconfont icon-shouye"></i></a>
    <a href="#" class="twitter"><i class="iconfont icon-shouye"></i></a>
    <a href="#" class="google"><i class="iconfont icon-shouye"></i></a>
    <a href="#" class="linkedin"><i class="iconfont icon-shouye"></i></a>
    <a href="#" class="youtube"><i class="iconfont icon-shouye"></i></a>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.icon-bar {
  position: fixed;
  z-index: 1100;
  bottom: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3b5998;
  color: white;
}

.twitter {
  background: #55acee;
  color: white;
}

.google {
  background: #dd4b39;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}

.content {
  margin-left: 75px;
  font-size: 30px;
}
</style>

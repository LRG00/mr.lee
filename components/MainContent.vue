<template>
  <div class="content">
    <div class="card">
      <img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" />
      <div class="card-container">
        <nuxt-link to="/article/162"><h4>标题</h4></nuxt-link>
        <p class="title">标题我是一颗小虎牙</p>
      </div>
    </div>
    <div class="card">
      <img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" />
      <div class="card-container">
        <h4>标题</h4>
        <p class="title">标题我是一颗小虎牙</p>
      </div>
    </div>
    <div class="card">
      <img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" />
      <div class="card-container">
        <nuxt-link to="/article/162"><h4>标题</h4></nuxt-link>
        <p class="title">标题我是一颗小虎牙</p>
      </div>
    </div>
    <div class="card">
      <img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" />
      <div class="card-container">
        <h4>标题</h4>
        <p class="title">标题我是一颗小虎牙</p>
      </div>
    </div>
    <div class="card">
      <img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" />
      <div class="card-container">
        <h4>标题</h4>
        <p class="title">标题我是一颗小虎牙</p>
      </div>
    </div>
    <div class="card">
      <img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" />
      <div class="card-container">
        <h4>标题</h4>
        <p class="title">标题我是一颗小虎牙</p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.content {
  
  .card {
    background: rgba(255, 255, 255, 0.55);
    height: 130px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    padding: 8px;
    margin-bottom: 14px;
    box-sizing: border-box;
    display: flex;
    .card-container {
      margin-left: 15px;
      line-height: 25px;
    }
  }
  .card:hover {
    background: rgb(223, 223, 223);
    cursor: pointer;
  }
}
</style>
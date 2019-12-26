<template>
  <div class="content">
    <div class="card" :key="index" v-for="(item, index) in list">
      <div style="height:114px;width:195px;"><img src="../static/streetart2.jpg" alt="Jane" style="height:114px;width:195px;" /></div>
      <div class="card-container">
        <nuxt-link :to="`/article/${item.id}`"><h4>{{item.title}}</h4></nuxt-link>
        <p class="title">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {}
  }
}
</script>
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
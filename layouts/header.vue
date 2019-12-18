<template>
  <div class="header-container">
    <div class="header lrg-pbk lrg-jz">
      <div class="header-logo">
        <nuxt-link to="/">Mr.Lee</nuxt-link>
        <!-- <button class="openbtn" @click="openNav()">☰ Toggle Sidepanel</button>  -->
      </div>
    </div>
  </div>
</template>

<style lang="less">
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
</style>
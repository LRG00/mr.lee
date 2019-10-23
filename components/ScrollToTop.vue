<!--
 * @Author: liruigang
 * @Date: 2019-10-22 22:35:28
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-22 23:46:18
 * @UI: 
 -->
<template>
  <div>
    <button id="myBtn" title="Go to top" @click="topFunction">顶</button>
  </div>
</template>
<script>
export default {
  mounted() {
    window.onscroll = () => {
      this.scrollFunction()
    }
  },
  methods: {
    scrollFunction() {
      const mybutton = document.getElementById('myBtn')
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = 'block'
      } else {
        mybutton.style.display = 'none'
      }
    },

    topFunction() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="less">
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
</style>

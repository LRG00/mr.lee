<!--
 * @Author: liruigang
 * @Date: 2019-10-22 22:35:28
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-23 00:11:25
 * @UI: 
 -->
<template>
  <div class="image-container">
    <div class="text">MR.LEE</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.image-container {
  background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');
  background-size: cover;
  position: relative;
  width: 100%;
  height: 300px;
}

.text {
  background-color: white;
  color: black;
  font-size: 10vw;
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
}
.image-container:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>

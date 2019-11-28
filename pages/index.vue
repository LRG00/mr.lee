<template>
<div class="w3-light-grey w3-content" style="max-width:1600px">
<div class="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">xxxxx</div>
<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container">
    <a href="#" @click="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
    <img src="../static/streetart2.jpg" style="width:45%;" class="w3-round"><br><br>
    <!-- <h4><b>PORTFOLIO</b></h4>
    <p class="w3-text-grey">Template by W3.CSS</p> -->
  </div>
  <div class="w3-bar-block">
    <a href="#portfolio" @click="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO</a> 
    <a href="#about" @click="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT</a> 
    <a href="#contact" @click="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</a>
  </div>
  <div class="w3-panel w3-large">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" @click="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">

  <!-- Header -->
  <header id="portfolio">
    <a href="#"><img src="../static/streetart2.jpg" style="height:65px;width:65px" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" @click="w3_open()"><i class="fa fa-bars"></i></span>
    <div class="w3-container">
    <h1><b>Leeruigan</b></h1>
    <div class="w3-section w3-bottombar w3-padding-16">
      <span class="w3-margin-right">条件筛选:</span> 
      <button class="w3-button w3-black">所有</button>
      <button class="w3-button w3-white"><i class="fa fa-diamond w3-margin-right"></i>设计</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-photo w3-margin-right"></i>照片</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i>艺术</button>
    </div>
    </div>
  </header>
  
  <div style="height:100%">
    <div :key="index" v-for="(article, index) in []" class="w3-third w3-container w3-margin-bottom">
      <img src="../static/nature.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>{{article.title}}</b></p>
        <p>{{article.title}}</p>
      </div>
    </div>
    <div>
      <div style="margin: 0 auto;clear: both;">
        <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
        <a href="#" class="w3-bar-item w3-black w3-button">1</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
  </div>

  
  <div style="clear: both;" class="w3-black w3-center w3-padding-24">长路漫漫 <a href="http://120.77.239.216:5014" title="W3.CSS" target="_blank" class="w3-hover-opacity">为剑做伴</a></div>
<!-- End page content -->
</div>

</div>
</template>
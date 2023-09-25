<template>
 <div class="body-box" style="width: 100%;height: 600px;">
  <!-- <div class="my-style">
    浓厚
  </div>
  <div>
    <div id="round">
      <p>这里，图像平铺（重复）来填充该区域。</p>
      <p>这里，图像平</p>
    </div>
  </div> -->
  <!-- <div class="test-div test-div1">
    <h2>英国维斯米斯特教堂碑文</h2>
    <p>当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。</p>
    <div style="width: 50px;height: 50px;background-color: beige;margin-top: 10px;">nihaokkkkkkkkkk</div>
    <div style="width: 50px;height: 50px;background-color: beige;margin-top: 10px;"></div>
    <div style="width: 50px;height: 50px;background-color: beige;margin-top: 10px;"></div>
  </div> -->
  <div style="width: 100%;height: 100%;">
    <!-- <svg dth="300px" height="175px" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path fill="transparent" stroke="#000000" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="path"></path>
<path fill="transparent" stroke="#FF2851" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="line2"></path>
<path fill="transparent" stroke="#000000" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="line1"></path>
</svg> -->

<!-- <div class="spinner"></div> -->
    <!-- <HumanLoading></HumanLoading> -->
<!-- <svg viewBox="0 0 600 200">
    <text x="0" y="70%"> 李锦超</text>
</svg>   -->

<svg viewBox="0 0 600 200">
    <text x="0" y="70%"> MyArXiv </text>
</svg> 
<!-- <img src="../../public/img/icons/myArXiv.svg"> -->
  </div>
 </div>
</template>
<script setup>
// import HumanLoading from '../components/HumanLoading.vue'

</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Homemade+Apple&family=Sacramento&display=swap");

svg {
    width: 25rem;
    height: 10rem;
    margin: auto;
}

svg text {
    text-transform: uppercase;
    animation: stroke 5s infinite alternate;
    letter-spacing: 1rem;
    font-size: 7rem;
    font-family: "Bangers", cursive;
}
@keyframes stroke {
    0% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(54, 95, 160, 1);
        stroke-dashoffset: 25%;
        stroke-dasharray: 0 50%;
        stroke-width: 0.2;
    }
    50% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(54, 95, 160, 1);
        stroke-width: 0.5;
    }
    70% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(54, 95, 160, 1);
        stroke-width: 1;
    }
    90%,
    100% {
        fill: rgba(72, 138, 204, 1);
        stroke: rgba(54, 95, 160, 0);
        stroke-dashoffset: -25%;
        stroke-dasharray: 50% 0;
        stroke-width: 0;
    }
}





.spinner {
    /* Size */
    height: 4rem;
    width: 4rem;

    /* Create a curve at the top */
    border: 1px solid #df2727;
    border-left-color: #3b82f6;
    border-radius: 50%;

    animation: spinner 800ms linear infinite;
}

@keyframes spinner {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
/* .line1 {
     stroke-dasharray: 340;
     stroke-dashoffset: 40;
     animation: dash 1.5s linear alternate infinite;
}
.line2 {
     stroke-dasharray: 320;
     stroke-dashoffset: 320;
     animation: dash2 1.5s linear alternate infinite;
}
@keyframes dash {
    from {
       stroke-dashoffset: 360;
    }
    to {
       stroke-dashoffset: 40;
    }
}
@keyframes dash2 {
    from {
       stroke-dashoffset: 280;
    }
    to {
       stroke-dashoffset: -40;
    }
} */


.body-box{
  /* background-image: linear-gradient(#e66465, #9198e5);; */
  /* background-image: radial-gradient(circle,red, yellow, green); */
  background-color: aliceblue;
}

.my-style
{
  width:100px;
	height:100px;
	background:red;
	position:relative;
  left: 100px;
  top: 100px;
	animation:myfirst 10s infinite;
  animation-delay:3s;
  /* animation-iteration-count:3; */
  animation-direction:alternate;
  animation-play-state:paused;
  /* transform: rotateX(120deg); */

}

.test-div1{
  width:300px;
	height:300px;
  /* transition:width 2s, height 2s,transform 2s; */
  position: relative;
  left: 500px;
  top: 200px;
  background-color: aqua;
  column-count: 3;
  column-gap: 40px;
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule: 1px solid lightblue;
  column-width: 100px;
  resize:both;
  overflow:auto;
}

h2
{
	column-span:all;
	-webkit-column-span:all; /* Safari and Chrome */
}

/* .test-div:hover
{
	width:200px;
  height: 200px;
  transform: rotate(180deg);
} */

@keyframes myfirst
{
	0%   {background:red; left:0px; top:0px;width: 100px;height: 100px;}
	25%  {background:yellow; left:400px; top:0px;width: 50px;height: 50px;}
	50%  {background:blue; left:200px; top:200px;width: 100px;height: 100px;}
	75%  {background:green; left:0px; top:200px;width: 50px;height: 50px;}
	100% {background:red; left:0px; top:0px;width: 100px;height: 100px;}
}

#round
{

	text-shadow: 5px 5px 5px #FF0000;
}

img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    max-width: 100%;
    height: auto;
    filter: saturate(7);
}

div{
  /* background-color: rgb(150, 144, 238); */
}

@media screen and (max-width: 800px) {
    div {
        background-color: lightgreen;
    }
}
p:after{
		content:":------------------------";
}
p::before{
  content: "!!!!!!!!!!!!!";
}
/* div::before{
  content: "你好";
  background-color: #FF0000;
} */
</style>

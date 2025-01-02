<script setup>
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";

const current = ref(0)
const oindex = ref(0);
const timer = ref(null)
const transformStyle = ref("");
const meta = import.meta.url
const images = reactive([
  new URL("../../assets/images/1.jpg", meta).href,
  new URL("../../assets/images/2.jpg", meta).href,
  new URL("../../assets/images/3.jpg", meta).href,
  new URL("../../assets/images/4.jpg", meta).href,
  new URL("../../assets/images/5.jpg", meta).href,
])
function circleClick(index) {
  current.value = index;
  oindex.value = index;
  transformStyle.value = `transform:translateX(-${500 * oindex.value}px);transition: all 1s linear;`
}

function autoPlay() {
  oindex.value++;
  current.value++;
  if (current.value === images.length - 1) {
    current.value = 0
  }
  transformStyle.value = `transform:translateX(-${500 * oindex.value}px);transition: all 1s linear;`
  if (oindex.value === images.length) {
    oindex.value = 0;
    current.value = 0;
    transformStyle.value = `transform: translateX(0px);`;
  }
}

onMounted(()=>{
  timer.value = setInterval(() => {
    autoPlay();
  }, 2000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<template>
  <div class="banner">
    <ul class="images" ref="imagesDom" :style="transformStyle">
      <li v-for="(image,index) in images" :key="index">
        <img :src="image" alt=""/>
      </li>
    </ul>
    <div class="circle">
      <div v-for="(dot,index) in (images.length-1)" :key="index" :class="index===current?'selectCircle':''"
           @click="circleClick(index)">
      </div>
    </div>
  </div>
</template>

<style scoped>

.mainIndex .banner {
  width: 500px;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.banner ul {
  width: 2500px;
  height: 600px;
}

.banner ul li {
  float: left;
  width: 500px;
  height: 600px;
}

.mainIndex .banner ul li img {
  width: 500px;
  height: 600px;
}

.selectCircle {
  background-color: brown !important;
}

.circle {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 200px;
  left: 10px;
  /*bottom: 70px;*/
  bottom: 30px;
  height: 8px;
}

.circle > div {
  width: 45px;
  height: 8px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  background-color: #cccccc;
}
</style>

<script setup>
import {onMounted} from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRouter} from "vue-router";

const router = useRouter();

const meta = import.meta.url
const items = [
  {src: new URL('../../assets/images/11.jpg',meta).href, title: '机制本', count: 23658},
  {src: new URL('../../assets/images/12.jpg',meta).href, title: '阵营本', count: 28697},
  {src: new URL('../../assets/images/13.jpg',meta).href, title: '情感本', count: 42674},
  {src: new URL('../../assets/images/14.jpg',meta).href, title: '恐怖本', count: 9240},
  {src: new URL('../../assets/images/15.jpg',meta).href, title: '硬核本', count: 9240},
  {src: new URL('../../assets/images/16.jpg',meta).href, title: '还原本', count: 9240},
  {src: new URL('../../assets/images/16.jpg',meta).href, title: '演绎本', count: 9240},
  {src: new URL('../../assets/images/16.jpg',meta).href, title: '变格本', count: 9240},
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.class-left', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.class-left',
      start: 'top 80%',
      toggleActions: 'play none none reverse', // 修改退出动画
    }
  });
});

function go(){
  router.push('categories')
}
</script>

<template>
  <div class="category" >
    <div class="title">
      <div class="left">分类</div>
      <div class="right" @click="go">更多</div>
    </div>
    <div class="class-left">
      <div
        class="category-item"
        v-for="(item, index) in items"
        :key="index"
        @click="go"
      >
        <img :src="item.src" alt="书籍封面">
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.count }} 次点击</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  margin-top: 25px;
  padding: 0 40px;
  height: 300px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.class-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.right {
  cursor: pointer;
}

.category-item {
  width: 20%;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.category-item:hover img {
  transform: scale(1.1);
}

.category-item img {
  width: 60px;
  height: 80px;
  margin-right: 15px;
  transition: all 0.5s ease-in-out;
}

.category-item .info {
  display: flex;
  flex-direction: column;
}

.category-item .info h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.category-item .info p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #888;
}
</style>

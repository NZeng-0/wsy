<script setup>
import {onMounted} from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const meta = import.meta.url

const items = [
  {src: new URL('../../assets/images/11.jpg',meta).href, title: '精品小说', count: 23658},
  {src: new URL('../../assets/images/12.jpg',meta).href, title: '历史', count: 28697},
  {src: new URL('../../assets/images/13.jpg',meta).href, title: '文学', count: 42674},
  {src: new URL('../../assets/images/14.jpg',meta).href, title: '艺术', count: 9240},
  {src: new URL('../../assets/images/15.jpg',meta).href, title: '艺术', count: 9240},
  {src: new URL('../../assets/images/16.jpg',meta).href, title: '艺术', count: 9240},
  {src: new URL('../../assets/images/16.jpg',meta).href, title: '艺术', count: 9240},
  {src: new URL('../../assets/images/16.jpg',meta).href, title: '艺术', count: 9240},
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.list', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.list',
      start: 'top 80%',
      toggleActions: 'play none none reverse', // 修改退出动画
    }
  });
});

</script>

<template>
  <div class="category" >
    <div class="title">
      <div class="left">分类</div>
      <div class="right">更多</div>
    </div>
    <div class="list">
      <div
        class="category-item"
        v-for="(item, index) in items"
        :key="index"
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

.list {
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

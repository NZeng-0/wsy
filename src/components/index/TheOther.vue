<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.index_bottom_left', {
    x: -500,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.index_bottom_left',
      start: 'top 100%',
      toggleActions: 'play reset play reset',
      // markers: true
    }
  });
});
</script>

<template>
  <div class="container">
    <div class="title">其他</div>
    <div class="index_bottom">
      <div class="index_bottom_left">
        <img src="../../assets/images/17.jpg" alt="">
        <img src="../../assets/images/18.jpg" alt="">
        <img src="../../assets/images/19.jpg" alt="">
        <img src="../../assets/images/20.jpg" alt="">
        <img src="../../assets/images/19.jpg" alt="">
        <img src="../../assets/images/20.jpg" alt="">
        <img src="../../assets/images/21.jpg" alt="">
        <img src="../../assets/images/2.jpg" alt="">
        <img src="../../assets/images/2.jpg" alt="">
        <img src="../../assets/images/20.jpg" alt="">
        <img src="../../assets/images/21.jpg" alt="">
        <img src="../../assets/images/2.jpg" alt="">
      </div>
      <div class="index_bottom_right">
        <p>‌剧本杀‌是一种起源于西方宴会实况角色扮演游戏“谋杀之谜”的娱乐项目，玩家通过选择角色、阅读剧本、搜集线索来推理出活动中的真凶。它不仅仅是一个游戏，更是一个集知识属性、心理博弈属性和强社交属性于一体的娱乐项目。‌
          剧本杀的核心在于其角色扮演、推理和悬疑元素。玩家需要根据剧本的指引，扮演不同的角色，通过合作和推理推动故事的发展。随着时间推移，剧本杀在中国逐渐发展，并与中国的传统文化元素深度融合，形成了独具特色的游戏形式。
          在玩法上，剧本杀可以分为线上和线下两种形式。线上剧本杀通过手机APP进行，玩家可以随时随地参与游戏；而线下剧本杀则需要在实体店进行，提供更真实的游戏体验。线下剧本杀又可以分为实景剧本杀和桌游剧本杀，实景剧本杀通常布置得非常逼真，玩家可以身临其境地体验游戏。
          近年来，随着体验经济的发展，剧本杀在国内的接受度不断提高，市场规模也在不断扩大。从最初的年轻人群体逐渐扩展到各个年龄层，成为一种备受瞩目的新兴娱乐方式。此外，剧本杀还与VR、AR等先进技术结合，为玩家带来更加沉浸式的游戏体验。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10px;
  padding: 0 40px;
}
.title {
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 10px;
}

.index_bottom {
  display: flex;
}

.index_bottom_left {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  transform: perspective(1000px) rotateY(30deg) rotateX(0deg);
  margin-top: 50px;
  margin-left: 60px;
}

.index_bottom_left img {
  width: 200px;
  height: 85px;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
}

.index_bottom_left img:hover {
  transform: scale(1.05);
}

.index_bottom_right {
  width: 35%;
  font-family: 'PingFang',serif;
  font-size: 16px;
  font-weight: 500;
  color: #555;
}
</style>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getShop} from "@/api";
import TheNav from "@/components/TheNav.vue";

const id = useRoute().query.id
let newList = ref([])

onMounted(async () => {
  newList.value = (await getShop(id))[0]
})

const router = useRouter();

function back() {
  router.back()
}
</script>

<template>
  <TheNav :is-show="false">
    <template #menu>
      <span @click="back">
        主页
      </span>
    </template>
  </TheNav>
  <div style="height: 40px"></div>
  <div class="container">
    <div class="top_nav">
      <div class="top_navFlex">
        <div class="items-center">
          <img :src="newList.src" alt="">
          <div class="shop-info">
            <span>
              <b>{{ newList.gz }}</b>关注
            </span>
            <span>
              <b>{{ newList.sc }}</b>
              收藏
            </span>
            <span>
              <b>2000</b>
              拼团
            </span>
          </div>
        </div>

        <div class="info">
          <h3>{{ newList.name }}</h3>
          <p>剧本杀数量:<b>{{ newList.number }}</b></p>
          <p>简介：<b>{{ newList.jj }}</b></p>

          <div class="actions">
            <p style="margin-top: 10px;align-items: center;display: flex;">
              <img style="width: 25px;height: 25px" src="@/assets/images/local.png" alt="">
              <b>{{ newList.address }}</b>
            </p>
            <button class="btn">
              关注
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="jbs">
      <div class="title">
        剧本杀
      </div>
      <div class="numberList">
        <div v-for="(item,index) in newList.lists" :key="index">
          <img class="cover" :src="item.zpUrl" alt="">
          <div class="text">
            评论:
            <span class="msg">
              Lorem ipsum
            </span>
          </div>
          <div class="comment">
            <img src="../../assets/images/1.jpg" alt=""/>
            <img src="../../assets/images/2.jpg" alt=""/>
            <img src="../../assets/images/3.jpg" alt=""/>
            <img src="../../assets/images/4.jpg" alt=""/>
            <img src="../../assets/images/5.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 40px;
}

span{
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 15px;
}

.top_nav {
  width: 100%;
  /*background-color: #cccccc;*/
}

.items-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  flex-wrap: wrap;
}

.shop-info {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: white;
}

.top_nav .top_navFlex img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  filter: drop-shadow(2px 4px 8px #eee);
}

.top_nav .top_navFlex {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  background: linear-gradient(to bottom right, #bfdde8, #e4c6ca, #ffffff);
  padding: 10px 0;
}

.top_nav .top_navFlex div h3 {
  line-height: 45px;
}

.top_nav .top_navFlex div p {
  line-height: 35px;
}

.top_nav .top_navFlex .gz {
  text-align: center;
  background-color: #cccccc;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.jbs h3 {
  line-height: 50px;
}

.numberList {
  display: flex;
  width: 100%;
  margin: 10px auto;
  gap: 25px;
}

.cover {
  width: 120px;
  height: 150px;
}

.comment {
  position: relative; /* 使子元素可以使用绝对定位 */
}

.text {
  margin: 5px 0;
  font-size: 12px;
}

.text .msg {
  font-size: 12px;
}

.comment img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid white;
}

.comment img:nth-child(1) {
  left: 0;
  z-index: 5;
}

.comment img:nth-child(2) {
  left: 20px;
  z-index: 4;
}

.comment img:nth-child(3) {
  left: 40px;
  z-index: 3;
}

.comment img:nth-child(4) {
  left: 60px;
  z-index: 2;
}

.comment img:nth-child(5) {
  left: 80px;
  z-index: 1;
}

.numberList p {
  line-height: 40px;
}

.wjs img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.wjs > div {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.jbs {
  padding: 0 40px;
}

.actions {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn {
    margin-top: 10px;
    cursor: pointer;
    display: block;
    width: 120px;
    height: 30px;
    background: none;
    border: 1px solid #786450;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    color: #786450;

    &:hover {
      background: #786450;
      color: #fff;
    }
  }
}
</style>

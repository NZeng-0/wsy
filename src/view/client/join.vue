<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import TheNav from "@/components/TheNav.vue";
import {getCommend} from "@/api";
import {ElMessage} from 'element-plus'
import 'element-plus/dist/index.css';

const router = useRouter();
const id = useRoute().query.id;
const msg = ref([]);

function start() {
  ElMessage({
    message: '开始拼团',
    type: 'success',
  })
}

onMounted(async () => {
  msg.value = (await getCommend(id))[0]
})

function back() {
  router.back()
}
</script>

<template>
  <TheNav>
    <template #menu>
      <span @click="back">
        主页
      </span>
    </template>
  </TheNav>
  <div class="bgImg">
    <div class="detail_img">
      <div>
        <img class="leftImg" :src="msg.imgUrl" alt=""/>
        <div class="desc">
          <p class="changeP">
            <span>￥120</span>
          </p>
          <p style="color: darkorange;font-size: 14px;">2.2万人玩过|81.2万人想玩</p>
          <p>
            <img class="star" alt="" src="@/assets/images/start.png">
            <img class="star" alt="" src="@/assets/images/start.png">
            <img class="star" alt="" src="@/assets/images/start.png">
            <img class="star" alt="" src="@/assets/images/start.png">
          </p>
        </div>
      </div>
      <div class="detail_right">
        <h3>{{ msg.zBiaoti }}</h3>
        <p>
          {{ msg.numberP || 4 }}人 | {{ msg.sexN }}男{{ msg.sexl }}女 | 4小时{{ msg.nextJ }} | 限量59份 |
          177人报名
        </p>
        <p style="margin: 5px 0;">
          <el-tag type="info">桌面</el-tag>
          <el-tag type="info">现代</el-tag>
          <el-tag type="info">欢乐</el-tag>
          <el-tag type="info">盒装</el-tag>
        </p>
        <p style="margin: 5px 0;">
          <b>商家</b>: {{ msg.name }}
        </p>
        <p style="margin: 5px 0;">
          <b>商家公告</b>: {{ msg.content }}
        </p>
        <h4>人物简介</h4>
        <div class="boxs_">
          <div class="box_" v-for="item in msg.rws">
            <img :src="item.rwImg" alt="">
            <p style="text-align: center">{{ item.name }}</p>
          </div>
        </div>
        <h4>剧情简介</h4>
        <div>
          {{ msg.contents }}
        </div>
        <div class="btnBox">
          <el-button
            :plain="true"
            style="width: 60%;height: 40px;"
            type="warning"
            @click="start"
          >
            加入拼团
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  height: 100%;
  padding: 0 40px;
}

span {
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

.star {
  width: 25px;
  height: 25px;
}

.desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.boxs_ {
  display: flex;
  width: 100%;
  gap: 10px;
}

.boxs_ .box_ img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.boxs_ .box_ {
  border: 1px solid #eee;
  padding: 6px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 3px #eee;
}

.detail_img {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 50px;
}

.detail_img .leftImg {
  width: 400px;
  height: 500px;
  border-radius: 10px;
}

.detail_right h3 {
  line-height: 30px;
}

.changeP {
  display: flex;
  line-height: 55px;
  font-size: 14px;
}

.detail_content b {
  font-size: 30px;
}

.detail_content p span {
  margin-right: 20px;
}

h4 {
  line-height: 45px;
}

.detail_content img {
  width: 45px;
  height: 45px;
}

.detail_content div p {
  line-height: 35px;
}

.btnBox {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

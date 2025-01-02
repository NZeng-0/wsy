<template>
  <div class="nav_" @click="goIndex()"><b>X</b></div>
  <div class="img_">
    <img src="@/assets/images/6.jpg">
  </div>
  <div class="center">
    <div class="left">
      <ul class="ull">
        <li><img src="@/assets/images/5.jpg"/></li>
        <form @submit.prevent>
          <p><span>email</span><input type="text" v-model="info.email" :disabled="modifyT"/></p>
          <p><span>password</span><input type="text" v-model="info.password" :disabled="modifyT"/></p>
          <p><span>phone_number</span><input type="text" v-model="info.phone_number" :disabled="modifyT"/></p>
          <p><span>username</span><input type="text" v-model="info.username" :disabled="modifyT"/></p>
          <input class="btn" @click.prevent="modifyC()" type="submit" value="modify" :disabled="modifyT"/>
        </form>
        <li class="lg" @click="modifyChange()" v-if="modifyT">修改>></li>
        <li class="dc" @click="logout()">登出>></li>
      </ul>
    </div>
    <div class="right">
      <h2>关于————***</h2>
      <h4>点赞收藏</h4>
      <div class="bzs">
        <div class="bz">
          <img src="@/assets/images/1.jpg">
          <span>123</span>
        </div>
        <div class="bz">
          <img src="@/assets/images/1.jpg">
          <span>123</span>
        </div>
      </div>
      <h4>发表过的评论</h4>
      <div class="pls">
        <p>点赞点赞 <span><b>X</b></span></p>
        <p>推荐挺好<span><b>X</b></span></p>
      </div>
      <h4>正在拼团的剧本杀</h4>
      <div class="ptImages">
        <div class="ptImage">
          <img src="@/assets/images/1.jpg"/>
        </div>
        <div class="ptImage">
          <img src="@/assets/images/2.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useLocalCache} from "@/hooks";
import {getUserInfo} from "@/api";

const router = useRouter();
const {getCache, removeCache} = useLocalCache()
let modifyT = ref(true);
let info = ref([]);

const loginDates = ref([])

function goIndex() {
  router.push("/")
}

onMounted(async () => {
  let id = getCache("id")
  info.value = await getUserInfo(id)
})

function modifyChange() {
  modifyT.value = false;
}

function logout() {
  removeCache("username")
  removeCache("id")
  removeCache("type")
  router.push("/login")
}

function modifyC() {
  modifyT.value = true;
}

</script>
<style>
.center {
  display: flex;
  /*justify-content: ;*/
}

.ull {
  width: 300px;
  /*background-color: brown;*/
  /*text-align: center;*/
  /*height: 100%;*/
  padding: 10px;
}

.bzs {
  display: flex;
}

.nav_ {
  width: 100%;
  line-height: 40px;
  color: white;
  font-size: 30px;
  background-color: #cccccc;
}

.nav_:hover {
  cursor: pointer;
}

.img_ img {
  width: 100%;
  height: 200px;
}

.center {
  width: 90%;
  justify-content: space-around;
  margin: 0 auto;

}

.right h2 {
  line-height: 65px;
}

.center .left ul li img {
  width: 140px;
  height: 100px;
}

.center .right {
  width: 700px;
}

.bz img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.pls p {
  line-height: 25px;
  margin-top: 7px;
  font-size: 12px;
  background-color: brown;
  padding: 5px;
  border-radius: 10px;
  position: relative;
}

.pls p span {
  position: absolute;
  right: 9px;
  color: white;
}

.ptImages {
  display: flex;
}

.ptImage img {
  height: 160px;
  width: 100px;
  margin-right: 10px;
}

.right h4 {
  line-height: 45px;
  color: white;
}

.ull input {
  border: none;
  width: 100%;
  margin: 0;
}

.ull p span {
  color: white;
  font-size: 12px;

}

.ull p {
  margin-top: 20px;
  margin-bottom: 20px;
}

.ull .lg, .dc {
  color: brown;
  margin-top: 20px;
  font-size: 12px;
}

.ull .lg:hover {
  cursor: pointer;
}

.ull .dc:hover {
  cursor: pointer;
}

.right h4 {
  color: black;
}
</style>

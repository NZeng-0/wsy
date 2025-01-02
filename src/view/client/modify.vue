<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useLocalCache} from "@/hooks";
import {getUserInfo} from "@/api";
import TheNav from "@/components/TheNav.vue";

const router = useRouter();
const {getCache, removeCache} = useLocalCache()

let modifyT = ref(true);
let info = ref({
  email:'',
  password:'',
  phone_number:'',
  username:'',
});

const images = [
  new URL("@/assets/images/2.jpg",import.meta.url).href,
  new URL("@/assets/images/3.jpg",import.meta.url).href,
  new URL("@/assets/images/4.jpg",import.meta.url).href,
  new URL("@/assets/images/5.jpg",import.meta.url).href,
  new URL("@/assets/images/6.jpg",import.meta.url).href,
]

onMounted(async () => {
  let id = getCache("id")
  info.value = (await getUserInfo(id))[0]
})

function back(){
  router.back()
}

function logout() {
  removeCache("username")
  removeCache("id")
  removeCache("type")
  router.push("/login")
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
  <div class="img_">
    <img class="bg-nav" src="@/assets/images/6.jpg" alt="">
  </div>
  <div class="center">
    <div class="left">
      <img class="avatar" src="@/assets/images/5.jpg" alt=""/>
      <el-form :model="info" label-width="auto" style="max-width: 600px">
        <el-form-item label="email">
          <el-input v-model="info.email" :disabled="modifyT" />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="info.password" :disabled="modifyT" />
        </el-form-item>
        <el-form-item label="phone">
          <el-input v-model="info.phone_number" :disabled="modifyT" />
        </el-form-item>
        <el-form-item label="username">
          <el-input v-model="info.username" :disabled="modifyT" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="modifyT = true" :disabled="modifyT">Modify</el-button>
        </el-form-item>
      </el-form>
      <el-button @click="modifyT = false" v-if="modifyT" >修改</el-button>
      <el-button type="danger" @click="logout">登出</el-button>
    </div>

    <div class="right">
      <div class="title">点赞收藏</div>
      <div class="bzs">
        <div class="bz">
          <div>
            <img src="@/assets/images/1.jpg" alt="">
          </div>
          <div>
            <img src="@/assets/images/2.jpg" alt="">
          </div>
        </div>
      </div>

      <div class="title">发表过的评论</div>
      <div class="pls">
        <el-card style="cursor: pointer; width: 100%" shadow="hover">
          <div class="item">
            <img src="@/assets/images/1.jpg" alt="">
            <span>
            点赞点赞
          </span>
          </div>
        </el-card>
        <el-card style="cursor: pointer; width: 100%" shadow="hover">
          <div class="item">
            <img src="@/assets/images/2.jpg" alt="">
            <span>
            推荐挺好
          </span>
          </div>
        </el-card>
      </div>

      <div class="title">正在拼团的剧本杀</div>
      <div class="in-progress">
        <el-image v-for="url in images" :key="url" :src="url" lazy />
      </div>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
}

span{
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 15px;
}

.bzs {
  display: flex;
}

.bg-nav {
  width: 100%;
  height: 200px;
  filter: blur(15px);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: -50px;
  z-index: 999;
  left: 25%;
  box-shadow: 0 -6px 13px -2px #eee;
}

.center {
  width: 90%;
  justify-content: space-around;
  margin: 0 auto;
}

.right h2 {
  line-height: 65px;
}

.center .right {
  width: 700px;
}

.bz {
  display: flex;
}

.bz div{
  margin-right: 10px;
  cursor: pointer;
}

.bz img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.pls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pls img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.item {
  display: flex;
  align-items: center;
}

.item span {
  margin-left: 10px;
}

.in-progress {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.in-progress .el-image {
  display: block;
  height: 180px;
  width: 135px;
  margin: 5px;
  flex-basis: calc(20% - 10px);
  max-width: calc(20% - 10px);
  cursor: pointer;
}
.in-progress .el-image:last-child {
  margin-bottom: 0;
}
</style>

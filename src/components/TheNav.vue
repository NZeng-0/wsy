<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useLocalCache} from "@/hooks";

const router = useRouter()
const {getCache} = useLocalCache();

const username = ref();

function go() {
  router.push('login')
}

onMounted(() => {
  username.value = getCache('username')
})
</script>

<template>
  <div class="w_nav">
    <div class="w_left">
      <img src="../assets/images/logo_.png" alt=""/>
    </div>
    <div class="w_right">
      <span v-if="username"><b>{{ username }}</b></span>
      <span v-else @click="go()"><b>登录</b></span>
      <!--       <span @click="goClientIndex()"><b>你好！wsy</b></span> -->
    </div>
  </div>
  <!-- 高度占位 -->
  <div style="height: 90px"></div>
</template>

<style scoped>
.w_nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.w_right {
  width: 120px;
}

.w_left img {
  height: 40px; /* 调整 logo 大小 */
}

.w_right span {
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;
}
</style>

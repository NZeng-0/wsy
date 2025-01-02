<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref, defineProps} from "vue";
import {useLocalCache} from "@/hooks";

const { isShow } = defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})

const router = useRouter()
const {getCache} = useLocalCache();

const username = ref();

function go(uri) {
  router.push(uri)
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
      <slot name="menu"></slot>
      <span v-if="username" @click="go('modifyClient')">
        {{ username }}
      </span>
      <span v-else @click="go('login')">
        登录
      </span>
    </div>
  </div>
  <!-- 高度占位 -->
  <div v-if="isShow" style="height: 90px"></div>
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
  padding: 0 10px;
}

.w_left img {
  height: 40px; /* 调整 logo 大小 */
}

.w_right span {
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}
</style>

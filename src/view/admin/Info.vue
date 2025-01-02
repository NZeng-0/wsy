<template>
  <div style="background-color: white" class="goNameCss">{{ goName }}</div>
  <img style="border-radius: 50%;width: 100px;height: 100px" :src="adminData?.imgSrc"/>
  <div class="infoS">
    <p>username:<span><b>{{ adminData?.username }}</b></span></p>
    <p>password:<span><b>{{ adminData?.password }}</b></span></p>
    <p>email:<span><b>{{ adminData?.email }}</b></span></p>
    <p>phone_number:<span><b>{{ adminData?.phone_number }}</b></span></p>
    <p>sex:<span><b>{{ adminData?.sex }}</b></span></p>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useLocalCache} from "@/hooks";
import { getUsers } from "@/api";

const {getCache, setCache} = useLocalCache();

const users = ref([]);
let adminData = ref(null)
const goName = ref("");
const route = useRoute();
onMounted(async () => {
  // 如果本地存储中没有数据，则使用路由参数
  // const username = getCache('username') || route.query.username;
  // const id = getCache('id') || route.query.id;
  // const type = getCache('type') || route.query.type;
  // // 设置 goName（这里假设 toName 是路由参数之一）
  // goName.value = route.params.toName || '';
  // // 保存数据到本地存储（如果需要的话）
  // if (username) setCache('username', username);
  // if (id) setCache('id', id);
  // if (type) setCache('type', type);
  // // 初始化 adminData
  // if (id) {
  //   const userData = userDatas.find(item => item.id === id);
  //   adminData.value = userData || null;
  //   console.log(adminData.value)
  // }
  users.value = await getUsers();
})
</script>
<style>
.infoS p {
  line-height: 45px;

}

.infoS p span {
  margin-left: 20px;
}
</style>

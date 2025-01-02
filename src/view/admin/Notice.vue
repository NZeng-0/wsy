<template>
  <div class="goNameCss">{{ goName }}<span @click="goIndex()"><b>X</b></span></div>
  <div class="noticeBox">
    <div class="noticeBox_contents">
      <h4>已发布</h4>
      <p v-for="(item,index) in noticeData" :key="index">{{ item.content }} <span>{{ item.date }}</span></p>
    </div>
    <textarea v-model="addNewNotice" rows="10" cols="100" placeholder="请输入"></textarea>
    <button @click="addNewNoticeClick()">发布</button>
  </div>
</template>
<script setup>
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getNotices} from "@/api";

const initialNotices = ref([]);

const noticeData = reactive([...initialNotices]);
const addNewNotice = ref("");
const route = useRoute();
const goName = ref("");
onMounted(() => {
  goName.value = route.params.toName;
  console.log(goName.value)
})
const router = useRouter();

function goIndex() {
  router.push({
    name: "info",
    params: {
      toName: '个人信息'
    }
  })
}

function addNewNoticeClick() {
  console.log()
  const currentTime = new Date().toLocaleDateString().replaceAll("/", "-");
  noticeData.push({
    content: addNewNotice.value,
    date: currentTime
  })
  addNewNotice.value = ""
}

onMounted(async() =>{
  initialNotices.value = await getNotices();
})
</script>
<style>
.noticeBox p {
  border-bottom: 1px solid #ccc;
  line-height: 30px;
  font-size: 12px;
  /*position: relative;*/
  /*overflow: hidden;*/
}

.noticeBox p span {
  display: block;
  /*right: 0;*/
  text-align: right;
}

.noticeBox_contents {
  /*background-color: darkgrey;*/
  width: 100%;
  height: 400px;
  overflow-y: scroll;
}

textarea {
  margin-top: 10px;
}
</style>

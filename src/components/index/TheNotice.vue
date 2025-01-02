<script setup>
import {onMounted, ref} from "vue";
import TheIcon from "./TheIcon.vue";
import {getNotices} from "@/api";

let displayNo = ref(false)
const list = ref([])

onMounted(async () => {
  list.value = await getNotices();
})
</script>

<template>
  <div class="main_list">
    <span class="title">
      公告
    </span>
    <div class="ps">
      <div class="comment" v-for="(lp,index) in list" :key="index">
        <TheIcon/>
        <div class="comment-item">
          <span class="scroll-text">{{ lp.content }}</span>
        </div>
      </div>
    </div>
    <div v-if="displayNo" class="btn_input"><input type="text" placeholder="评论..."/>
      <button>发送</button>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 15px;
  font-weight: 600;
  display: block;
  text-align: start;
  line-height: 25px;
}

.main_list {
  width: 100%;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  overflow: hidden;
  height: 100%;
}

.main_list h5 {
  line-height: 45px;

}

.main_list p {
  line-height: 30px;
}

.main_list .ps {
  margin-top: 9px;
  height: 489px;
  /*background-color: #cccccc;*/
  overflow: auto;
}

.comment {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
}

.comment:hover {
  background-color: #e9e9e9;
  color: #374151;
}

.comment-item {
  width: 100%;
  overflow: hidden;
}

.scroll-text {
  width: 100%;
  padding-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  transition: transform 0.3s ease;
}

.main_list .ps::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}

.main_list .ps::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
}

.main_list .ps:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

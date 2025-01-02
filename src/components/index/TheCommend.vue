<script setup>
import {getCommends} from '@/api'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const list = ref([])

onMounted(async () => {
  list.value = await getCommends()
})

function go(id){
  router.push(`check?id=${id}`)
}
</script>

<template>
  <div class="container">
    <div class="title">推荐</div>
    <div class="bottom_list">
      <div
        v-for="(value,index) in list"
        :key="index" class="box"
        :style="{ backgroundImage: `url(${value.imgUrl})` }"
        @click="go(value.id)"
      >
        <div class="bot_content z-900" v-html="value.content"/>
        <div/>
        <div class="p-30">
          <img class="top_" :src="value.imgTX" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
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
}

.bottom_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.box {
  width: 100%;
  height: 300px;
  justify-content: space-between;
  background-size: cover;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  cursor: pointer;
}

.box::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(30px);
  border-radius: 20px;
}

.top_ {
  width: 190px;
  height: 250px;
  backdrop-filter: blur(10px);
  transition: all 0.5s ease-in-out;
  transform: perspective(1000px) rotateY(-42deg) rotateX(15deg);
  cursor: pointer;
}

.top_:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
}

.z-900 {
  z-index: 900;
  position: absolute;
}

.bot_content {
  margin-top: 10px;
  font-family: 'xingShu', serif;
  color: white;
  font-size: 25px;
  width: 45%;
  text-align: center;
  top: 15%;
  left: 6%;
}

.p-30 {
  padding: 30px;
}
</style>

<script setup>
import {onMounted, ref} from 'vue'
import TheNav from "@/components/TheNav.vue";
import {getCommends} from "@/api";
import {useRouter} from 'vue-router'

const router = useRouter()

const menus = ref([
  {active: true, text: '机制本'},
  {active: false, text: '阵营本'},
  {active: false, text: '情感本'},
  {active: false, text: '恐怖本'},
  {active: false, text: '硬核本'},
  {active: false, text: '还原本'},
  {active: false, text: '演绎本'},
  {active: false, text: '变格本'},
  {active: false, text: '本格本'},
]);
const list = ref([])

function activateItem(index) {
  menus.value.forEach((item, i) => {
    item.active = i === index;
  });
}

onMounted(async()=>{
  list.value = await getCommends();
  window.scrollTo(0, 0);
})

function back(){
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
  <div class="container">
    <aside class="sidebar">
      <ul>
        <li v-for="(e, index) in menus" :key="index" :class="{ active: e.active }" @click="activateItem(index)">
          {{e.text}}
        </li>
      </ul>
    </aside>
    <main class="content">
      <section class="book-list">
        <article v-for="e in list" class="book-item">
          <img :src="e.imgUrl" alt="cover">
          <div>
            <h2>{{e.name}}</h2>
            <p>{{e.name}}</p>
            <p>654人今日点击 | 推荐值 72.5%</p>
            <p>{{e.content}}</p>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 0 40px;
  height: 100vh;
  overflow: hidden;
}

span{
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

.sidebar {
  width: 200px;
  background-color: #f5f5f5;
  position: fixed;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
  text-align: center;
  margin: 5px;
  border-radius: 6px;
}

.sidebar .active {
  background-color: #007bff;
  color: white;
}

.content {
  flex: 1;
  padding: 0 10px;
  margin-left: 200px;
  overflow-y: auto;
  height: 100vh;
}

.content::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}

.content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
}

.content:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}

.subnav a {
  margin-right: 10px;
  text-decoration: none;
  color: #007bff;
}

.book-item {
  display: flex;
  margin-bottom: 20px;
  padding: 5px 10px;
}

.book-item:hover{
  background: rgba(202, 222, 243, 0.89);
}

.book-item img {
  width: 100px;
  height: 150px;
  margin-right: 20px;
}
</style>

<script setup>
import {getShops} from "@/api";
import {onMounted, ref} from "vue";
import router from "@/router";

const list = ref([])

onMounted(async () => {
  list.value = await getShops()
})

function go(id) {
  router.push(`detailsPage?id=${id}`)
}
</script>

<template>
  <div class="container">
    <div class="title">
      推荐店铺
    </div>
    <div class="shop-list">
      <el-image
        v-for="e in list"
        style="width: 100px; height: 100px; border-radius:50%"
        :src="e.src"
        @click="go(e.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 15px;
  padding: 0 40px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 15px;
}

.shop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

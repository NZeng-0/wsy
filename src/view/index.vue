<script setup>
import TheNav from '@/components/TheNav.vue'
import TheSwipe from "@/components/index/TheSwipe.vue"
import TheMe from "@/components/index/TheMe.vue"
import TheNotice from "@/components/index/TheNotice.vue"
import TheMenu from "@/components/index/TheMenu.vue"
import TheRecommend from "@/components/index/TheCommend.vue";
import TheOther from "@/components/index/TheOther.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <TheNav/>
  <div class="mainIndex">
    <div class="left">
      <TheSwipe/>
    </div>
    <div class="right">
      <TheMe/>
      <TheNotice/>
    </div>
  </div>
  <TheMenu/>
  <TheRecommend/>
  <TheOther/>
  <TheFooter/>
</template>

<style scoped>
.mainIndex {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}

.right {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>

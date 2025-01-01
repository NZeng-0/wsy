<template>
  <div class="goNameCss">{{goName}}<span @click="goIndex()"><b>X</b></span></div>
  <div class="merchantBox">
    <table>
      <tr>
        <th>序号</th>
        <th>封面</th>
        <th>店铺名称</th>
        <th>剧本类型</th>
        <th>是否自创</th>
        <th>评论数</th>
        <th>价格</th>
        <th>团购价格</th>
        <th>拼团人数</th>
        <th>当前人数</th>
        <th>收藏人数</th>
        <th>点击次数</th>
        <th>查看更多>></th>
      </tr>
      <tr v-for="(item,index) in merchant" :key="index">
        <td>{{ index + 1 }}</td>
        <td><img class="coverImage" :src="item.cover"></td>
        <td>{{ item.shopNames }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.created }}</td>
        <td>{{ item.comment }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.ptPrice }}</td>
        <td>{{ item.groupNumber }}</td>
        <td>{{ item.currentGroupNumber }}</td>
        <td>{{ item.collectors }}</td>
        <td>{{ item.clickCount }}</td>
        <td><img class="searchImg" src="@/assets/images/search.png"></td>
      </tr>

    </table>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  setup() {
    const merchant = require("@/utils/merchant.json")
    const goName = ref("");
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      goName.value = route.params.toName;
      console.log(goName.value)
    })
    function goIndex() {
      router.push({
        name: "info",
        params: {
          toName: '个人信息'
        }
      })}
    return {merchant, goName,goIndex}
  }
}
</script>
<style>
.merchantBox .coverImage {
  width: 100px;
  height: 70px;
}

.merchantBox .searchImg {
  width: 18px;
}
.goNameCss{
  background-color: #cccccc;
  line-height: 25px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}
.goNameCss span{
  position: absolute;
  right: 20px;
}
.goNameCss span:hover{
  cursor: pointer;
}
</style>
<template>
  <div class="goNameCss">{{ goName }}<span @click="goIndex()"><b>X</b></span></div>
  <div class="userInfos">
    <table>
      <tr>
        <th>id</th>
        <th>用户账号（email）</th>
        <th>username</th>
        <th>sex</th>
        <th>TX_img</th>
        <th>phone</th>
        <th>control</th>
      </tr>
      <tr v-for="(item,index) in newUserData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.email }}</td>

        <td>{{ item.username }}</td>
        <td>{{ item.sex }}</td>
        <td><img :src="item.imgSrc"></td>
        <td>{{ item.phone_number }}</td>
        <td>
          <button class="leftBtn">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>
      <tr v-for="(item,index) in newUserData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.email }}</td>

        <td>{{ item.username }}</td>
        <td>{{ item.sex }}</td>
        <td><img :src="item.imgSrc"></td>
        <td>{{ item.phone_number }}</td>
        <td>
          <button class="leftBtn">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>

      <tr v-for="(item,index) in newUserData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.email }}</td>

        <td>{{ item.username }}</td>
        <td>{{ item.sex }}</td>
        <td><img :src="item.imgSrc"></td>
        <td>{{ item.phone_number }}</td>
        <td>
          <button class="leftBtn">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>
      <tr v-for="(item,index) in newUserData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.email }}</td>

        <td>{{ item.username }}</td>
        <td>{{ item.sex }}</td>
        <td><img :src="item.imgSrc"></td>
        <td>{{ item.phone_number }}</td>
        <td>
          <button class="leftBtn">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>
      <tr v-for="(item,index) in newUserData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.email }}</td>

        <td>{{ item.username }}</td>
        <td>{{ item.sex }}</td>
        <td><img :src="item.imgSrc"></td>
        <td>{{ item.phone_number }}</td>
        <td>
          <button class="leftBtn">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>
      <tr v-for="(item,index) in newUserData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.email }}</td>

        <td>{{ item.username }}</td>
        <td>{{ item.sex }}</td>
        <td><img :src="item.imgSrc"></td>
        <td>{{ item.phone_number }}</td>
        <td>
          <button class="leftBtn">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>


    </table>
  </div>
</template>
<script>
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  setup() {
    const userDatas = require("@/utils/loginDates.json");
    let newUserData = ref([])
    const goName = ref("");
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      newUserData.value = userDatas.filter(item => {
        return item.type !== "admin";
      })
      goName.value = route.params.toName;
    })

    function goIndex() {
      router.push({
        name: "info",
        params: {
          toName: '个人信息'
        }
      })
    }

    return {newUserData, goName, goIndex}
  }

}
</script>
<style>
.userInfos img {
  width: 70px;
  height: 50px;

}

.userInfos {
  /*background-color: darkgrey;*/
  width: 100%;
  height: 650px;
  /*overflow: scroll;*/
  overflow-y: scroll;
}

/* 隐藏滚动条的整个容器 */
.userInfos {
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}

/* 针对Webkit内核浏览器的隐藏滚动条样式 */
.userInfos::-webkit-scrollbar {
  display: none;
}
</style>
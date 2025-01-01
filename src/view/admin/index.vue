<template>
  <div class="wapper">
    <div class="nav">
      <div class="left">
        <img src="@/assets/images/logo_.png"/>
      </div>
      <div class="right">
        <span><b>admin</b></span>
        <span style="color: #ccc" @click="logout()">logout</span>
      </div>
    </div>
    <div style="text-align: right;line-height: 35px;color: darkgrey">{{currentTime}}</div>
    <div class="main">
      <div class="left">
        <ul>
          <li style="color: darkgrey">剧本杀服务平台</li>
<!--          <li @click="adminInfo()">个人信息</li>-->
          <li><router-link :to="{name:'info',params:{toName:'个人信息'}}">个人信息</router-link></li>

<!--          <li @click="goSort()">剧本杀分类</li>-->
          <li><router-link :to="{name:'sort',params:{toName:'剧本杀分类'}}">剧本杀分类</router-link></li>

<!--          <li @click="goFeedback()">普通用户数据统计</li>-->
          <li><router-link :to="{name:'feedback',params:{toName:'普通用户数据统计'}}">普通用户数据统计</router-link></li>

<!--          <li @click="goNotice()">公告消息管理</li>-->
          <li><router-link :to="{name:'notice',params:{toName:'公告消息管理'}}">公告消息管理</router-link></li>
<!--          <li @click="goMerchant()">商家数据统计</li>-->
          <li><router-link :to="{name:'merchant',params:{toName:'商家数据统计'}}">商家数据统计</router-link></li>
          <!--          <li></li>-->
          <li class="more" @click="goMore()">更多>></li>
        </ul>
      </div>
      <div class="right_">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>
<script>
import {useRouter} from "vue-router";
import {removeLoc} from "@/utils/util";
import {onMounted, onUnmounted, ref} from "vue";

export default {
  setup() {
    const router = useRouter()
    const currentTime = ref(new Date().toLocaleDateString().replaceAll("/","-")+"  "+new Date().toLocaleTimeString());
    // const adminInfo=ref(null);
    const updateTime = () => {
      currentTime.value =new Date().toLocaleDateString().replaceAll("/","-")+"  "+ new Date().toLocaleTimeString();
    };
    // 每秒更新一次时间
    const intervalId = setInterval(updateTime, 1000);
    onMounted(() => {
      updateTime(); // 初始更新时间
    });
    onUnmounted(() => {
      clearInterval(intervalId); // 清除定时器
    });
    function goSort() {
      router.push("/sort")
    }

    function goFeedback() {
      router.push("/feedback")
    }

    function adminInfo() {
      router.push("/Info")
    }


    function logout() {
      removeLoc("username")
      removeLoc("id")
      removeLoc("type")
      router.push("/login")
    }

    // function goMerchant() {
    //   router.push("/merchant")
    // }
    function goNotice(){
      router.push("/notice")
    }
function goMore(){
      router.push("/more")
}

    return {
      goSort, goFeedback, adminInfo, logout,goNotice,currentTime,goMore
    }
  }
}
</script>
<style>
.main {
  /*color: white;*/
  display: flex;
  width: 96%;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px auto;
  border-radius: 20px;
  justify-content: space-around;
  /*  background-image: url("@/assets/images/19.jpg");
    background-size: cover;
    background-repeat: no-repeat;*/

}

.main ul li {
  /*background-color: #cccccc;*/
  line-height: 100px;
  width: 400px;
  text-align: center;
}
.main ul li a{
  color: black;
  text-decoration: none;

}

.main ul {
  border-right: 1px solid #ccc;
  /*background-color: darkgrey;*/
}

.main ul li:hover a{
  color: darkgrey;
}

.right_ {
  width: 900px;
  /*background-color: antiquewhite;*/
}

.nav {
  background-color: darkgray;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav .left img {
  /*width: 100px;*/
  height: 90px;
}

.nav .right {
  width: 10%;
  line-height: 90px;
}

.nav .right:hover {
  cursor: pointer;
}

.nav .right span {
  margin-left: 20px;
}

.right_ {
  position: relative;
}
.more:hover{
  cursor: pointer;
}
</style>
<template>
  <div class="nav_" @click="goIndex()"><b>X</b></div>
  <div class="bgImg">
    <h2 style="text-align: center;line-height: 55px">Re Air 热爱· 沉浸演绎</h2>
    <div class="detail_img">
      <img :src="msg.imgUrl"/>
      <div class="detail_right">
        <h3>{{msg.zBiaoti}}</h3>
        <p>10人|5男5女|4小时|进阶</p>
        <p><span>桌面</span><span>现代</span><span>欢乐</span><span>盒装</span></p>
        <p>{{msg.name}}</p>
        <p>{{msg.content}}</p>
      </div>
    </div>
    <div class="detail_content">
      <p class="changeP"><span><b>￥120</b></span><span>限量59份|177人报名</span></p>
      <div>
        <h4>剧情简介</h4>
        <p>{{msg.contents}}
        </p>
      </div>
      <div>
        <p style="color: darkorange">2.2万人玩过|81.2万人想玩</p>
        <p><img src="@/assets/images/start.png"><img src="@/assets/images/start.png"><img
            src="@/assets/images/start.png"><img src="@/assets/images/start.png">9.4评分</p>
      </div>
    </div>
    <div class="detailBtn" @click="ptBtn()">加入拼团</div>
  </div>
</template>
<script>
import {useRoute, useRouter} from "vue-router";
import {onMounted, reactive, ref} from "vue";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = ref(0);
    const indexDate = require("@/utils/indexDate.json");
    let msg =
        ref([]);

    function goIndex() {
      router.push("/");
    }

    function ptBtn() {

    }

    onMounted(() => {
      console.log(route.query.id)
      id.value = route.query.id
       msg.value = indexDate.filter(value => {
        return value.id == id.value;
      })[0]
      console.log(msg.value)
      console.log(msg.value.content)
    })

    return {
      goIndex, ptBtn,msg
    }
  }
}
</script>
<style>
.bgImg {
  background-image: url("@/assets/images/9.jpg");
  width: 100%;
  color: white;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

/*.nav_ {*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*}*/
.detail_img {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
}

.detail_img img {
  width: 450px;
  height: 550px;
}

.detail_img .detail_right {
  width: 750px;
}

.detail_right h3 {
  line-height: 60px;
}

.detail_right p {
  line-height: 40px;
}

.detail_right p span {
  margin-right: 20px;
  background-color: #cccccc;
  padding: 2px;
}

.detail_content {
  /*padding: 10px;*/
  width: 100%;

}

.detail_content .changeP {
  display: flex;
  line-height: 55px;
}

.detail_content b {
  font-size: 30px;
}

.detail_content p span {
  margin-right: 20px;
}

h4 {
  line-height: 45px;
}

.detail_content img {
  width: 45px;
  height: 45px;
}

.detail_content div p {
  line-height: 35px;
}

.detailBtn {
  width: 100%;
  line-height: 55px;
  text-align: center;
  background-color: darkorange;
}


</style>
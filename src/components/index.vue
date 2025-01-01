<template>
  <div>
    <div class="nav">
      <div class="left">
        <img src="@/assets/images/logo_.png"/>
      </div>
      <div class="right">
        <span>首页</span>
        <span @click="username==='登录'?goLogin():goClientIndex()"><b>{{ username }}</b></span>
        <!--                <span @click="goClientIndex()"><b>你好！wsy</b></span>-->
      </div>
    </div>
    <div class="mainIndex">

      <!--      轮播图-->
      <div class="left">
        <div class="banner">
          <ul class="images" ref="imagesDom" :style="transformStyle">
            <li v-for="(image,index) in images" :key="index">
              <img :src="image"/>
            </li>
          </ul>
          <div class="circle">
            <div v-for="(dot,index) in (images.length-1)" :key="index" :class="index===currentIndex?'selectCirle':''"
                 @click="circleClick(index)"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="main_nav">
          <div class="left">
            <img src="@/assets/images/logo.jpg"/>
            <span>冰糖雪梨</span>
          </div>
          <div class="right">
            <div class="r_">关注</div>
          </div>
        </div>
        <div class="main_list">
          <h5>公告</h5>
          <div class="ps">
            <p v-for="lp in LPList">{{ lp.content }}</p>
          </div>
          <div v-if="displayNo" class="btn_input"><input type="text" placeholder="评论..."/>
            <button>发送</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flList">
      <div class="fl_top">
        <h2>分类</h2>
        <div class="flBoxs">
          <div style="background-color: darkgrey">机制本</div>
          <div>阵营本</div>
          <div>情感本</div>
          <div>恐怖本</div>
          <div>硬核本</div>
          <div>还原本</div>
          <div>演绎本</div>
          <div>变格本</div>
          <div>本格本</div>
        </div>
      </div>
      <div class="fl_bottomBoxs">
        <div class="fl_bottom_box">
          <img src="@/assets/images/11.jpg">
          <p>吞噬星空</p>
        </div>
        <div class="fl_bottom_box">
          <img src="@/assets/images/12.jpg">
          <p>仰天长啸</p>
        </div>
        <div class="fl_bottom_box">
          <img src="@/assets/images/13.jpg">
          <p>十号</p>
        </div>
        <div class="fl_bottom_box">
          <img src="@/assets/images/14.jpg">
          <p>山村老尸</p>
        </div>
        <div class="fl_bottom_box">
          <img src="@/assets/images/15.jpg">
          <p>吞噬</p>
        </div>
      </div>

    </div>

    <h2 class="tj"><span>推荐</span><img src="@/assets/images/tj.png"/><img src="@/assets/images/tj.png"/><img
        src="@/assets/images/tj.png"/></h2>
    <div class="bottom_list">
      <div v-for="(value,index) in imagesList" class="box" @click="goDetail(value.id)">
        <img class="top_" :src="value.imgUrl"/>
        <div class="bot_content">{{ value.content }}</div>
        <div class="changeD">
          <img class="top_logo" :src="value.imgTX">
          <div>
            <div>{{ value.name }}</div>
            <div>{{ value.date }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bt">
      点击查看更多>>(登录之后可点)
    </div>
    <h2 class="tj"><span>其他</span><img src="@/assets/images/qw.png"/><img src="@/assets/images/qw.png"/><img
        src="@/assets/images/qw.png"/></h2>
    <div class="index_bottom">
      <div class="index_bottom_left">
        <div class="oneBox">
          <p>// 如果路由中有 username，则使用它，并保存到本地存储</p>
          <div class="index_bottom_left_box">
            <img src="@/assets/images/17.jpg">
            <img src="@/assets/images/18.jpg">
            <img src="@/assets/images/19.jpg">
            <img src="@/assets/images/20.jpg">
            <!--          <img src="@/assets/images/21.jpg">-->
            <!--          <img src="@/assets/images/2.jpg">-->
          </div>
        </div>
        <div class="oneBox">
          <p>// 如果路由中有 username，则使用它，并保存到本地存储</p>
          <div class="index_bottom_left_box">
            <img src="@/assets/images/19.jpg">
            <img src="@/assets/images/20.jpg">
            <img src="@/assets/images/21.jpg">
            <img src="@/assets/images/2.jpg">
          </div>
        </div>
        <div class="oneBox">
          <p>// 如果路由中有 username，则使用它，并保存到本地存储</p>
          <div class="index_bottom_left_box">
            <img src="@/assets/images/2.jpg">
            <img src="@/assets/images/20.jpg">
            <img src="@/assets/images/21.jpg">
            <img src="@/assets/images/2.jpg">
          </div>
        </div>

      </div>
      <div class="index_bottom_right">
        <h3>起源</h3>
        <p>‌剧本杀‌是一种起源于西方宴会实况角色扮演游戏“谋杀之谜”的娱乐项目，玩家通过选择角色、阅读剧本、搜集线索来推理出活动中的真凶。它不仅仅是一个游戏，更是一个集知识属性、心理博弈属性和强社交属性于一体的娱乐项目。‌
          剧本杀的核心在于其角色扮演、推理和悬疑元素。玩家需要根据剧本的指引，扮演不同的角色，通过合作和推理推动故事的发展。随着时间推移，剧本杀在中国逐渐发展，并与中国的传统文化元素深度融合，形成了独具特色的游戏形式。
          在玩法上，剧本杀可以分为线上和线下两种形式。线上剧本杀通过手机APP进行，玩家可以随时随地参与游戏；而线下剧本杀则需要在实体店进行，提供更真实的游戏体验。线下剧本杀又可以分为实景剧本杀和桌游剧本杀，实景剧本杀通常布置得非常逼真，玩家可以身临其境地体验游戏。
          近年来，随着体验经济的发展，剧本杀在国内的接受度不断提高，市场规模也在不断扩大。从最初的年轻人群体逐渐扩展到各个年龄层，成为一种备受瞩目的新兴娱乐方式。此外，剧本杀还与VR、AR等先进技术结合，为玩家带来更加沉浸式的游戏体验。</p>
      </div>
    </div>
    <div class="end">
      <p>最新更新 | HTML地图 | TXT地图 | XML地图</p>
      <p>
        本站所有视频和图片均来自互联网收集而来，版权归原创者所有，本网站只提供web页面服务，并不提供资源存储，也不参与录制</p>
      <p>Copyright © 2024 家里-蹲(jl-d.com) All Rights Reserved 备案号：蹲ICP备2025000008号</p>
      <p>E-mail：jackalkwilliam@gmail.com</p>
    </div>
  </div>
</template>

<script>
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getLoc, setLoc} from "@/utils/util";

export default {

  setup() {
    const images = reactive([
      require("@/assets/images/1.jpg"),
      require("@/assets/images/2.jpg"),
      require("@/assets/images/3.jpg"),
      require("@/assets/images/4.jpg"),
      require("@/assets/images/1.jpg"),
    ])
    let displayNo = ref(false)
    const transformStyle = ref("");
    //小圆圈样式
    let currentIndex = ref(0)
    let oindex = ref(0);
    const timer = ref(null)
    const username = ref("登录");
    const router = useRouter();
    const route = useRoute();

    function circleClick(index) {
      currentIndex.value = index;
      oindex.value = index;
      transformStyle.value = `transform:translateX(-${500 * oindex.value}px);transition: all 1s linear;`
    }

    onMounted(() => {
      const routeUsername = route.query.username;
      const routeId = route.query.id;
      // 如果路由中有 username，则使用它，并保存到本地存储
      if (routeUsername) {
        username.value = routeUsername;
        setLoc("id", routeId)
        setLoc('username', routeUsername);
        setLoc("type",route.query.type)
      } else {
        const storedUsername = getLoc('username');
        username.value = storedUsername || username.value;
      }

      console.log("------------" + username.value)
      timer.value = setInterval(() => {
        autoPlay();
      }, 2000)
    })
    onBeforeUnmount(() => {
      clearInterval(timer.value)
    })

    function goDetail(id) {
      router.push({
        path: "/detailsPage",
        query: {id: id}
      })
    }

    function autoPlay() {
      oindex.value++;
      currentIndex.value++;
      if (currentIndex.value === images.length - 1) {
        currentIndex.value = 0
      }
      transformStyle.value = `transform:translateX(-${500 * oindex.value}px);transition: all 1s linear;`
      if (oindex.value === images.length) {
        oindex.value = 0;
        currentIndex.value = 0;
        transformStyle.value = `transform: translateX(0px);`;
      }
    }

    const imagesList = require("@/utils/indexDate.json")
    const LPList = require("@/utils/LP.json")


    function goClientIndex() {
      router.push("/modifyClient")
    }

    function goLogin() {
      router.push("/login")
      // console.log(indexDate)
    }

    function goClassification() {
      router.push("/classification")
    }

    return {
      username,
      LPList,
      goClientIndex,
      goLogin,
      displayNo,
      images,
      transformStyle,
      currentIndex,
      circleClick,
      autoPlay,
      imagesList,
      goDetail,
      goClassification
    }
  }
};
</script>

<style>
input {
  width: 400px;
  height: 30px;
  margin-left: 65px;
}

button {
  width: 100px;
  height: 35px;
  background-color: black;
  color: white;
  margin-left: 10px;
}

.selectCirle {
  background-color: brown !important;
}

.circle {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 200px;
  left: 10px;
  /*bottom: 70px;*/
  bottom: 30px;
  height: 8px;
}

.circle > div {
  width: 45px;
  height: 8px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  background-color: #cccccc;
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

.mainIndex .banner {
  width: 500px;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.banner ul {
  width: 2500px;
  height: 600px;
}

.banner ul li {
  float: left;
  width: 500px;
  height: 600px;
}

.mainIndex .banner ul li img {
  width: 500px;
  height: 600px;
}

.mainIndex {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.mainIndex .right .left img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
}

.mainIndex .right .left {
  font-size: 10px;
}

.mainIndex .right .main_nav {
  display: flex;
  justify-content: space-between;
  /*line-height: 55px;*/
  align-items: center;
}

.mainIndex .right .main_nav .r_ {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: black;
  color: #cccccc;
  text-align: center;
  line-height: 30px;
}

.main_list {
  width: 650px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  height: 515px;
  overflow: hidden;
}

.main_list h5 {
  line-height: 45px;

}

.main_list p {
  line-height: 30px;
}

.main_list .ps {
  height: 420px;
  /*background-color: #cccccc;*/
  overflow: auto;
}

.bottom_list .box {
  border-radius: 10px;
  width: 300px;
  height: 420px;
  background-color: darkgray;
  color: white;
  padding: 4px;
  margin-top: 10px;
}

.bottom_list .box .top_ {
  width: 100%;
  border-radius: 10px;
  height: 300px;
}

.bottom_list .box .top_logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.bottom_list .box .bot_content {
  margin-top: 5px;
  font-size: 13px;
  line-height: 19px;
}

.bottom_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.bottom_list .box .changeD {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  font-size: 13px;
  line-height: 30px;
}

.bt {
  text-align: center;
  line-height: 56px;
}

.bt:hover {
  cursor: pointer;
}

.flList {
  /*width:88%;*/
  margin: 10px auto;
}

.flList h2 {
  line-height: 45px;
}

.flList .flBoxs {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
}

.flList .flBoxs div {
  line-height: 35px;
  width: 76px;
  text-align: center;
  border-radius: 10px;
  background-color: #cccccc;
}

.fl_bottomBoxs {
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
}

.fl_bottomBoxs .fl_bottom_box img {
  width: 240px;
  border-radius: 10px;
  height: 300px;
}

.fl_bottomBoxs .fl_bottom_box p {
  line-height: 35px;
}


.tj {
  /*line-height: 45px;*/
  padding: 10px;
}

.tj img {
  width: 30px;
}

.tj span {
  margin-right: 10px;
}

.index_bottom {
  width: 95%;
  margin: 10px auto;
  /*background-color: darkgrey;*/
  display: flex;
}

.index_bottom .index_bottom_left_box img {
  width: 200px;
  height: 85px;
  border-radius: 10px;
}

.index_bottom .index_bottom_left_box img:hover {
  transform: scale(1.04);
}

.index_bottom .index_bottom_left .oneBox {
  width: 900px;
  /*background-color: brown;*/
  border-bottom: 2px solid #cccccc;
  padding: 10px;

}

.index_bottom .index_bottom_left .index_bottom_left_box {
  display: flex;
  justify-content: space-around;
}

.index_bottom .index_bottom_left .oneBox p {
  line-height: 45px;
}

.index_bottom_right h3 {
  line-height: 45px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 10px;
}

.index_bottom_right {
  padding: 10px;
  border-left: 1px solid #ccc;
}

.index_bottom_right p {
  line-height: 30px;
  font-size: 14px;
}
.end p{
  line-height: 30px;
  font-size: 12px;
  text-align: center;
}
</style>

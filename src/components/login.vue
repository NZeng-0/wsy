<template>
  <div class="DL">
    <div>
      <img src="@/assets/images/logo_.png">
    </div>
    <h2>Sign in</h2>
    <p style="color: red;line-height: 20px;margin-top: 10px">{{ showErr }}</p>
    <form @submit.prevent>
      <div>
        <div>Email</div>
        <div><input type="text" v-model="email"/></div>
      </div>
      <div>
        <div>Password</div>
        <div><input type="password" v-model="password"/></div>
      </div>
      <div><input class="btn" type="submit" @click.prevent="handleSubmitLogin" value="Sign in"/></div>
    </form>
    <p @click="goRegister()">New account Sign up.</p>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import data from "@/utils/loginDates.json";

export default {
  name: "login",
  setup() {
    let email = ref(null);
    let password = ref(null);
    let showErr = ref("");
    let router = useRouter();
    const data = require("@/utils/loginDates.json")

    function handleSubmitLogin() {
      let a = data.filter((value) => {
        return value.email === email.value && value.password === password.value;
      })
      if (a.length === 0) {
        // console.log("密码或者email错误")
        showErr.value = "密码或者email错误，请重新登录！！！"
      } else {
        //判断是否为admin登录type =="admin"
        if (a[0].type === "admin") {
          router.push({
            path: "/admin",
            query: {"username": a[0].username, "id": a[0].id, "type": a[0].type}
          })
        } else {
          router.push({
            path: "/",
            query: {"username": a[0].username, "id": a[0].id, "type": a[0].type}
          })
        }


        // console.log(a[0].id, a[0].username)
      }
    }

    function goRegister() {
      router.push("/register")
    }

    return {
      email, password, showErr, handleSubmitLogin, goRegister
    }
  }
}
</script>

<style scoped>
img {
  width: 45px;
}

form > div {
  margin-bottom: 20px;
}

h2 {
  text-align: center;
}

input {
  width: 380px;
  height: 35px;
}

form {
  padding: 40px;
}

.btn {
  border-radius: 30px;
  height: 45px;
  background-color: white;
  margin-top: 40px;
}

p {
  text-align: center;
}

.DL {
  width: 600px;
  margin: 100px auto;
  background-color: #cccccc;
  padding: 10px;
}
</style>
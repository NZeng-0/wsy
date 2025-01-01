<template>
  <div class="ZC">
    <div>
      <img src="@/assets/images/logo_.png">
    </div>
    <h2>Sign Up</h2>
    <p style="color: brown">{{ showErr }}</p>
    <form @submit.prevent>
      <div>
        <div>Email</div>
        <div><input type="text" v-model="email"/></div>
      </div>
      <div>
        <div>Password</div>
        <div><input type="password" v-model="password"/></div>
      </div>
      <div>
        <div>Repeat Password</div>
        <div><input type="password" v-model="repeat_password"/></div>
      </div>
      <div>
        <div>Phone Number</div>
        <div><input type="text" v-model="phone_number"/></div>
      </div>
      <div>
        <div>First Name</div>
        <div><input type="text" v-model="firstname"/></div>
      </div>
      <div>
        <div>Last Name</div>
        <div><input type="text" v-model="lastname"/></div>
      </div>
      <div><input class="btn" @click.prevent="signUp" type="submit" value="Sign up"/></div>
    </form>
    <p @click="goLogin()">New account Sign Up.</p>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "register",
  setup(){
    let email = ref("");
    let password = ref("")
    let phone_number = ref("")
    let firstname = ref("")
    let lastname = ref("")
    let repeat_password = ref("")
    let showErr = ref("")
    let router = useRouter()
    function goLogin(){
      router.push("/login")
    }
    return{
      goLogin, email, showErr, password, phone_number, firstname, lastname, repeat_password
    }
  }
}
</script>

<style scoped>
.ZC{
  width: 510px;
  margin: 100px auto;
  background-color: #cccccc;
  padding: 10px;
  border-radius: 10px;
}
img{
  width: 45px;
}
h2{
  text-align: center;
}
form > div {
  margin-bottom: 15px;
}

input {
  width: 300px;
  height: 30px;
}

form {
  padding-left: 40px;
}

.btn {
  border-radius: 30px;
  height: 45px;
  background-color: white;
}

p {
  text-align: center;
}
</style>
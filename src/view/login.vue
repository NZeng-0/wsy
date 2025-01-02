<script setup>
import { ref } from "vue";
import {onLogin} from "@/api";
import { useLocalCache } from "@/hooks";
import {useRouter} from "vue-router";

const router = useRouter()
const { setCache } = useLocalCache()

const user = ref({
  username: '',
  password: ''
})

async function login(){
  if(user.value.username === '' && user.value.password === ''){
    return
  }
  const data = await onLogin(user.value)
  setCache('username', data[0].username)
  await router.push('/')
}
</script>

<template>
  <div class="container">
    <div class="form-container">
      <div class="header">
        <img class="avatar" src="../assets/images/logo_.png" alt="Your Company"/>
        <h2 class="title">Sign in System</h2>
      </div>
      <form class="form">
        <div class="form-group">
          <label for="username" class="label">Username</label>
          <div class="input-container">
            <input
              v-model="user.username"
              id="username"
              name="username"
              type="text"
              autocomplete="username"
              required="" class="input"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="password" class="label">Password</label>
          </div>
          <div class="input-container">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="input"
            />
          </div>
        </div>

        <div>
          <button type="button" @click="login" class="button">
            Sign in
          </button>
          <br/>
          <RouterLink class="to" to="/register">
            No Account Register
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to bottom right, rgba(224, 195, 252, 0.65), rgba(224, 195, 252, 0.73), rgba(142, 197, 252, 0.75));
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
  width: 400px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

.header {
  text-align: center;
  margin-bottom: 32px;
}

.avatar {
  margin: 0 auto;
  height: 50px;
  width: auto;
  border-radius: 50%;
}

.title {
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  color: #1f2937;
}

.input-container {
  margin-top: 8px;
}

.input {
  padding: 8px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  color: #1f2937;
  box-sizing: border-box;

}

.input:focus {
  border-color: #64a9f2;
  outline: none;
}

.button {
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 20px;
  background-color: #06b6d4;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
}

.button:hover {
  background-color: #0ea5e9;
}
.to {
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: block;
}
.to:hover{
  color: #9bc0e6;
}
</style>

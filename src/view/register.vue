<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {onLogin, onRegister} from "@/api";
import { useLocalCache } from "@/hooks";

const router = useRouter()
const { setCache } = useLocalCache()

const user = ref({
  email: '',
  username: '',
  password: '',
  repeat_password: '',
  phone_number: '',
})

async function register() {
  const data = await onRegister(user.value)
  if (data) {
    const res = await onLogin({
      username: user.value.username,
      password: user.value.password
    })
    setCache('username', res[0].username)
    setCache('id', data[0].id)
    await router.push('/')
  }
}
</script>

<template>
  <div class="container">
    <div class="form-container">
      <div class="header">
        <h2 class="title">Register</h2>
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

        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="repeat_password" class="label">Confirm</label>
          </div>
          <div class="input-container">
            <input
              v-model="user.repeat_password"
              id="repeat_password"
              name="repeat_password"
              type="password"
              autocomplete="current-repeat_password"
              required=""
              class="input"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="email" class="label">Email</label>
          </div>
          <div class="input-container">
            <input
              v-model="user.email"
              id="email"
              name="email"
              type="email"
              autocomplete="current-email"
              required=""
              class="input"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="phone" class="label">Phone</label>
          </div>
          <div class="input-container">
            <input
              v-model="user.phone_number"
              id="phone"
              name="phone"
              type="text"
              autocomplete="phone"
              required=""
              class="input"
            />
          </div>
        </div>

        <div>
          <button type="button" class="button" @click="register">
            register
          </button>
          <br/>
          <RouterLink class="to" to="/login">
            To Login
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
  background: linear-gradient(to bottom right, rgba(142, 197, 252, 0.75), rgb(234, 225, 244), rgba(224, 195, 252, 0.73));
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

.title {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
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
  margin-top: 5px;
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

.to:hover {
  color: #9bc0e6;
}
</style>

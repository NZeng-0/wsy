import {useFetch} from "@/api/useFetch";

const fetch = new useFetch('http://localhost:3000');

export function getCommends() {
  return fetch.get('/commends');
}

export function getNotices() {
  return fetch.get('/notices');
}

export function getUsers(){
  return fetch.get('/uses')
}

export function getUserInfo(id){
  return fetch.get('/users',id)
}

export function onLogin(user){
  return fetch.get(`/users`,{ ...user })
}

export function onRegister(data){
  return fetch.post('/users',data)
}
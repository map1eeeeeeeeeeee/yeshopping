<template>
    <div class="my-page">
      <van-cell-group>
        <van-cell icon="info-o" title="我的订单" is-link @click="order" />
        <van-cell icon="info-o" title="我的地址" is-link @click="address" />
        <van-cell icon="logout" title="退出登录" is-link @click="Logout" />
      </van-cell-group>
      <HomeTabber></HomeTabber>
    </div>
  </template>
  
  <script  setup>
  import { useRouter } from 'vue-router'
  import HomeTabber from './HomeTabber.vue';
 
    const route=useRouter()
    function address(){
        route.push("/addresslist")
    }
    function order(){
        route.push("/orderlist")
    }
    function Logout(){
      route.push("/logout")
    }
  </script>
  
  <style scoped>
  .my-page {
    padding: 16px;
  }
  

  
  .avatar {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
  
  .username {
    font-size: 18px;
    font-weight: bold;
  }
  </style>
  
<template>
    <div class="my-page">
      <div class="user-info">
        <van-image class="avatar" round :src="avatarUrl" />
        <div class="username">{{ username }}</div>
      </div>
  
      <van-cell-group>
        <van-cell icon="user-o" title="个人资料" is-link @click="handleEditProfile" />
        <van-cell icon="setting-o" title="设置" is-link @click="handleSettings" />
        <van-cell icon="phone-o" title="联系我们" is-link @click="handleContact" />
      </van-cell-group>
  
      <van-cell-group>
        <van-cell icon="info-o" title="我的订单" is-link @click="order" />
        <van-cell icon="info-o" title="我的地址" is-link @click="address" />
        <van-cell icon="logout" title="退出登录" is-link @click="handleLogout" />
      </van-cell-group>
      <HomeTabber></HomeTabber>
    </div>
  </template>
  
  <script  setup>
  import { useRouter } from 'vue-router'
  import HomeTabber from './HomeTabber.vue';
 
  let  avatarUrl='https://img.yzcdn.cn/vant/cat.jpeg'
    let  username='John Doe'
    const route=useRouter()
    function address(){
        route.push("/addresslist")
    }
    function order(){
        route.push("/orderlist")
    }
  </script>
  
  <style scoped>
  .my-page {
    padding: 16px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    padding: 16px 0;
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
  
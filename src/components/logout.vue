<template>
    <div class="logout-page">
      <van-nav-bar title="退出登录" left-arrow @click-left="goBack" />
      <div class="logout-content">
        <p>确定要退出登录吗？</p>
        <div class="logout-button-container">
          <van-button round block type="default" @click="cancelLogout">取消</van-button>
          <van-button round block type="danger" @click="confirmLogout">确认退出</van-button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  function goBack() {
    router.back();
  }
  
  function cancelLogout() {
    goBack();
  }
  
  function confirmLogout() {
    router.push('/login'); 
  }
  </script>
  
  <style scoped>
  .logout-page {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .logout-content {
    padding: 16px;
  }
  
  .logout-button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  </style>
  
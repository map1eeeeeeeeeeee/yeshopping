<template>
    <div class="address-list">
      <van-nav-bar
    title="地址列表"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-swipe-cell  v-for="(item ,index) in list"> 
    <van-list>
        <van-cell
          :key="index"
          :title="item.name"
          :label="item.tel"
          :value="item.area+item.detail"
          is-link
          @click="onClick(item)"
        >
        </van-cell>
      </van-list>
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button"  @click="deladdress(item.id)"/>
      <van-button square text="使用" type="danger" class="delete-button"    @click="use(item.id)"/>
    </template>
  </van-swipe-cell>
  
       
      <div class="a"> 
      <van-button round block type="primary" native-type="submit" @click="onAdd">
        新增地址
      </van-button>
    </div>
    </div>
  </template>
  
  
            
  
  <script setup>
  import { useRouter } from 'vue-router'
  import axios from 'axios';
  import { ref, reactive, onMounted } from 'vue';
  import shop3 from '@/api/shop3';
  import HomeTabberVue from './HomeTabber.vue';
  import { showToast } from 'vant';
  const router = useRouter()
      function getorder(){
        shop3.getorderlist( ).then(res=>{
          console.log(res)
        })
      }
      getorder()
      const onClickLeft = () => history.back();
  </script>
  
  <style scoped>
  .a{
    margin: 0px;
    padding: 0px;
    width: 100%;
    position:fixed;
    top: 93%;
  }
  </style>
  
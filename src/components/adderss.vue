<template>
  <div>
    <van-nav-bar
  title="新增地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-address-edit
  :area-list="areaList"
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
 
/>

 
  </div>

</template>

<script setup >
import { useRouter } from 'vue-router';
 import { ref ,reactive} from 'vue';
 import shop3 from '@/api/shop3';
 import HomeTabber from './HomeTabber.vue';
 import { areaList } from '@vant/area-data';
 import { showNotify } from 'vant';
let address =reactive({
  name:"",
  tel:"",
  area:"",
  detail:"",
})
const router = useRouter()

    const searchResult = ref([]);
 
    function  onSave(a){
      address.name=a.name
      address.tel=a.tel
      address.area=a.city
      address.detail=a.addressDetail
      console.log( a)
      console.log(address)
      shop3.addersscreate(address).then(res=>{
        console.log(res)
        showNotify({ type: 'primary', message: res.data.msg });
      })
    }
   function onDelete (){
     address={
      name:"",
  tel:"",
  area:"",
  detail:"",
     }
   }
    
    const onClickLeft = () => history.back();
  

</script>

<style scoped>

</style>

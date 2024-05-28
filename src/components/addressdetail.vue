<template>
  <div class="address-detail-page">
    <van-nav-bar title="Address Details" />

    <van-nav-bar title="修改地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result
      :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
      @delete="onDelete" />

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router';
 
 
import { ref, reactive } from 'vue';
import shop3 from '@/api/shop3';
import HomeTabber from './HomeTabber.vue';
import { areaList } from '@vant/area-data';
import { showNotify } from 'vant';
const route = useRoute()
const router = useRouter()
let address = reactive({
  name: "",
  tel: "",
  area: "",
  detail: "",
  id:route.query.address
})


const searchResult = ref([]);

function onSave(a) {
  address.name = a.name
  address.tel = a.tel
  address.area = a.city
  address.detail = a.addressDetail
  console.log(a)
  console.log(address)
  shop3.addersscreate(address).then(res => {
    console.log(res)
    showNotify({ type: 'primary', message: res.msg });
  })
}
 

const onClickLeft = () => history.back();

function getid() {
  let id = route.query.address
  console.log(id)
}
getid()

</script>

<style scoped>
.address-detail-page {
  height: 100%;
  background-color: #f7f8fa;
}

.actions {
  padding: 16px;
}

.actions .van-button {
  margin-bottom: 12px;
}
</style>
<template>
    <div>

        <van-nav-bar title="购物车" left-text="返回商品" right-text="地址" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
        <van-card v-for="(i, index2) in shoppinglist  " :key=i.id num="0" :price='i.pid' desc="描述信息" :title="i.name"
            :thumb="i.image"   v-show="show">
            <template #tags>
                <van-tag plain type="primary">{{ index2 }}</van-tag>
                <van-tag plain type="primary">标签</van-tag>
            </template>
            <template #footer>
                <van-stepper v-model="count[index2]" theme="round" button-size="22" disable-input min="-1" @minus="x"
                    @plus="x" />
            </template>
        </van-card>
        <van-submit-bar button-text="提交订单" @submit="submit" />

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import shop3 from '@/api/shop3';
import HomeTabberVue from './HomeTabber.vue';
import { showToast } from 'vant';
import { useRoute } from 'vue-router'
import { showNotify } from 'vant';
let show=ref(true)
let address = ref()
const router = useRouter()
const route = useRoute()
let shoppinglist = reactive([])
let count = reactive([])
function a() {
    shoppinglist = JSON.parse(window.localStorage.getItem("shopping"))
    console.log(shoppinglist)

    for (let i = 0; i <= shoppinglist.length; i++) {
        count.push(0)

    }
    console.log(count)
    shop3.getaddress().then(res => {
        if (route.query.address == null) {
            address.value = res.data.id
        } else {
            address.value = route.query.address
        }
    })

}
function x(a) {

    console.log(count)

}

function onClickLeft() {
    router.push("/shopping")
}


function onClickRight() {
    router.push("/addresslist")

}
function submit() {
    let shop = {
        address: address.value,
        note: "",
        goods: ""
    }
    let shopping = []
    for (let i = 0; i < shoppinglist.length; i++) {
        let shop = {
            "id": "",
            "count": "",
            "selected": true
        }
        shop.id = shoppinglist[i].id
        shop.count = count[i]
        shopping.push(shop)
    }

    shop.goods = shopping
    console.log(shop)
    shop3.ordercreate(shop).then(res => {
        showNotify({ type: 'primary', message: res.msg });
        console.log(res)
       
    if(res.code!=0){
        show.value=false
    }
    })

}
a()

</script>

<style scoped></style>

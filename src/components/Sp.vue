<template>
    <div>

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in imagedata" :key="item.id">
                <img :src=item.img height="150px" width="100%">
            </van-swipe-item>

        </van-swipe>
        <van-tabs v-model:active="active" scrollspy sticky>
            <van-tab v-for=" (item, index) in imagedata2" :key="item.id" :title="item.name">

                <van-card v-for="(i, index2) in item.sub  " :key=i.id num="0" :price='i.pid' desc="描述信息" :title="i.name"
                    :thumb="i.image">
                    <template #tags>
                        <van-tag plain type="primary">标签</van-tag>
                        <van-tag plain type="primary">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-icon name="cart-o" color="#1989fa" size="30" @click="b(index, index2)"
                            v-show="gvc[a(index, index2)]" />
                        <van-stepper v-model="i.sub.pid" theme="round" button-size="22" v-show="!gvc[a(index, index2)]"
                            disable-input min="-1" @minus="g(i.sub.pid, index, index2)" />
                    </template>
                </van-card>
            </van-tab>
        </van-tabs>

        <br>
        <br>
        <br>

        <HomeTabberVue></HomeTabberVue>

    </div>

</template>

<script setup>
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import shop3 from '@/api/shop3';
import HomeTabberVue from './HomeTabber.vue';



 
const cuan = reactive([])
const tot = ref(0)
const gvc = ref(0)
const active = ref(0);
const imagedata = ref("")
const imagedata2 = ref('')
function getimage() {
    shop3.getImgs().then(res => {
        imagedata.value = res.data
        console.log(res)

    })

}
async function getimage2() {
    await shop3.category().then(res => {
        imagedata2.value = res.data
      
        console.log(imagedata2.value)
        console.log(imagedata2.value[0].sub[0].pid)
    })
    const a = []
    console.log(imagedata2.value[1])
    for (let i = 0; i < imagedata2.value.length; i++) {
        for (let z = 0; z < imagedata2.value[i].sub.length; z++) {
            a.push(true)

        }
    }
    gvc.value = a
    console.log(gvc.value)
}
function a(a, b) {
    let totle = 0
    for (let i = 0; i <= a; i++) {
        totle += imagedata2.value[i].sub.length
    }
    totle -= imagedata2.value[a].sub.length
    totle += b
    return totle
}
 async function b(a, b) {
    let totle = 0
    for (let i = 0; i <= a; i++) {
        totle += imagedata2.value[i].sub.length
    }
    totle -= imagedata2.value[a].sub.length
    totle += b
    gvc.value[totle] = !gvc.value[totle]
  
      
   
    cuan.push(imagedata2.value[a].sub[b])
    console.log(JSON.stringify(cuan))
    window.localStorage.setItem("shopping", JSON.stringify(cuan))
    console.log(cuan)
    let bbbb = JSON.parse(window.localStorage.getItem("shopping"))
    console.log(bbbb)
}
function show() {
    let t = 0
    t++
    return gvc.value[t]
}
function g(q, w, e) {
    console.log(q, w, e)
    if (q == 1) {
        gvc.value[this.a(w, e)] = true
        imagedata2.value[w].sub[e].sub.pid = '1'
        cuan.forEach((item, index) => {
            if (item == imagedata2.value[w].sub[e]) {
                cuan.splice(index, 1)
                console.log(cuan)
            }
        });
    }
}


getimage(),
    getimage2()




</script>

<style scoped></style>
<template>
  <div class="container">
    <div class="a">
      <van-nav-bar title="登录" />
      <van-form class="form">
        <van-field v-model="user.username" name="用户名" placeholder="用户名" class="field" />
        <van-field v-model="user.password" type="password" name="密码" placeholder="密码" class="field" />
        <div class="button-container">
          <van-button block native-type="submit" type="primary" @click="login()">
            登录
          </van-button>
          <van-button block native-type="submit" type="primary" @click="res()">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import shop3 from '@/api/shop3';

const router = useRouter()
const user = reactive({
  username: '',
  password: ''
})

async function login() {
  console.log(shop3)
  await shop3.login(user).then(res => {
    console.log(res)
    if(res.code == 0){
      alert(res.msg)
    } else {
      window.localStorage.setItem('token', res.data.session_id)
      console.log(window.localStorage.getItem('token'))
      router.push("/shopping")
    }
  })
}

function res(){
  router.push("/register")
}
</script>

<style>
.container {
  background-image: url(@/assets/1.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.a {
  background: rgba(220, 220, 220, 0.9); /* 柔和的灰色背景 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 增加轻微的阴影效果 */
  max-width: 400px;
  width: 100%;
}

.form {
  width: 100%;
}

.field {
  margin-bottom: 16px;
}

.button-container {
  margin-top: 16px;
}

.van-button {
  margin-bottom: 10px;
}
</style>

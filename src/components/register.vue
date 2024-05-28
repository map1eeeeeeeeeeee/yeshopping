<template>
  <div class="container">
    <div class="a">
      <van-nav-bar title="注册" />
      <van-form class="form" @submit="onSubmit">
        <van-field
          v-model="data.username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          class="field"
        />
        <van-field
          v-model="data.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
          class="field"
        />
        <van-field
          v-model="data.email"
          name="邮箱"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
          class="field"
        />
        <div class="button-container">
          <van-button round block type="primary" @click="onSubmit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import shop3 from '@/api/shop3';
import { useRouter } from 'vue-router'
import { showNotify } from 'vant';

const router = useRouter()
let data = reactive({
  username: "",
  password: "",
  email: ""
})

function onSubmit() {
  // 处理注册逻辑
  shop3.register(data).then(res => {
    console.log(data)
    if (res.code == 0) {
      showNotify({ type: 'success', message: res.msg });
    } else {
      router.push("/login")
    }
  })
}
</script>

<style scoped>
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 轻微的阴影效果 */
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

<template>
  <div>
    <a href="https://baidu.com/" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="getTemplates">请求</button>
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { getTemplate } from '@/api'
import { Toast } from 'vant'
const fetchTemplate = async () => {
  Toast.loading({
    message: 'Loading...',
    duration: 0
  })
  const res = await getTemplate()
  await getTemplate()
  console.log(res)
}

const getTemplates = () => {
  fetchTemplate()
}
</script>
<style scoped>
.logo {
  height: 50px;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

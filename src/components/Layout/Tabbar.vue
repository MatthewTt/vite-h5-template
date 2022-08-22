<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

function fetch() {
  let hha = 12
  const a = '1';
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button v-for="item in 2" :key="item" @click="fetch">发起请求 {{ item }}</button>
</template>

<style></style>

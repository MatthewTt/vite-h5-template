<template>
  <Layout />
  <mobile-console />
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MobileConsole from '@/components/MobileConsole/index.vue'
import Layout from '@/components/Layout/index.vue'
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

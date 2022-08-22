<template>
  <div :class="{ 'app-container': showTab }">
    <router-view></router-view>
    <Tabbar v-if="showTab" />
  </div>
</template>
<script setup>
import Tabbar from './Tabbar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const showTab = computed(() => {
  return route.meta.showTab
})
</script>

<style scoped></style>

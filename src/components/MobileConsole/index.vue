<template>
  <teleport to="#app">
    <div class="v-console" @click="toggleVc">console</div>
  </teleport>
</template>

<script setup>
import { reactive } from 'vue'
import VConsole from 'vconsole'

const state = reactive({
  lastClickTime: 0,
  count: 0,
  limit: ['production'].includes(process.env.NODE_ENV) ? 10 : 5,
  vConsole: null
})

const hasClass = (el, className) => {
  return el.classList.contains(className)
}
const addClass = (el, className) => {
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
}
const removeClass = (el, className) => {
  if (hasClass(el, className)) {
    el.classList.remove(className)
  }
}

const toggleClass = (el, className) => {
  if (hasClass(el, className)) {
    removeClass(el, className)
  } else {
    addClass(el, className)
  }
}

const toggleVc = () => {
  const nowTime = new Date().getTime()
  if (nowTime - state.lastClickTime < 3000) {
    state.count++
  } else {
    state.count = 0
  }
  state.lastClickTime = nowTime
  if (state.count >= state.limit) {
    if (!state.vConsole) {
      state.vConsole = VConsole ? new VConsole() : new window.VConsole()
    }
    const vconDom = document.getElementById('__vconsole')
    toggleClass(vconDom, 'v-console-show')
    state.count = 0
  }
}
</script>

<style lang="scss">
.v-console {
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: center;
  border: 1px solid #edf2f4;
  padding: 3px;
  opacity: 0;
  z-index: 200;
}
.v-console-show {
  display: block !important;
}
</style>

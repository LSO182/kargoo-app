<template>
  <CookiesBanner />
  <NavBar :activeSection="activeSection" />
  <RouterView @update:activeSection="handleActiveSection" />
  <MainFooter />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import MainFooter from './components/MainFooter.vue'
import CookiesBanner from './components/CookiesBanner.vue'

import { ref } from 'vue'

const activeSection = ref('')

const handleActiveSection = (id) => {
  activeSection.value = id
}
</script>

<style scoped lang="css"></style>

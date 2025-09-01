<template>
  <NavBar />
  <WspBtn />
  <CookiesBanner />
  <RouterView />
  <MainFooter />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import MainFooter from './components/MainFooter.vue'
import WspBtn from './components/WspBtn.vue'
import CookiesBanner from './components/CookiesBanner.vue'
</script>

<style scoped lang="css"></style>

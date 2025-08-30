<template>
  <div id="who-are-we">
    <ImageAndText :data="whoAreWeData" />
  </div>
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/whoAreWe.json'

defineOptions({ name: 'WhoAreWe' })
</script>

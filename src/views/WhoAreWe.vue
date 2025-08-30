<template>
  <div id="who-are-we">
    <div class="container">
      <ImageAndText :data="whoAreWeData" />
    </div>
  </div>
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/whoAreWe.json'

defineOptions({ name: 'WhoAreWe' })
</script>

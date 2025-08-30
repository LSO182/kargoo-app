<template>
  <div id="work-zone">
    <div class="container">
      <ImageAndText :data="whoAreWeData" />
    </div>
  </div>
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/availableWorkZone.json'

defineOptions({ name: 'WorkZone' })
</script>

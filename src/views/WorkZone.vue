<template>
  <div id="work-zone">
    <ImageAndText :data="whoAreWeData" />
  </div>
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/availableWorkZone.json'

defineOptions({ name: 'WorkZone' })
</script>

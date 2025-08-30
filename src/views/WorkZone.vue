<template>
  <ImageAndText :data="whoAreWeData" />
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/availableWorkZone.json'

defineOptions({ name: 'WorkZone' })
</script>

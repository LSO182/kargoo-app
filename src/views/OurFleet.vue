<template>
  <ImageAndText :data="whoAreWeData" />
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/ourFleet.json'

defineOptions({ name: 'OurFleet' })
</script>

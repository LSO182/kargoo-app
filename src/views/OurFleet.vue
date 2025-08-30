<template>
  <div id="our-fleet">
    <ImageAndText :data="whoAreWeData" />
  </div>
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/ourFleet.json'

defineOptions({ name: 'OurFleet' })
</script>

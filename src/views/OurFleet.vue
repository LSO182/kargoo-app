<template>
  <div id="our-fleet">
    <div class="container">
      <ImageAndText :data="whoAreWeData" />
    </div>
  </div>
</template>

<script setup>
import ImageAndText from '@/components/ImageAndText.vue'
import whoAreWeData from '@/data/ourFleet.json'

defineOptions({ name: 'OurFleet' })
</script>

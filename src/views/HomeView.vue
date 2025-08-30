<template>
  <div class="container">
    <WhoAreWe />
    <OurServices />
    <WorkZone />
    <OurFleet />
  </div>
</template>

<script setup>
import OurFleet from './OurFleet.vue'
import OurServices from './OurServices.vue'
import WhoAreWe from './WhoAreWe.vue'
import WorkZone from './WorkZone.vue'

defineOptions({ name: 'HomeView' })
</script>

<style lang="css" scoped></style>

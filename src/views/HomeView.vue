<template>
  <div class="container">
    <WhoAreWe />
    <OurServices />
    <WorkZone />
    <OurFleet />
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
import OurFleet from './OurFleet.vue'
import OurServices from './OurServices.vue'
import WhoAreWe from './WhoAreWe.vue'
import WorkZone from './WorkZone.vue'

defineOptions({ name: 'HomeView' })
</script>

<style lang="css" scoped></style>

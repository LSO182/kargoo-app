<template>
  <WhoAreWe />
  <OurServices />
  <WorkZone />
  <OurFleet />
  <ContactForm />
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

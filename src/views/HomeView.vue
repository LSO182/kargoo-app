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

import { onMounted, onBeforeUnmount } from 'vue'

const sections = ['who-are-we', 'our-services', 'work-zone', 'our-fleet', 'contact-form']

const emit = defineEmits(['update:activeSection'])

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          emit('update:activeSection', entry.target.id)
        }
      })
    },
    { threshold: 0.9 },
  )

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style lang="css" scoped></style>

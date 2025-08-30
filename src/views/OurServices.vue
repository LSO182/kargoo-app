<template>
  <div id="our-fleet" class="my-5">
    <h3 class="h2 text-primary-grey text-center">Nuestros servicios</h3>
    <p class="text-primary-grey text-center">Estos son los servicios que ofrecemos</p>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(service, index) in services" :key="index">
        <InfoCard
          :title="service.title"
          :subtitle="service.subtitle"
          :text="service.text"
          :links="service.links"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import InfoCard from '@/components/InfoCard.vue'
import services from '@/data/ourServices.json'
</script>

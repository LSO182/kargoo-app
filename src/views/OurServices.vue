<template>
  <div id="our-fleet" class="gap-section">
    <h3 class="h2 text-primary-grey text-center">Nuestros servicios</h3>
    <p class="text-primary-grey text-center">Estos son los servicios que ofrecemos</p>
    <div
      class="row overflow-x-scroll overflow-x-lg-hidden overflow-y-hidden flex-nowrap flex-lg-wrap"
    >
      <div class="col-lg-4 col-md-7 col-11 mb-4" v-for="(service, index) in services" :key="index">
        <InfoCard
          :title="service.title"
          :subtitle="service.subtitle"
          :text="service.text"
          :link="service.link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import InfoCard from '@/components/InfoCard.vue'
import services from '@/data/ourServices.json'
</script>

<style scoped lang="css">
@media (min-width: 992px) {
  .overflow-x-lg-hidden {
    overflow-x: hidden !important;
  }
}
</style>

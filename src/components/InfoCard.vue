<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body">
      <h5 class="text-primary-grey">{{ title }}</h5>
      <h6 class="text-primary-grey">{{ subtitle }}</h6>
      <p class="text-secondary-grey">{{ text }}</p>
      <a v-for="(link, i) in links" :key="i" :href="link.url" class="card-link">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  text: String,
  links: Array,
})
</script>

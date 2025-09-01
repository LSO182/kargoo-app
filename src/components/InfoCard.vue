<template>
  <div class="card h-100">
    <div class="card-body d-flex flex-column">
      <div class="me-auto icon-bg bg-primary-grey">
        <div class="icon d-flex">
          <span class="material-symbols-outlined text-primary-blue"> {{ icon }}</span>
        </div>
      </div>
      <h5 class="text-primary-grey">{{ title }}</h5>
      <h6 class="text-primary-grey">{{ subtitle }}</h6>
      <ul v-if="list">
        <li v-for="(item, index) in list" :key="index" class="text-primary-grey">
          {{ item }}
        </li>
      </ul>
      <a :href="link.url" class="card-link mt-auto me-auto btn btn-primary" v-if="link">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  subtitle: String,
  list: Array,
  link: Object,
})
</script>

<style scoped lang="css">
.card {
  box-shadow: var(--bs-box-shadow-sm);
}
.card:hover {
  box-shadow: var(--bs-box-shadow);
  transition: all 0.3s ease-in-out;
}
.icon-bg {
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>

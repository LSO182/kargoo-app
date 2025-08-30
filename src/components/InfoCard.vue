<template>
  <div class="card h-100">
    <div class="card-body d-flex flex-column">
      <div class="me-auto icon-bg">
        <div class="icon"></div>
      </div>
      <h5 class="text-primary-grey">{{ title }}</h5>
      <h6 class="text-primary-grey">{{ subtitle }}</h6>
      <p class="text-secondary-grey">{{ text }}</p>
      <a :href="link.url" class="card-link mt-auto me-auto btn btn-primary">
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
  link: Object,
})
</script>

<style scoped lang="css">
.card {
  box-shadow: var(--bs-box-shadow-sm);
}
.card:hover {
  box-shadow: var(--bs-box-shadow);
  transform: translateY(-5px);
  transition: all 0.3s ease-in-out;
}
.icon-bg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>

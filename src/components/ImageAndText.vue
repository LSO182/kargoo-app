<template>
  <div class="row my-5 align-items-center">
    <div class="col-lg-6" :class="data.orderImg" v-if="data.image && data.image.src">
      <img :src="data.image.src" :alt="data.image.alt" class="img-fluid image-text-img" />
    </div>
    <div class="col-lg-6 mt-3 mt-lg-0" :class="data.orderText">
      <h3 class="h1 text-primary-grey" v-if="data.title">{{ data.title }}</h3>
      <p class="text-primary-grey fw-bold" v-if="data.subtitle">
        {{ data.subtitle }}
      </p>
      <p class="text-primary-grey" v-if="data.paragraph">
        {{ data.paragraph }}
      </p>
      <ul v-if="data.list">
        <li v-for="(item, index) in data.list" :key="index" class="text-primary-grey">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})

defineOptions({ name: 'ImageAndText' })
</script>

<style lang="css" scoped>
.image-text-img {
  border-radius: 25px;
}
</style>

<template>
  <nav class="navbar navbar-expand-xl bg-white shadow-sm fixed-top">
    <div class="container-fluid container">
      <img src="/assets/images/logo-kargoo.png" alt="Logo kargoo" class="logo" />

      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link text-small"
              :class="{ active: activeSection === 'who-are-we' }"
              href="#who-are-we"
              >¿Quiénes somos?</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-small"
              :class="{ active: activeSection === 'our-services' }"
              href="#our-services"
              >Nuestros servicios</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-small"
              :class="{ active: activeSection === 'work-zone' }"
              href="#work-zone"
              >Zona de Cobertura</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-small"
              :class="{ active: activeSection === 'our-fleet' }"
              href="#our-fleet"
              >Nuestra Flota</a
            >
          </li>
        </ul>
        <div class="d-flex flex-column d-xl-none align-items-center justify-content-between">
          <a href="#" class="btn btn-primary d-xl-inline-flex my-2">Quiero enviar con Kargoo</a>
          <a href="#" class="btn btn-outline-primary d-xl-inline-flex my-2"
            >Quiero ser repartidor</a
          >
          <a
            href="#contact-form"
            class="btn btn-outline-primary d-xl-inline-flex"
            :class="{ active: activeSection === 'contact-form' }"
            >Contáctanos</a
          >
        </div>
      </div>

      <div class="d-none d-xl-flex align-items-center justify-content-between">
        <a href="#" class="btn btn-primary d-xl-inline-flex me-2">Quiero enviar con Kargoo</a>
        <a href="#" class="btn btn-outline-primary d-xl-inline-flex me-2">Quiero ser repartidor</a>
        <a
          href="#contact-form"
          class="btn btn-outline-primary d-xl-inline-flex"
          :class="{ active: activeSection === 'contact-form' }"
          >Contáctanos</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineOptions({ name: 'NavBar' })

const activeSection = ref('')

const sections = ['who-are-we', 'our-services', 'work-zone', 'our-fleet', 'contact-form']

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.9 }, // 90% visible para marcar activa la sección
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

<style scoped>
.logo {
  width: 120px;
  height: auto;
}

.nav-link.active {
  font-weight: bold;
  color: var(--primary-blue) !important;
}
.nav-link:hover {
  color: var(--primary-blue) !important;
}
</style>

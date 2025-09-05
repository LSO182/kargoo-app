<template>
  <nav class="navbar navbar-expand-xl bg-white shadow-sm fixed-top">
    <div class="container-fluid container">
      <a href="/">
        <img src="/assets/images/logo-kargoo.png" alt="Logo kargoo" class="logo" />
      </a>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['collapse navbar-collapse', { show: menuOpen }]" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link text-small"
              :class="{ active: props.activeSection === 'who-are-we' }"
              :to="{ path: '/', hash: '#who-are-we' }"
              @click="handleLinkClick"
            >
              ¿Quiénes somos?
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-small"
              :class="{ active: props.activeSection === 'our-services' }"
              :to="{ path: '/', hash: '#our-services' }"
              @click="handleLinkClick"
            >
              Nuestros servicios
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-small"
              :class="{ active: props.activeSection === 'work-zone' }"
              :to="{ path: '/', hash: '#work-zone' }"
              @click="handleLinkClick"
            >
              Zona de Cobertura
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-small"
              :class="{ active: props.activeSection === 'our-fleet' }"
              :to="{ path: '/', hash: '#our-fleet' }"
              @click="handleLinkClick"
            >
              Nuestra Flota
            </router-link>
          </li>
        </ul>
        <div class="d-flex flex-column d-xl-none align-items-center justify-content-between">
          <a href="#" class="btn btn-primary d-xl-inline-flex my-2">Quiero enviar con Kargoo</a>

          <a
            href="https://docs.google.com/forms/d/1lpOTo1v-FMFXNrp2OfA4SW4iYKFPQlZ1POS3Al-wyxM/edit"
            class="btn btn-outline-primary d-xl-inline-flex my-2"
            target="_blank"
            rel="noreferrer noopener"
            >Quiero ser repartidor</a
          >

          <router-link
            class="btn btn-outline-primary d-xl-inline-flex"
            :class="{ active: props.activeSection === 'contact-form' }"
            :to="{ path: '/', hash: '#contact-form' }"
            @click="handleLinkClick"
          >
            Contáctanos
          </router-link>
        </div>
      </div>

      <div class="d-none d-xl-flex align-items-center justify-content-between">
        <a href="#" class="btn btn-primary d-xl-inline-flex me-2">Quiero enviar con Kargoo</a>
        <a
          href="https://docs.google.com/forms/d/1lpOTo1v-FMFXNrp2OfA4SW4iYKFPQlZ1POS3Al-wyxM/edit"
          class="btn btn-outline-primary d-xl-inline-flex me-2"
          target="_blank"
          rel="noreferrer noopener"
          >Quiero ser repartidor</a
        >
        <router-link
          class="btn btn-outline-primary d-xl-inline-flex"
          :class="{ active: props.activeSection === 'contact-form' }"
          :to="{ path: '/', hash: '#contact-form' }"
          @click="handleLinkClick"
        >
          Contáctanos
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  activeSection: String,
})
defineOptions({ name: 'NavBar' })

const menuOpen = ref(false)

let observer

// Función para cerrar menú si clickeas fuera
const handleOutsideClick = (event) => {
  const menu = document.getElementById('navbarSupportedContent')
  const toggleBtn = document.querySelector('.navbar-toggler')
  if (menu && !menu.contains(event.target) && toggleBtn && !toggleBtn.contains(event.target)) {
    menuOpen.value = false
  }
}

// Función para cerrar menú al click en cualquier link
const handleLinkClick = () => {
  menuOpen.value = false
}

onMounted(() => {
  // Listener global para clicks fuera del menú
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  document.removeEventListener('click', handleOutsideClick)
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

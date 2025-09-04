<template>
  <div class="main-footer bg-primary py-3">
    <div class="container">
      <div class="row flex-column justify-content-center align-items-center">
        <p class="text-white mt-3 mb-0 text-center fw-bold">
          Impulsando la logística del futuro 🚀
        </p>
        <p class="text-white mt-3 mb-0 text-center">
          © 2025 - Todos los derechos reservados | Kargoo SPA | RUT 78209183-2 | contacto@kargoo.co
        </p>
        <p class="fw-bold text-white text-center mt-3 mb-0">
          Domicilio Legal:
          <span class="text-white fw-normal"
            >Pasaje Santiago Zavala 337, Pta Mira Sindempart, Coquimbo, Chile</span
          >
        </p>
        <p class="fw-bold text-white text-center mt-3 mb-0">
          Representante Legal:
          <span class="text-white fw-normal">Andrea Carolina Mordini Ardiles, RUT 8.937.336-0</span>
        </p>
        <p class="fw-bold text-white text-center mt-3 mb-0">
          Razón Social: <span class="text-white fw-normal">Kargoo SPA</span>
        </p>
        <p class="fw-bold text-white text-center mt-3 mb-0">
          RUT: <span class="text-white fw-normal">78.209.183-2</span>
        </p>
        <div class="d-flex justify-content-center align-items-center mt-3">
          <router-link class="text-white" to="/terms">Términos de Servicio</router-link
          ><span class="text-white mx-2">|</span>
          <router-link class="text-white" to="/legal">Legales</router-link
          ><span class="text-white mx-2">|</span>
          <router-link class="text-white" to="/privacy">Política de Privacidad</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.main-footer {
  min-height: 300px;
}
</style>

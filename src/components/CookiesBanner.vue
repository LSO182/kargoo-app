<template>
  <div v-if="showBanner" id="cookies-banner">
    <div
      class="rounded-1 shadow offcanvas offcanvas-bottom cookies-banner py-5"
      tabindex="-1"
      id="offcanvasCookiesBanner"
      aria-labelledby="offcanvasCookiesBanner"
    >
      <div class="container">
        <div class="row">
          <div class="d-flex align-items-center justify-content-between">
            <p class="text-primary-grey title-4 fw-bold">Política de Cookies</p>
          </div>
          <p class="text-primary-grey">
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. <br />
            <span class="fw-bold">Importante:</span>
            al aceptarlas, consientes el uso de datos según nuestra política.
          </p>
          <div class="d-flex align-items-center">
            <router-link to="/cookies" class="btn-link" target="_blank"
              >Política de Cookies</router-link
            >
            <button class="btn btn-outline-primary mx-3" @click="rejectCookies">Rechazar</button>
            <button class="btn btn-primary" @click="acceptCookies">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'AuthModal' })
import { ref, onMounted } from 'vue'
import { Offcanvas } from 'bootstrap'

const showBanner = ref(false)

const cookieName = 'cookieConsent'
const lastVisitName = 'lastVisit'

function setCookie(name, value, days) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
}

function getCookie(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
  }
  return null
}

function deleteAllCookies() {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
  }
}

function hasBeenMoreThan7Days(lastVisit) {
  if (!lastVisit) return true
  const lastVisitDate = new Date(lastVisit)
  const now = new Date()
  return now - lastVisitDate > 7 * 24 * 60 * 60 * 1000
}

function acceptCookies() {
  setCookie(cookieName, 'accepted', 7)
  setCookie(lastVisitName, new Date().toISOString(), 7)
  hideBanner()
}

function rejectCookies() {
  deleteAllCookies()
  hideBanner()
}

function hideBanner() {
  showBanner.value = false
}

onMounted(() => {
  const consent = getCookie(cookieName)
  const lastVisit = getCookie(lastVisitName)

  if (!consent || hasBeenMoreThan7Days(lastVisit)) {
    setTimeout(() => {
      showBanner.value = true
      setTimeout(() => {
        const offcanvasEl = document.getElementById('offcanvasCookiesBanner')
        if (offcanvasEl) {
          new Offcanvas(offcanvasEl, {
            backdrop: false,
            scroll: true,
          }).show()
        }
      }, 100)
    }, 1000)
  } else {
    setCookie(lastVisitName, new Date().toISOString(), 7)
  }
})
</script>

<style scoped>
#cookies-banner .offcanvas {
  --bs-offcanvas-height: auto;
}

body.offcanvas-open {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

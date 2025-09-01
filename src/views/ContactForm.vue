<template>
  <div class="bg-custom-grey-light">
    <div class="container">
      <div class="row gap-section align-items-center" id="contact-form">
        <div class="col-lg-6 d-none d-lg-block order-lg-2">
          <img
            src="/assets/images/logistica-de-transporte.jpg"
            class="img-fluid image-text-img"
            alt="Imagen form"
          />
        </div>
        <div class="col-lg-6">
          <h3 class="h1 text-primary-grey text-center">¿Tienes alguna duda o consulta?</h3>
          <p class="text-secondary-grey text-center h5">¡Escríbenos!</p>

          <!-- ALERTS -->
          <div v-if="alertMessage" :class="['alert', alertType]" role="alert">
            {{ alertMessage }}
          </div>

          <form @submit.prevent="submitForm" :class="{ 'was-validated': wasValidated }" novalidate>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre"
                v-model="name"
                required
              />
              <label for="name">Nombre</label>
              <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
            </div>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="nombre@ejemplo.com"
                v-model="email"
                required
              />
              <label for="email">Email</label>
              <div class="invalid-feedback">Por favor ingresa un email válido.</div>
            </div>

            <div class="form-floating">
              <textarea
                class="form-control comments"
                placeholder="Dejanos tu comentario aquí"
                id="comment"
                rows="5"
                v-model="comment"
                required
                minlength="10"
              ></textarea>
              <label for="comment">Dejanos tu comentario aquí</label>
              <div class="invalid-feedback">El comentario debe tener al menos 10 caracteres.</div>
            </div>

            <button class="btn btn-primary mt-3" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const name = ref('')
const email = ref('')
const comment = ref('')

const wasValidated = ref(false)
const isSubmitting = ref(false)

const alertMessage = ref('')
const alertType = ref('') // 'alert-success' o 'alert-danger'

// Validación básica de email
const isValidEmail = (emailValue) => /\S+@\S+\.\S+/.test(emailValue)

const submitForm = () => {
  wasValidated.value = true

  if (name.value && isValidEmail(email.value) && comment.value.length >= 10) {
    isSubmitting.value = true

    const templateParams = {
      name: name.value,
      email: email.value,
      message: comment.value,
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        // Caso éxito
        alertMessage.value = 'Mensaje enviado con éxito.'
        alertType.value = 'alert-success'

        name.value = ''
        email.value = ''
        comment.value = ''
        wasValidated.value = false
      })
      .catch((error) => {
        console.error('Error al enviar el email', error)
        alertMessage.value = 'Ocurrió un error al enviar el mensaje. Intenta de nuevo.'
        alertType.value = 'alert-danger'
      })
      .finally(() => {
        isSubmitting.value = false
      })
  } else {
    // Validación fallida
    alertMessage.value = 'Por favor completá todos los campos correctamente.'
    alertType.value = 'alert-danger'
  }
}
</script>

<style scoped>
.image-text-img {
  border-radius: 25px;
}

.comments {
  height: 150px !important;
}
</style>

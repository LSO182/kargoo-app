<template>
  <div class="bg-custom-grey-light">
    <div class="container">
      <div class="row gap-section align-items-center" id="contact-form">
        <div class="col-12">
          <h3 class="h1 text-primary-grey text-center">¿Quieres enviar con Kargoo?</h3>
          <p class="text-secondary-grey text-center h5">¡Escríbenos!</p>

          <div v-if="alertMessage" :class="['alert', alertType]" role="alert">
            {{ alertMessage }}
          </div>

          <form @submit.prevent="submitForm" :class="{ 'was-validated': wasValidated }" novalidate>
            <div class="row g-3">
              <!-- 👇 todo tu form tal cual -->
              <!-- Nombre -->
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    placeholder="Nombre"
                    v-model="form.nombre"
                    required
                  />
                  <label for="nombre">Nombre</label>
                  <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
                </div>
              </div>
              <!-- Apellido -->
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="apellido"
                    placeholder="Apellido"
                    v-model="form.apellido"
                    required
                  />
                  <label for="apellido">Apellido</label>
                  <div class="invalid-feedback">Por favor ingresa tu apellido.</div>
                </div>
              </div>

              <!-- Empresa -->
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="empresa"
                    placeholder="Empresa"
                    v-model="form.empresa"
                    required
                  />
                  <label for="empresa">Empresa</label>
                  <div class="invalid-feedback">Por favor ingresa el nombre de tu empresa.</div>
                </div>
              </div>

              <!-- Email -->
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="nombre@ejemplo.com"
                    v-model="form.email"
                    required
                  />
                  <label for="email">Correo electrónico</label>
                  <div class="invalid-feedback">Por favor ingresa un email válido.</div>
                </div>
              </div>

              <!-- Teléfono -->
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="tel"
                    class="form-control"
                    id="telefono"
                    placeholder="+56 9 1234 5678"
                    v-model="form.telefono"
                    required
                    pattern="^[0-9()+.\s-]{6,}$"
                  />
                  <label for="telefono">Teléfono</label>
                  <div class="invalid-feedback">Ingresa un teléfono válido.</div>
                </div>
              </div>

              <!-- Regiones -->
              <div class="col-md-6">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="regionOrigen"
                    v-model="form.regionOrigen"
                    required
                  >
                    <option value="" disabled>Selecciona región de origen</option>
                    <option v-for="r in regionesChile" :key="'o-' + r.codigo" :value="r.nombre">
                      {{ r.nombre }}
                    </option>
                  </select>
                  <label for="regionOrigen">Ciudad / Región de origen</label>
                  <div class="invalid-feedback">Selecciona la región de origen.</div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="regionDestino"
                    v-model="form.regionDestino"
                    required
                  >
                    <option value="" disabled>Selecciona región de destino</option>
                    <option v-for="r in regionesChile" :key="'d-' + r.codigo" :value="r.nombre">
                      {{ r.nombre }}
                    </option>
                  </select>
                  <label for="regionDestino">Ciudad / Región de destino</label>
                  <div class="invalid-feedback">Selecciona la región de destino.</div>
                </div>
              </div>

              <!-- Cantidad y frecuencia -->
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="number"
                    class="form-control"
                    id="enviosMensuales"
                    placeholder="Cantidad de envíos mensuales"
                    v-model.number="form.enviosMensuales"
                    min="1"
                    required
                  />
                  <label for="enviosMensuales">Cantidad de envíos mensuales</label>
                  <div class="invalid-feedback">Ingresa la cantidad de envíos (mínimo 1).</div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <select class="form-select" id="frecuencia" v-model="form.frecuencia" required>
                    <option value="" disabled>Selecciona la frecuencia</option>
                    <option v-for="f in frecuencias" :key="f" :value="f">{{ f }}</option>
                  </select>
                  <label for="frecuencia">Frecuencia del servicio</label>
                  <div class="invalid-feedback">Selecciona una frecuencia.</div>
                </div>
              </div>

              <!-- Tipo de carga -->
              <div class="col-12">
                <div class="form-floating">
                  <select class="form-select" id="tipoCarga" v-model="form.tipoCarga" required>
                    <option value="" disabled>Selecciona el tipo de carga</option>
                    <option v-for="t in tiposDeCarga" :key="t" :value="t">{{ t }}</option>
                  </select>
                  <label for="tipoCarga">Tipo de carga</label>
                  <div class="invalid-feedback">Selecciona el tipo de carga.</div>
                </div>
              </div>

              <!-- Volumen/Peso -->
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="volumenPeso"
                    placeholder="Volumen o peso estimado"
                    v-model="form.volumenPeso"
                  />
                  <label for="volumenPeso">Volumen o peso estimado (opcional)</label>
                </div>
              </div>

              <!-- Mensaje -->
              <div class="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control comments"
                    id="mensaje"
                    placeholder="Mensaje / Detalles"
                    rows="5"
                    v-model="form.mensaje"
                  ></textarea>
                  <label for="mensaje">Mensaje / Detalles (opcional)</label>
                </div>
              </div>
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

const regionesChile = [
  { codigo: 'XV', nombre: 'Arica y Parinacota' },
  { codigo: 'I', nombre: 'Tarapacá' },
  { codigo: 'II', nombre: 'Antofagasta' },
  { codigo: 'III', nombre: 'Atacama' },
  { codigo: 'IV', nombre: 'Coquimbo' },
  { codigo: 'V', nombre: 'Valparaíso' },
  { codigo: 'RM', nombre: 'Metropolitana de Santiago' },
  { codigo: 'VI', nombre: "Libertador General Bernardo O'Higgins" },
  { codigo: 'VII', nombre: 'Maule' },
  { codigo: 'XVI', nombre: 'Ñuble' },
  { codigo: 'VIII', nombre: 'Biobío' },
  { codigo: 'IX', nombre: 'La Araucanía' },
  { codigo: 'XIV', nombre: 'Los Ríos' },
  { codigo: 'X', nombre: 'Los Lagos' },
  { codigo: 'XI', nombre: 'Aysén del General Carlos Ibáñez del Campo' },
  { codigo: 'XII', nombre: 'Magallanes y de la Antártica Chilena' },
]

const frecuencias = ['Diaria', 'Semanal', 'Quincenal', 'Mensual', 'A demanda']
const tiposDeCarga = ['Paquetería', 'Pallets', 'Documentos', 'Carga especial', 'Otro']

const form = ref({
  nombre: '',
  apellido: '',
  empresa: '',
  email: '',
  telefono: '',
  regionOrigen: '',
  regionDestino: '',
  enviosMensuales: null,
  frecuencia: '',
  tipoCarga: '',
  volumenPeso: '',
  mensaje: '',
})

const wasValidated = ref(false)
const isSubmitting = ref(false)
const alertMessage = ref('')
const alertType = ref('') // 'alert-success' | 'alert-danger'

const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v)
const isValidPhone = (v) => /^[0-9+()\-.\s]{6,}$/.test(v || '')

const submitForm = () => {
  wasValidated.value = true
  const f = form.value

  const allRequiredOk =
    f.nombre &&
    f.apellido &&
    f.empresa &&
    isValidEmail(f.email) &&
    isValidPhone(f.telefono) &&
    f.regionOrigen &&
    f.regionDestino &&
    Number(f.enviosMensuales) >= 1 &&
    f.frecuencia &&
    f.tipoCarga

  if (!allRequiredOk) {
    alertMessage.value = 'Por favor completá todos los campos obligatorios correctamente.'
    alertType.value = 'alert-danger'
    return
  }

  isSubmitting.value = true

  const templateParams = {
    nombre: f.nombre,
    apellido: f.apellido,
    empresa: f.empresa,
    email: f.email,
    telefono: f.telefono,
    region_origen: f.regionOrigen,
    region_destino: f.regionDestino,
    envios_mensuales: String(f.enviosMensuales),
    frecuencia: f.frecuencia,
    tipo_carga: f.tipoCarga,
    volumen_peso: f.volumenPeso || '—',
    mensaje: f.mensaje || '—',
  }

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_B2B_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_B2B_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_B2B_PUBLIC_KEY,
    )
    .then(() => {
      alertMessage.value = 'Mensaje enviado con éxito.'
      alertType.value = 'alert-success'
      form.value = {
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: '',
        regionOrigen: '',
        regionDestino: '',
        enviosMensuales: null,
        frecuencia: '',
        tipoCarga: '',
        volumenPeso: '',
        mensaje: '',
      }
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

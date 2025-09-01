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
          <form action="submit">
            <div class="form-floating mb-3">
              <div class="form-floating">
                <input type="text" class="form-control" id="name" placeholder="Nombre" />
                <label for="name">Nombre</label>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="nombre@ejemplo.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control comments"
                placeholder="Dejanos tu comentario aquí"
                id="comment"
                rows="5"
                cols="5"
              ></textarea>
              <label for="floatingTextarea">Dejanos tu comentario aquí</label>
            </div>
            <button class="btn btn-primary mt-3">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.image-text-img {
  border-radius: 25px;
}
.comments {
  height: 150px !important;
}
</style>

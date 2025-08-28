<template>
  <nav class="navbar navbar-expand-xl bg-white shadow-sm">
    <div class="container-fluid">
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown d-xl-block d-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <a href="#" class="btn btn-primary d-xl-inline-flex d-none me-2"
          >Quiero enviar con Kargoo</a
        >
        <a href="#" class="btn btn-outline-primary d-xl-inline-flex d-none"
          >Quiero ser repartidor</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
defineOptions({ name: 'NavBar' })
</script>

<style lang="css" scoped>
.logo {
  width: 120px;
  height: auto;
}
</style>

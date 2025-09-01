<template>
  <a
    href="https://wa.me/5491123456789"
    target="_blank"
    class="whatsapp-float"
    aria-label="WhatsApp"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      width="35"
    />
  </a>
</template>

<script setup></script>

<style lang="css" scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
</style>

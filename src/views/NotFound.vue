<template>
  <div class="py-5 text-start">
    <h1 class="display-5 fw-bold">No Existe</h1>
    <p class="col-md-8 fs-4">La pagina que usted ha ingresado no existe.</p>
    <router-link class="btn btn-primary btn-lg" to="/">Volver a Inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

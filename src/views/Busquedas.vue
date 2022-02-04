<template>
  <div>
    <h1>Busqueda de Juegos</h1>

    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formFiltroArial">Filtro</span>
        <input
          type="text"
          class="form-control"
          placeholder="ingrese filtro"
          v-model="filtro"
          aria-describedby="formFiltroArial"
        />
      </div>
    </section>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formCantJuegosRegis"
          >Cantidad de Juegos Registrados</span
        >
        <input
          type="text"
          class="form-control"
          v-model="getJuegosRegistrados"
          aria-describedby="formCantJuegosRegis"
          disabled
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formStockTotal">Stock total de Juegos</span>
        <input
          type="text"
          class="form-control"
          v-model="getStockTotal"
          aria-describedby="formStockTotal"
          disabled
        />
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Busquedas",
  data() {
    return {
      filtro: "",
    };
  },
  computed: {
    ...mapGetters(["getJuegosRegistrados", "getStockTotal"]),
  },
};
</script>

<style></style>

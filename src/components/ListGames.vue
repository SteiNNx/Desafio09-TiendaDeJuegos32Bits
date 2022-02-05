<template>
  <div class="table-responsive">
    <table v-if="juegos.length > 0" class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock Disponible</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in juegos" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>{{ juego.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListGames",
  props: {
    juegos: {
      type: [],
      default() {
        return [];
      },
    },
  },
};
</script>

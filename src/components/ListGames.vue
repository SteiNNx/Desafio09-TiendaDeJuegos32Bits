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
        <tr
          v-for="(juego, index) in juegos"
          :key="index"
          :class="getBgColor(juego.color)"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
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
  methods: {
    getBgColor(color) {
      switch (color) {
        case "red":
          return "bg-danger";
        case "blue":
          return "bg-primary";
        case "green":
          return "bg-success";
        case "yellow":
          return "bg-warning";
        default:
          return "bg-info";
      }
    },
  },
};
</script>

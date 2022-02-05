import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from "@/views/Inicio";
import Busquedas from "@/views/Busquedas";
import Ventas from "@/views/Ventas";
//import Inicio from "@/views/Inicio";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Inicio",
    component: Inicio,
    alias: ["/home"],
  },
  {
    path: '/busquedas',
    name: "Busquedas",
    component: Busquedas,
    alias: ["/buscar"],
  },
  {
    path: '/ventas',
    name: "Ventas",
    component: Ventas,
    alias: ["/vender"],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

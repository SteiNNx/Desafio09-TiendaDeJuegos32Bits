import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from "@/views/Inicio";
import Busquedas from "@/views/Busquedas";
import NotFound from "@/views/NotFound";
import Total from "@/views/Total";
import Ventas from "@/views/Ventas";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Inicio",
    component: Inicio,
    alias: ["/home"],
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound,
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
  {
    path: '/total',
    name: "Total",
    component: Total,
    alias: ["/totales"],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

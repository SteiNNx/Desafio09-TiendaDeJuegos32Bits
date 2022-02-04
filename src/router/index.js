import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from "@/views/Inicio";
import Busquedas from "@/views/Busquedas";
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

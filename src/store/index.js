import Vue from 'vue'
import Vuex from 'vuex'

import juegos from '@/assets/juegos';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos,
    filtro: '',
  },
  mutations: {
    SET_FILTRO(state, payload) {
      state.filtro = payload;
    }
  },
  actions: {
  },
  getters: {
    getJuegosRegistrados: ({ juegos }) => {
      return juegos.length;
    },
    getStockTotal: ({ juegos }) => {
      return juegos.reduce(((previusValue, currentValue) => previusValue + currentValue.stock), 0);
    },
    getJuegosByFilter: ({ juegos, filtro }) => {
      return juegos.filter((juego) => {
        for (const word of filtro) {
          if (juego.codigo.indexOf(word) === -1) {
            return false;
          }
        }
        return true;
      });
    },
    getCountJuegosStock: ({ juegos }) => {

    }
  },
})

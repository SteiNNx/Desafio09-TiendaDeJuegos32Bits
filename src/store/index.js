import Vue from 'vue'
import Vuex from 'vuex'

import juegos from '@/assets/juegos';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos,
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getJuegosRegistrados: (state) => {
      return state.juegos.length;
    },
    getStockTotal: (state) => {
      return state.juegos.reduce(((previusValue, currentValue) => previusValue + currentValue.stock), 0);
    }
  },
})

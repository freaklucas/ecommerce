import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    products: (state) => {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        commit("SET_PRODUCTS", response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

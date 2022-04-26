import Vue from "vue";
import Vuex from "vuex";

import productsModule from "./modules/products.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsState: productsModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    productsModule,
  },
  getters: {
    getProductsState: function (state) {
      return state.productsState.productsList;
    },
  },
});

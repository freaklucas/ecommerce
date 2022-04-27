import Vue from "vue";
import Vuex from "vuex";

import productsModule from "./modules/products.module";
import calculatorModule from "./modules/calculator.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsState: productsModule.state,
    calculatorState: calculatorModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    productsModule,
    calculatorModule,
  },
  getters: {
    getProductsState: function (state) {
      return state.productsState.productsList;
    },
    getCalculatorState: function (state) {
      return state.calculatorState.counter;
    },
  },
});

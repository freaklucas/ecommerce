import axios from "axios";

export default {
  namespaced: true,
  state: {
    productsList: {
      products: [],
      errorMessage: null,
    },
  },
  mutations: {
    GET_PRODUCTS_SUCCESS: function (state, payload) {
      state.productsList.products = payload.products;
    },
    GET_PRODUCTS_ERROR: function (state, payload) {
      state.productsList.errorMessage = payload.errorMessage;
    },
  },
  actions: {
    getProducts: async function ({ commit }) {
      try {
        let dataUrl = `https://fakestoreapi.com/products`;
        let response = await axios.get(dataUrl);

        commit("GET_PRODUCTS_SUCCESS", { products: response.data });

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

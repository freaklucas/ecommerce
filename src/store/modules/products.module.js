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
        /* 
        const response = await axios.get("https://fakestoreapi.com/products", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
        });
        */
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

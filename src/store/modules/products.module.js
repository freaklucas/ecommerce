import axios from "axios";

export default {
  namespaced: true,
  state: {
    filteredProducts: [],
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
    SET_PRODUCTS(state, products) {
      state.products = products;
      state.filteredProducts = products;
    },
    filterProducts: function (state, searchTerm) {
      return (state.filteredProducts = state.products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      }));
    },
  },
  actions: {
    getProducts: async function ({ commit }) {
      try {
        let dataUrl = `https://fakestoreapi.com/products`;
        let response = await axios.get(dataUrl);

        commit("GET_PRODUCTS_SUCCESS", { products: response.data });
        commit("SET_PRODUCTS", response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    filterProducts({ commit }, searchTerm) {
      commit("filterProducts", searchTerm);
    },
  },
};

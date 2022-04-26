export default {
  namespaced: true,

  state: {
    counter: {
      count: 1,
    },
  },
  mutations: {
    INCR_COUNTER: function (state) {
      state.counter.count = state.counter.count + 1;
    },
    DECR_COUNTER: function (state) {
      state.counter.count = state.counter.count - 1;
    },
    INCREMENT_VALUE: function (state, payload) {
      state.counter.count = state.counter.count + payload.value;
    },
  },
  actions: {
    incrementCounter: function ({ commit }) {
      return commit("INCR_COUNTER");
    },
    decrementCounter: function ({ commit }) {
      return commit("DECR_COUNTER");
    },
    incrementValue: function ({ commit }, payload) {
      return commit("INCREMENT_VALUE", payload);
    },
  },
};

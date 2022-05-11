export default {
  namespaced: true,

  state: {
    counter: {
      count: 0,
      heart: 0,
      name: String,
    },
  },
  mutations: {
    INCR_COUNTER: function (state) {
      state.counter.count = state.counter.count + 1;
    },
    INCREMENT_HEART: function (state, payload) {
      state.counter.heart = state.counter.heart + payload.value;
    },
    DECR_COUNTER: function (state, payload) {
      state.counter.count = state.counter.count - payload.value;
    },
    INCREMENT_VALUE: function (state, payload) {
      state.counter.count = state.counter.count + payload.value;
    },
    NAME_VALUE: function (state, payload) {
      state.counter.count = state.counter.name + payload.name;
    },
  },
  actions: {
    incrementCounter: function ({ commit }) {
      return commit("INCR_COUNTER");
    },
    decrementCounter: function ({ commit }, payload) {
      return commit("DECR_COUNTER", payload);
    },
    incrementValue: function ({ commit }, payload) {
      return commit("INCREMENT_VALUE", payload);
    },
    incrementHeart: function ({ commit }, payload) {
      return commit("INCREMENT_HEART", payload);
    },
    name: function ({ commit }, payload) {
      return commit("NAME_VALUE", payload);
    },
  },
};

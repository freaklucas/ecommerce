<template>
  <b-container>
    <b-row>
      <h1>Sneakers</h1>

      <div class="about">
        <div v-for="cart in productsState.products" :key="cart.id">
          {{ cart }}
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created: function () {
    this.$store.dispatch("productsModule/getProducts");
  },

  computed: mapGetters({
    productsState: "getProductsState",
  }),
};
</script>
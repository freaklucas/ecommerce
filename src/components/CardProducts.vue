<template>
  <b-container class="bv-example-row bv-example-row-flex-cols container">
    <b-row align="center">
      <h1>Sneakers, Select your favorite product ;)</h1>
      <div class="shopping-cart" v-if="calculatorState.count > 1">
        <h1 class="section">🛒 Cart</h1>
        <h2>$ {{ calculatorState.count }} | {{ productsState.title }}</h2>
        <!-- <h2>$ {{ calculatorState.title }}</h2> -->
        <br />
        <!-- <div
          class="product-selected"
          v-for="selected in productsState.products"
          :key="selected.id"
        >
          <h2>Product selected:</h2>
          <ul>
            <li>
              {{ selected.title }}
            </li>
          </ul>
        </div> -->
      </div>
      <b-col cols="12">
        <div class="card-images">
          <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 28rem"
            class="mb-2 card"
            v-for="image in productsState.products"
            :key="image.id"
          >
            <img
              :src="image.image"
              alt=""
              style="max-width: 20rem"
              class="m-2"
            />
            <b-card-text>
              {{ image.title }}
            </b-card-text>

            <p href="#" variant="primary">Price: {{ image.price }}</p>

            <b-button
              @click="clickIncrementValue(image.price)"
              class="buy-button"
              >Buy
            </b-button>
            <b-button @click="clickDecrement(image.price)" class="button-remove"
              >Remove
            </b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created: function () {
    this.$store.dispatch("productsModule/getProducts");
  },
  methods: {
    clickIncrement() {
      this.$stire.dispatch("calculatorModule/incrementCounter");
    },
    clickDecrement(value) {
      this.$store.dispatch("calculatorModule/decrementCounter", {
        value: value,
      });
    },
    clickIncrementValue(value) {
      this.$store.dispatch("calculatorModule/incrementValue", {
        value: value,
      });
    },
  },
  computed: mapGetters({
    productsState: "getProductsState",
    calculatorState: "getCalculatorState",
  }),
};
</script>


<style scoped>
.card {
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  margin: 8px;

  font-family: "Fira Code", monospace;
  font-family: "Gentium Book Basic", serif;
  font-family: "Poppins", sans-serif;

  font-size: 1.3rem;
}

.card button {
  margin-top: 0.5rem;
}

.card-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto;
}

.buy-button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 32px;
  border: 0;
  color: #000021;
  background: #1de9b6;
  line-height: 1.15;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 15px;

  text-decoration: none;
  margin-bottom: 4px;
}
.buy-button:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #47a38c;
}

.button-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 15px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 32px;
  border: 0;
  color: #000021;
  background: #ff6666;
  line-height: 1.15;
  font-size: 16px;

  text-decoration: none;
  margin-bottom: 4px;
}

.button-remove:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #ff6666;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card p {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4px;
}

img {
  max-width: 20px;

  min-width: 20px;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Fira Code", monospace;
  font-family: "Gentium Book Basic", serif;
  font-family: "Poppins", sans-serif;

  font-size: 1.5rem;
}

.shopping-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  margin: 8px;

  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
}

.section {
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Fira Code", monospace;
  font-family: "Gentium Book Basic", serif;
  font-family: "Poppins", sans-serif;

  font-size: 1.5rem;
}
</style>
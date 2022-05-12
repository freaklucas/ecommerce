<template>
  <b-container class="bv-example-row bv-example-row-flex-cols container">
    <b-row align="center">
      <h1 class="title">Sneakers, Select your favorite product ;)</h1>
      <div class="shopping-cart" v-if="calculatorState.count > 1">
        <h1 class="section">🛒 Cart</h1>
        <h2>
          $ {{ calculatorState.count }} -
          {{ productsState.products.name }}
        </h2>
        <br />
      </div>

      <div v-else>
        <h1 class="shopping-cart-empty">🛒 Cart empty!!</h1>
      </div>

      <div class="shopping-cart top">
        <h1 class="title">Search</h1>
        <input
          type="text"
          placeholder="search your product..."
          v-model="search"
        />
        <div class="container" v-for="r of filter" :key="r.id">
          <h2>{{ r.title }}</h2>
        </div>
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

            <div class="buttons">
              <button
                @click="clickIncrementValue(image.price)"
                class="buy-button"
              >
                Buy
              </button>
              <button
                @click="clickDecrement(image.price)"
                class="button-remove"
              >
                Remove
              </button>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      clicked: false,
      search: [],
    };
  },
  created: function () {
    this.$store.dispatch("productsModule/getProducts");
  },
  methods: {
    clickIncrement() {
      this.$store.dispatch("calculatorModule/incrementCounter");
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
    clickIncrementHeart(value) {
      this.$store.dispatch("calculatorModule/incrementHeart", {
        value: value,
      });
    },
    changeColor() {},
  },
  computed: mapGetters({
    productsState: "getProductsState",
    calculatorState: "getCalculatorState",
  }),
  filter() {
    if (!this.search) {
      console.log(this.productsState.products);
      return this.productsState.products;
    } else {
      return this.state.productsList.products.filter((product) => {
        console.log(
          product.title.toLowerCase().includes(this.search.toLowerCase())
        );

        product.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
};
</script>


<style scoped>
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.top {
  margin-top: 2rem;
}
.white {
  background-color: white;
  width: 200px;
  height: 200px;
}
.red {
  width: 200px;
  height: 200px;
  background-color: red;
}

.card {
  background-color: #fff;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: row;

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

.card-images button {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
}

.heart-button:click {
  display: flex;
  flex-direction: row;
  justify-content: center;

  color: red;
  background-color: red;
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
  flex-direction: row;
  margin-right: 14px;
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
  margin-left: 14px;
  flex-direction: row;
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
.shopping-cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 40%;

  margin: 18px;

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

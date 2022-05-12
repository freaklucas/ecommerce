<template>
  <div class="container">
    <div class="shopping-cart top">
      <h1 class="title">Search</h1>
      <input
        type="text"
        placeholder="search your product..."
        v-model="search"
      />
      <div class="container" v-for="r of filterSearch" :key="r.id">
        <h2>{{ r.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filterSearch() {
      if (!this.search) {
        return this.productsState.products;
      } else {
        return this.state.productsList.products.filter((product) => {
          product.title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
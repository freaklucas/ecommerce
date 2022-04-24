<template>
  <div class="home">
    <CardProducts msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardProducts from "@/components/CardProducts.vue";

export default {
  name: "Home",
  components: {
    CardProducts,
  },
};
</script>

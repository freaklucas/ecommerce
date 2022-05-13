<!-- <template>
  <div></div>
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
      if (this.search) {
        return this.$store.state.products.filter((p) => {
          return p.title.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.$store.state.products;
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
</style> -->
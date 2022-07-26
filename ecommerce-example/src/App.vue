<template>
  <NavBar :numberOfItems="numberOfItems"></NavBar>
  <router-view
    :shoppingCart="shoppingCart"
    :products="products"
    @addToCart="addToCart"
    :userInfo="userInfo"
  >
  </router-view>
</template>

<script>
import products from "./pages/products";
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      shoppingCartIds: [],
      products,
      userInfo: { name: "", age: 0, address: "" },
    };
  },
  computed: {
    shoppingCart() {
      return this.shoppingCartIds.map((id) => {
        return this.products.find((p) => p.id === id);
      });
    },
    numberOfItems() {
      return this.shoppingCartIds.length;
    },
  },
  methods: {
    addToCart(id) {
      this.shoppingCartIds.push(id);
      console.log(this.shoppingCartIds);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

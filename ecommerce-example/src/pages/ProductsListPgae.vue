<template>
  <h2>Available Items</h2>
  <div v-for="product in products" :key="product.id">
    <router-link :to="`/products/${product.id}`">
      <h3>{{ product.name }}</h3>
    </router-link>
    <p>{{ product.price }}</p>
    <button @click="addToCart(product.id)">add to cart</button>
  </div>
</template>

<script>
/* import products from "./products"; */

export default {
  name: "ProductListPage",
  props: ["products"],
  emits: ["addToCart"],
  /* data() {
    return {
      products,
    };
  }, */
  methods: {
    addToCart(id) {
      this.$emit("addToCart", id);
    },
  },
};
</script>

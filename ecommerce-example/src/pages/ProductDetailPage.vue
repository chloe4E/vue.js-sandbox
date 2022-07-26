<template>
  <h1>ProductDetailPage</h1>
  <div v-if="productFound">
    <h1>{{ product.name }}</h1>
    <h3>{{ product.price }}</h3>
    <p>{{ product.description }}</p>
    <button @click="addToCart">add to cart</button>
  </div>
  <div v-if="!productFound">oups no product found</div>
</template>

<script>
/* import products from "./products"; */
export default {
  name: "ProductDetailPage",
  props: ["products"],
  computed: {
    product() {
      return this.products.find((prod) => prod.id === this.$route.params.id);
    },
    productFound() {
      return !!this.product;
    },
  },
  emits: ["addToCart"],
  methods: {
    addToCart() {
      this.$emit("addToCart", this.$route.params.id);
    },
  },
};
</script>

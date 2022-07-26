<template>
  <h1>ProductDetailPage</h1>
  <div v-if="productFound">
    <h1>{{ product.name }}</h1>
    <h3>{{ product.price }}</h3>
    <p>{{ product.description }}</p>
    <button>add to cart</button>
  </div>
  <div v-if="!productFound">oups no product found</div>
</template>

<script>
import products from "./products";
export default {
  name: "ProductDetailPage",
  computed: {
    product() {
      return products.find((prod) => prod.id === this.$route.params.id);
    },
    productFound() {
      return !!this.product;
    },
  },
};
</script>

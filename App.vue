<template>
  <h1>Welcome to{{ siteName }}</h1>
</template>
<script>
export default {
  name: "MyComponent",
  data() {
    return { siteName: "single file component in vue.js" };
  },
};
</script>
<style>
h1 {
  color: lightpink;
}
</style>

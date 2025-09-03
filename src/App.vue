<script setup>
import AddCart from './components/AddCart.vue'
import ProductShow from './components/ProductShow.vue'
import ProductCart from './components/ProductCart.vue'
</script>

<template>
  <div class="app-container">
    <ProductCart />
    <ProductShow />
    <AddCart />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>

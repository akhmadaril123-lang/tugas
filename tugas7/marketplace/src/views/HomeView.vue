<script setup lang="ts">
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../components/ProductCard.vue'

const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2>Katalog Produk</h2>
    <div class="product-grid">
      <ProductCard
        v-for="item in cartStore.products"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 16px;
}
</style>
<!-- src/components/ProductCard.vue -->
<script setup lang="ts">
import { useCartStore, type Product } from '../stores/cartStore'

defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const handleBuy = (product: Product) => {
  cartStore.addToCart(product)
}
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p class="desc">{{ product.description }}</p>
    <p class="price">Rp {{ (product.price ?? 0).toLocaleString('id-ID') }}</p>
    <button type="button" @click="handleBuy(product)">+ Beli Produk</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price {
  font-weight: bold;
  color: #2c3e50;
  margin: 12px 0;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background-color: #33a06f;
}
</style>
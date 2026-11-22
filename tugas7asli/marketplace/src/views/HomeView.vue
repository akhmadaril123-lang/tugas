<script setup>
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../components/ProductCard.vue'

const cartStore = useCartStore()
</script>

<template>
  <section class="page">
    <header class="page-header">
      <h1>Katalog Produk</h1>
      <p>Pilih produk lalu klik <strong>Beli</strong> untuk menambahkannya ke keranjang.</p>
    </header>

    <div class="grid">
      <ProductCard
        v-for="item in cartStore.products"
        :key="item.id"
        :product="item"
      />
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px;
}

.page-header {
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
</style>
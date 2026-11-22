<script setup lang="ts">
import { useCartStore } from './stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="container">
    <nav class="navbar">
      <RouterLink to="/">Beranda Katalog</RouterLink> |
      <RouterLink to="/cart">
        Keranjang ({{ cartStore.totalItems }})
      </RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  font-family: sans-serif;
  padding: 20px;
}
.navbar {
  padding-bottom: 16px;
  border-bottom: 2px solid #eee;
  margin-bottom: 24px;
  font-size: 18px;
}
a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  margin: 0 8px;
}
a.router-link-active {
  color: #42b883;
}
</style>
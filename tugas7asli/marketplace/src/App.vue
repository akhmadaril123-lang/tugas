<script setup>
import { useCartStore } from './stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <RouterLink to="/" class="brand">Toko Praktikum</RouterLink>
      <div class="nav-links">
        <RouterLink to="/">Katalog</RouterLink>
        <RouterLink to="/cart">
          Keranjang ({{ cartStore.totalItems }})
        </RouterLink>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  background: #111827;
  color: #ffffff;
  padding: 14px 16px;
}

.nav-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  font-size: 18px;
}

.nav-links {
  display: flex;
  gap: 16px;
}

.nav-links a {
  color: #d1d5db;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a.router-link-active {
  color: #60a5fa;
}
</style>
<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value)
}
</script>

<template>
  <section class="page">
    <div class="top-row">
      <h1>Keranjang Belanja</h1>
      <RouterLink to="/" class="back-link">← Kembali ke Katalog</RouterLink>
    </div>

    <div v-if="cartStore.cartItems.length === 0" class="empty">
      <p>Keranjang masih kosong.</p>
      <RouterLink to="/" class="btn-primary">Mulai Belanja</RouterLink>
    </div>

    <div v-else>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Harga Satuan</th>
            <th>Jumlah</th>
            <th>Subtotal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ formatRupiah(item.price) }}</td>
            <td class="qty-box">
              <button type="button" @click="cartStore.updateQty(item.id, -1)">-</button>
              <span>{{ item.qty }}</span>
              <button type="button" @click="cartStore.updateQty(item.id, 1)">+</button>
            </td>
            <td>{{ formatRupiah(item.price * item.qty) }}</td>
            <td>
              <button
                type="button"
                class="btn-remove"
                @click="cartStore.removeFromCart(item.id)"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="summary">
        <div>
          <p>Total Item: <strong>{{ cartStore.totalItems }}</strong></p>
          <p class="total-price">
            Total Bayar: <strong>{{ formatRupiah(cartStore.totalPrice) }}</strong>
          </p>
        </div>
        <button type="button" class="btn-clear" @click="cartStore.clearCart()">
          Kosongkan Keranjang
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-link,
.btn-primary {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.empty {
  text-align: center;
  padding: 40px 16px;
  border: 1px dashed #cbd5e1;
  border-radius: 10px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.cart-table th,
.cart-table td {
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 8px;
  text-align: left;
}

.qty-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-box button {
  width: 28px;
  height: 28px;
  cursor: pointer;
}

.btn-remove {
  background: #ef4444;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
}

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f9fafb;
  border-radius: 10px;
}

.total-price {
  font-size: 18px;
  margin-top: 4px;
}

.btn-clear {
  background: #111827;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
}
</style>
<script setup lang="ts">
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2>Keranjang Belanja</h2>

    <div v-if="cartStore.cartItems.length === 0">
      <p>Keranjang masih kosong. Silakan pilih produk di beranda.</p>
    </div>

    <div v-else>
      <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: left;">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Subtotal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>Rp {{ item.price.toLocaleString('id-ID') }}</td>
            <td>{{ item.quantity }}</td>
            <td>Rp {{ (item.price * item.quantity).toLocaleString('id-ID') }}</td>
            <td>
              <button @click="cartStore.removeFromCart(item.id)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Total Bayar: Rp {{ cartStore.totalPrice.toLocaleString('id-ID') }}</h3>
    </div>
  </div>
</template>
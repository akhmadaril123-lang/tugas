<script setup>
import { useCartStore } from '../stores/cartStore'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value)
}

function handleBuy() {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <article class="card">
    <span class="badge">{{ product.category }}</span>
    <h3>{{ product.name }}</h3>
    <p class="desc">{{ product.description }}</p>
    <div class="footer">
      <strong class="price">{{ formatRupiah(product.price) }}</strong>
      <button type="button" class="btn-buy" @click="handleBuy">
        Beli
      </button>
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  background: #ffffff;
}

.badge {
  align-self: flex-start;
  font-size: 12px;
  background: #eff6ff;
  color: #1d4ed8;
  padding: 4px 8px;
  border-radius: 6px;
}

.desc {
  color: #4b5563;
  font-size: 14px;
  margin: 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
}

.price {
  font-size: 16px;
  color: #111827;
}

.btn-buy {
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  font-weight: 600;
}

.btn-buy:hover {
  background: #1d4ed8;
}
</style>
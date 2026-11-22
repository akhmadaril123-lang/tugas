// src/stores/cartStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Product {
  id: number
  name: string
  price: number
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const products = ref<Product[]>([
    { id: 1, name: 'Laptop Dell Latitude 5490', price: 4500000, description: 'Core i5 Gen 8, RAM 8GB, SSD 256GB' },
    { id: 2, name: 'Mechanical Keyboard', price: 350000, description: 'Blue Switch, RGB Backlight, Compact' },
    { id: 3, name: 'Wireless Mouse Ergonomic', price: 150000, description: '2.4GHz Wireless, Silent Click' }
  ])

  const cartItems = ref<CartItem[]>([])

  function addToCart(product: Product) {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(productId: number) {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  return {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice
  }
})
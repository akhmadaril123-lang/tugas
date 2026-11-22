import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Minimal 3 produk berbeda
  const products = ref([
    {
      id: 1,
      name: 'Mechanical Keyboard 75%',
      price: 650000,
      category: 'Peripherals',
      description: 'Hot-swappable switch dengan keycap PBT dan koneksi dual-mode.'
    },
    {
      id: 2,
      name: 'Wireless Ergonomic Mouse',
      price: 320000,
      category: 'Peripherals',
      description: 'Desain nyaman untuk sesi ngoding atau kerja panjang tanpa cepat lelah.'
    },
    {
      id: 3,
      name: 'USB-C Hub 7-in-1',
      price: 410000,
      category: 'Accessories',
      description: 'Mendukung HDMI 4K, USB 3.0, SD Card reader, dan Power Delivery.'
    }
  ])

  const cartItems = ref([])

  function addToCart(product) {
    const existingItem = cartItems.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.qty += 1
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
      })
    }
  }

  function removeFromCart(productId) {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
  }

  function updateQty(productId, amount) {
    const target = cartItems.value.find((item) => item.id === productId)
    if (!target) return

    const nextQty = target.qty + amount
    if (nextQty <= 0) {
      removeFromCart(productId)
    } else {
      target.qty = nextQty
    }
  }

  function clearCart() {
    cartItems.value = []
  }

  const totalItems = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.qty, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  })

  return {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    totalItems,
    totalPrice
  }
})
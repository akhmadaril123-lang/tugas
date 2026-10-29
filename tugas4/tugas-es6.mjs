// tugas-es6.mjs

// 1. Data array of objects berisi minimal 6 transaksi belanja
const daftarTransaksi = [
  { id: 1, barang: 'Laptop ASUS', harga: 7500000, qty: 1, kategori: 'Elektronik' },
  { id: 2, barang: 'Mouse Wireless', harga: 150000, qty: 2, kategori: 'Elektronik' },
  { id: 3, barang: 'Kemeja Flanel', harga: 175000, qty: 2, kategori: 'Pakaian' },
  { id: 4, barang: 'Celana Chino', harga: 220000, qty: 1, kategori: 'Pakaian' },
  { id: 5, barang: 'Kopi Arabika 250g', harga: 65000, qty: 3, kategori: 'Makanan' },
  { id: 6, barang: 'Roti Gandum', harga: 25000, qty: 2, kategori: 'Makanan' }
];

// Tentukan kategori yang ingin disaring
const targetKategori = 'Elektronik';

console.log(`=== DAFTAR TRANSAKSI KATEGORI: ${targetKategori} ===`);

// 2. filter() menggunakan arrow function & destructuring pada parameter
const transaksiDisaring = daftarTransaksi.filter(({ kategori }) => kategori === targetKategori);

// 3. map() menggunakan arrow function & destructuring untuk menghitung subtotal
const transaksiDenganSubtotal = transaksiDisaring.map(({ harga, qty, ...rest }) => ({
  ...rest,
  harga,
  qty,
  subtotal: harga * qty
}));

// Tampilkan rincian transaksi yang telah disaring dan diberi subtotal
transaksiDenganSubtotal.forEach(({ barang, harga, qty, subtotal }) => {
  console.log(`- Barang: ${barang} | Harga: Rp${harga} | Qty: ${qty} | Subtotal: Rp${subtotal}`);
});

// 4. reduce() menggunakan arrow function & destructuring untuk total keseluruhan
const totalKeseluruhan = transaksiDenganSubtotal.reduce((akumulator, { subtotal }) => akumulator + subtotal, 0);

console.log('--------------------------------------------------');
console.log(`Total Keseluruhan Belanja (${targetKategori}): Rp${totalKeseluruhan}`);

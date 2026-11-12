<script setup>
import { ref,computed } from 'vue';
const judul = ref('')

// state from input
let judulBaru = ref ('')
let kategoriBaru = ref('Fiksi')
let statusBacabaru = ref ('False')

// state daftar buku
const daftarBuku = ref([
    { id:1, judul: 'belajar vue.js', kategori: 'teknologi', selesai: true },
    {id:2, judul: 'bahasa inggris', kategori: 'pendidikan', selesai: false },
])

// fungsi untuk menambahkan buku baru
const tambahBUku = ()=>{
    if (!judulBaru.value.trim()) return
    daftarBuku.value.push({
        id: Date.now(),
        judul: judulBaru.value,
        kategori: kategoriBaru.value,
        selesai: statusBacabaru.value

    })

    // reset 
    judulBaru.value = ''
    statusBacabaru.value = false
}

// untuk menghitung buku yang sudah dibaca
const totalSelesaiDibaca = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})


</script>


<template>

    <div class="Container">
        <h2>Catatan buku</h2>
        <!-- foem input -->
        <form @submit.prevent = "tambahBUku">
            <div>
                <label> judul buku :</label>
                <input v-model = "judulbaru" type ="text" placeholder="masukkan judul.."/>
            </div><div>
        <label>Kategori: </label>
        <select v-model="kategoriBaru">
          <option value="Fiksi">Fiksi</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Pendidikan">Pendidikan</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label>
          <input v-model="statusBacaBaru" type="checkbox" /> Sudah selesai dibaca
        </label>
      </div>

      <button type="submit">Tambah Buku</button>
    </form>

    <hr />

    <!-- Daftar Buku menggunakan v-for -->
    <h3>Daftar Buku</h3>
    <ul>
      <li v-for="buku in daftarBuku" :key="buku.id">
        <strong>{{ buku.judul }}</strong> ({{ buku.kategori }}) - 
        <span :style="{ color: buku.selesai ? 'green' : 'red' }">
          {{ buku.selesai ? 'Sudah Selesai' : 'Belum Selesai' }}
        </span>
      </li>
    </ul>

    <!-- Hasil Perhitungan Computed Property -->
    <p><strong>Total buku selesai dibaca:</strong> {{ totalSelesaiDibaca }} dari {{ daftarBuku.length }} buku</p>
  </div>
</template>
import { Hono } from 'hono'

const app = new Hono()

export interface BarangInventaris {
  id: number
  nama: string
  kategori: 'komputer' | 'proyektor' | 'switch' | 'router'
  jumlah: number
  kondisi: 'baik' | 'perlu_perbaikan' | 'rusak'
  lokasi: string
}

let inventaris: BarangInventaris[] = [
  {
    id: 1,
    nama: 'PC Lab Komputer Dell OptiPlex',
    kategori: 'komputer',
    jumlah: 30,
    kondisi: 'baik',
    lokasi: 'Lab Jaringan 1',
  },
  {
    id: 2,
    nama: 'Proyektor Epson EB-X41',
    kategori: 'proyektor',
    jumlah: 3,
    kondisi: 'baik',
    lokasi: 'Lab Jaringan 1',
  },
  {
    id: 3,
    nama: 'Cisco Catalyst 2960 Switch 24-Port',
    kategori: 'switch',
    jumlah: 4,
    kondisi: 'baik',
    lokasi: 'Rak Server Utama',
  },
  {
    id: 4,
    nama: 'MikroTik RouterBOARD RB4011',
    kategori: 'router',
    jumlah: 2,
    kondisi: 'perlu_perbaikan',
    lokasi: 'Rak Server Utama',
  },
]

let nextId = 5

// GET /api/inventaris -> Daftar semua barang (mendukung filter ?kategori=...)
app.get('/api/inventaris', (c) => {
  const kategori = c.req.query('kategori')

  if (kategori) {
    const hasil = inventaris.filter(
      (item) => item.kategori.toLowerCase() === kategori.toLowerCase()
    )
    return c.json({
      total: hasil.length,
      data: hasil,
    })
  }

  return c.json({
    total: inventaris.length,
    data: inventaris,
  })
})

// GET /api/inventaris/:id -> Detail satu barang berdasarkan ID
app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))

  if (Number.isNaN(id)) {
    return c.json({ message: 'ID harus berupa angka' }, 400)
  }

  const item = inventaris.find((barang) => barang.id === id)

  if (!item) {
    return c.json({ message: `Barang dengan ID ${id} tidak ditemukan` }, 404)
  }

  return c.json({ data: item })
})

// POST /api/inventaris -> Tambah barang baru
app.post('/api/inventaris', async (c) => {
  const body = await c.req.json().catch(() => null)

  if (!body || !body.nama || !body.kategori || body.jumlah === undefined) {
    return c.json(
      { message: 'Field nama, kategori, dan jumlah wajib diisi' },
      400
    )
  }

  const kategoriValid = ['komputer', 'proyektor', 'switch', 'router']
  if (!kategoriValid.includes(body.kategori)) {
    return c.json(
      {
        message: 'Kategori harus salah satu dari: komputer, proyektor, switch, router',
      },
      400
    )
  }

  const barangBaru: BarangInventaris = {
    id: nextId++,
    nama: String(body.nama),
    kategori: body.kategori,
    jumlah: Number(body.jumlah),
    kondisi: body.kondisi ?? 'baik',
    lokasi: body.lokasi ?? 'Gudang Lab',
  }

  inventaris.push(barangBaru)

  return c.json(
    {
      message: 'Barang inventaris berhasil ditambahkan',
      data: barangBaru,
    },
    201
  )
})

export default app
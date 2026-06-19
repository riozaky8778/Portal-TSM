// Daftar sistem internal kantor.
// Untuk menambah sistem baru, cukup tambahkan satu object baru di array bawah ini.
//
// Field:
// - name        : Nama sistem (wajib)
// - description : Deskripsi singkat, 1 kalimat (wajib)
// - url         : Link sistem (wajib). Isi "" jika belum live.
// - category    : Kategori/divisi sistem (wajib) - dipakai untuk filter
// - status      : "online" atau "soon" (wajib)

export const categories = [
  "Semua",
  "Operasional",
  "Inventaris",
  "Pelanggan",
  "Tools",
]

export const systems = [
  {
    name: "Log Perbaikan",
    description: "Pencatatan dan pelacakan riwayat perbaikan perangkat kantor.",
    url: "https://log-perbaikan-tsmk.vercel.app/",
    category: "Operasional",
    status: "online",
  },
]

# Portal Sistem TSM

Portal internal untuk mengakses semua sistem yang dibangun divisi IT.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Menambah sistem baru

Edit file `src/data/systems.js`. Tambahkan satu object baru ke dalam array `systems`:

```js
{
  name: "Nama Sistem",
  description: "Deskripsi singkat satu kalimat.",
  url: "https://link-sistem.vercel.app",
  category: "Operasional", // harus salah satu dari daftar di "categories"
  status: "online", // atau "soon" jika belum live
}
```

Jika ingin menambah kategori baru, tambahkan juga namanya ke array `categories` di file yang sama.

## Deploy ke Vercel

1. Push project ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com), pilih "Add New Project", lalu import repo tersebut.
3. Framework preset otomatis terdeteksi sebagai Vite — tidak perlu ubah setting apa pun.
4. Klik Deploy.

Setiap kali file `systems.js` diubah dan di-push ke GitHub, Vercel akan otomatis build ulang.

/* =====================================================================
 * LEVEL 2 — SEDANG  |  TUGAS 1  |  BERKAS: data.js
 * ---------------------------------------------------------------------
 * TUGAS BERKAS INI : Menyimpan DATA daftar ruangan (Array of Objects).
 *
 * CARA MENGERJAKAN :
 *   1. Kerjakan TODO 1.1 di bawah.
 *   2. Simpan, lalu jalankan:  npm run uji
 *   3. Target bagian "TUGAS 1 — data.js": Skor bagian 5/5.
 *
 * ATURAN :
 *   - Berkas ini HANYA berisi data. Tidak boleh ada kode DOM.
 *   - Setiap ruangan WAJIB punya 4 properti:
 *       id          -> kode unik (teks), contoh 'R01'
 *       namaRuangan -> nama ruangan (teks)
 *       kapasitas   -> jumlah orang maksimal (ANGKA, tanpa tanda kutip)
 *       fasilitas   -> daftar fasilitas (array berisi teks)
 * ===================================================================== */

export const daftarRuangan = [
  // CONTOH (sudah jadi):
  {
    id: 'R01',
    namaRuangan: 'Lab Komputer RPL',
    kapasitas: 36,
    fasilitas: ['36 Unit PC', 'Proyektor', 'AC'],
  },

  {
    id: 'R02',
    namaRuangan: 'Aula',
    kapasitas: 20,
    fasilitas: ['20 Unit TV', 'AC', 'MBG'],
  },

  {
    id: 'R03',
    namaRuangan: 'Ruang rapat',
    kapasitas: 1,
    fasilitas: ['1 Unit TV', 'AC', 'Meja'],
  },

  {
    id: 'R04',
    namaRuangan: 'Ruang kelas XI',
    kapasitas: 15,
    fasilitas: ['15 Unit Laptop', 'AC', 'TV'], // done
  },

  // TODO 1.1 : Tambahkan MINIMAL 3 ruangan lagi:
  //              - Aula
  //              - Ruang Rapat
  //              - Ruang Kelas (bebas: kelas X, XI, atau XII)
  //            Tentukan sendiri id, kapasitas, dan fasilitasnya.
  //   POIN PENTING :
  //     - id harus berbeda-beda (R02, R03, R04, ...).
  //     - Antar-objek dipisahkan koma.
  //     - fasilitas ditulis dalam kurung siku: ['AC', 'Proyektor']
];

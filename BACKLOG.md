##  Fadagi Farm API - To-Do List

Berikut adalah daftar tugas pengembangan API berdasarkan spesifikasi OpenAPI v2.0.0.

### ✅ **Phase 1: Authentication & Core Setup (Selesai)**

-   [x] **Authentication: `POST /auth/register`** - Registrasi Investor Baru
    -   [x] Implementasi endpoint.
    -   [x] Unit Test: Registrasi sukses.
    -   [x] Unit Test: Registrasi dengan referrer code.
    -   [x] Unit Test: Gagal jika email sudah ada.
    -   [x] Unit Test: Gagal jika validasi input salah.
-   [x] **Authentication: `POST /auth/login`** - Login Pengguna
    -   [x] Implementasi endpoint.
    -   [x] Unit Test: Login sukses.
    -   [x] Unit Test: Gagal jika kredensial salah.
-   [x] **Setup Proyek:** Inisialisasi Nuxt, Prisma, Jest, Supertest.

### ⏳ **Phase 2: Core Features (Investor)**

Ini adalah fitur-fitur utama yang akan digunakan oleh investor.

-   [ ] **Authentication: `GET /auth/me`**
    -   [ ] Buat middleware otentikasi untuk memeriksa Bearer Token.
    -   [ ] Implementasi endpoint untuk mengambil data user yang sedang login.
    -   [ ] Unit Test: Sukses mendapatkan data user.
    -   [ ] Unit Test: Gagal jika token tidak ada / tidak valid.
-   [ ] **Public: `GET /cattle/available`**
    -   [ ] Implementasi endpoint untuk menampilkan semua ternak dengan status `AVAILABLE`.
    -   [ ] Unit Test: Memastikan hanya ternak `AVAILABLE` yang muncul.
-   [ ] **Investor Profile: `GET /investor/profile` dan `PATCH /investor/profile`**
    -   [ ] Implementasi endpoint `GET` untuk mengambil `UserProfile`.
    -   [ ] Implementasi endpoint `PATCH` untuk membuat/memperbarui `UserProfile`.
    -   [ ] Unit Test: Membuat, mengambil, dan memperbarui profil.
-   [ ] **Investor Investments: `POST /investor/investments`**
    -   [ ] Implementasi endpoint untuk membuat investasi baru.
        -   Logika: Mengubah status ternak menjadi `INVESTED`.
        -   Logika: Membuat `Transaction` baru dengan status `PENDING`.
    -   [ ] Unit Test: Sukses membuat permintaan investasi.
    -   [ ] Unit Test: Gagal jika ternak tidak `AVAILABLE`.
-   [ ] **Investor Investments: `GET /investor/investments`**
    -   [ ] Implementasi endpoint untuk melihat daftar semua investasi milik user yang sedang login.
    -   [ ] Unit Test: Memastikan hanya investasi milik sendiri yang tampil.
-   [ ] **Investor Investments: `GET /investor/investments/{investmentId}`**
    -   [ ] Implementasi endpoint untuk melihat detail satu investasi.
    -   [ ] Unit Test: Sukses mendapatkan detail.
    -   [ ] Unit Test: Gagal jika mencoba mengakses investasi milik orang lain.

### ⏳ **Phase 3: Core Features (Admin)**

Fitur esensial bagi admin untuk mengelola platform.

-   [ ] **Admin Management: `POST /admin/cattle`**
    -   [ ] Buat middleware otentikasi khusus Admin (`role === 'ADMIN'`).
    -   [ ] Implementasi endpoint untuk menambahkan data ternak baru.
    -   [ ] Unit Test: Admin sukses menambahkan ternak.
    -   [ ] Unit Test: Investor gagal mengakses endpoint ini (403 Forbidden).
-   [ ] **Admin Monitoring: `GET /admin/investors`**
    -   [ ] Implementasi endpoint untuk melihat semua user dengan peran `INVESTOR`.
    -   [ ] Unit Test: Admin sukses mendapatkan daftar.
    -   [ ] Unit Test: Investor gagal mengakses.
-   [ ] **Admin Management: `PATCH /admin/transactions/{transactionId}/verify`**
    -   [ ] Implementasi endpoint untuk mengubah status transaksi dari `PENDING` ke `COMPLETED`.
    -   [ ] Unit Test: Admin sukses memverifikasi transaksi.
    -   [ ] Unit Test: Gagal jika transaksi sudah `COMPLETED`.
    -   [ ] Unit Test: Investor gagal mengakses.

### ⏳ **Phase 4: Secondary Features (Investor)**

Fitur-fitur pendukung untuk melengkapi pengalaman investor.

-   [ ] **Investor Savings: `POST /investor/savings` dan `GET /investor/savings`**
    -   [ ] Implementasi endpoint untuk membuat dan melihat akun tabungan.
    -   [ ] Unit Test.
-   [ ] **Investor Savings: `POST /investor/savings/{savingId}/deposit`**
    -   [ ] Implementasi endpoint untuk deposit, membuat transaksi `PENDING`.
    -   [ ] Unit Test.
-   [ ] **Investor General: `GET /investor/transactions`**
    -   [ ] Implementasi endpoint untuk melihat riwayat semua transaksi pribadi.
    -   [ ] Unit Test.
-   [ ] **Document Upload: `POST /investor/investments/{investmentId}/documents`**
    -   [ ] Rencanakan strategi penyimpanan file (misal: S3, Cloudinary, atau lokal).
    -   [ ] Implementasi endpoint untuk mengunggah dokumen (misal: bukti transfer).
    -   [ ] Unit Test.

### ⏳ **Phase 5: Advanced Features & Monitoring (Admin)**

Fitur-fitur untuk monitoring dan manajemen lebih lanjut oleh admin.

-   [ ] **Admin Management: `POST /admin/cattle/{cattleId}/updates`**
    -   [ ] Implementasi endpoint untuk menambah laporan perkembangan ternak.
    -   [ ] Unit Test.
-   [ ] **Admin Monitoring: `GET /admin/investors/{userId}`**
    -   [ ] Implementasi endpoint untuk melihat detail lengkap investor (profil, investasi, tabungan, transaksi).
    -   [ ] Unit Test.
-   [ ] **Admin Monitoring: `GET /admin/transactions`**
    -   [ ] Implementasi endpoint untuk melihat semua transaksi di platform, dengan filter.
    -   [ ] Unit Test.

### ⏳ **Phase 6: Finalization & Polish**

-   [ ] **Referral System: `GET /investor/referral`**
    -   [ ] Implementasi endpoint untuk menampilkan info referral (kode, jumlah user, total komisi).
-   [ ] **Documentation & Cleanup**
    -   [ ] Periksa kembali semua endpoint dan pastikan sesuai dengan spesifikasi OpenAPI.
    -   [ ] Tambahkan *error handling* yang lebih detail dan konsisten di seluruh API.
    -   [ ] Optimasi query database jika diperlukan.
    -   [ ] Pastikan deployment ke server produksi berjalan lancar.
## Fadagi Farm API - Project Backlog

Dokumen ini berisi daftar pekerjaan yang perlu diimplementasikan untuk API Fadagi Farm, disesuaikan dengan progress implementasi saat ini dan spesifikasi OpenAPI v2.

### ✅ **Sudah Dikerjakan (Done)**

Bagian ini mencakup fitur dan fondasi yang sudah diimplementasikan di dalam kode.

-   [x] **Setup & Konfigurasi Proyek**
    -   [x] Inisialisasi proyek Nuxt 3.
    -   [x] Konfigurasi Prisma sebagai ORM dengan koneksi ke MySQL.
    -   [x] Setup Jest & Supertest untuk testing.
    -   [x] Struktur direktori server (API, middleware, validation) sudah terbentuk.

-   [x] **Database & Model**
    -   [x] Desain dan implementasi skema database lengkap (`schema.prisma`).
    -   [x] Generate migrasi awal untuk semua tabel (`User`, `Cattle`, `Investment`, dll).
    -   [x] Implementasi skrip *seeding* untuk membuat user Admin secara otomatis (`prisma/seed.js`).

-   [x] **Fitur: Autentikasi - Login (`POST /api/auth/login`)**
    -   [x] Implementasi endpoint untuk login user (Admin dan Investor).
    -   [x] Validasi input menggunakan Joi (`user-login-validation.js`).
    -   [x] Verifikasi kredensial dengan membandingkan hash password menggunakan `bcrypt`.
    -   [x] Generate JWT (JSON Web Token) saat login berhasil.
    -   [x] Test case dasar menggunakan file `test.http`.

-   [x] **Fitur: Admin - Membuat Investor Baru (`POST /api/admin/investors`)**
    -   [x] Implementasi endpoint khusus Admin untuk mendaftarkan investor baru.
    -   [x] Validasi input menggunakan Joi (`admin-create-investor-validation.js`).
    -   [x] Hashing password investor baru sebelum disimpan.
    -   [x] Test case dasar menggunakan file `test.http`.
    -   *(Catatan: Endpoint ini memerlukan otentikasi Admin, yang fondasinya perlu diselesaikan).*

### ⏳ **Prioritas Berikutnya: Fondasi Kritis**

Fitur-fitur ini harus segera dikerjakan karena menjadi dasar bagi fitur-fitur lainnya.

-   [ ] **Core: Middleware Otentikasi (`server/middleware/auth.js`)**
    -   [ ] Selesaikan implementasi middleware untuk memverifikasi Bearer Token (JWT) dari header `Authorization`.
    -   [ ] Middleware harus bisa mengekstrak data user (ID, role) dari token dan menyematkannya ke *request context*.
    -   [ ] Terapkan middleware ini ke semua endpoint yang memerlukan otentikasi.
    -   [ ] Buat middleware turunan atau logika di dalam middleware utama untuk membatasi akses berdasarkan peran (`role === 'ADMIN'`).

-   [ ] **Fitur: Autentikasi - Mendapatkan Data Diri (`GET /api/auth/me`)**
    -   [ ] Implementasi endpoint yang dilindungi middleware otentikasi.
    -   [ ] Endpoint harus mengembalikan data user yang sedang login (berdasarkan token).
    -   [ ] Unit Test: Sukses mendapatkan data user.
    -   [ ] Unit Test: Gagal jika token tidak ada / tidak valid (Error 401).

-   [ ] **Fitur: Registrasi Publik untuk Investor (`POST /api/auth/register`)**
    -   [ ] Implementasi endpoint yang tidak memerlukan otentikasi.
    -   [ ] Logika untuk validasi input (termasuk validasi `referralCode` jika ada).
    -   [ ] Unit Test: Registrasi sukses.
    -   [ ] Unit Test: Gagal jika email sudah ada (Error 409).
    -   [ ] Unit Test: Gagal jika `referralCode` tidak valid (Error 400).

### 📋 **Backlog Fitur (Belum Dikerjakan)**

Daftar fitur lengkap yang perlu diimplementasikan, dikelompokkan berdasarkan peran dan modul.

#### **Fitur Publik**
-   [ ] **Cattle: `GET /api/cattle/available`**
    -   [ ] Implementasi endpoint untuk menampilkan semua ternak dengan status `AVAILABLE`.
    -   [ ] Unit Test: Memastikan hanya ternak `AVAILABLE` yang muncul.

#### **Fitur Admin**
-   [ ] **Manajemen Ternak**
    -   [ ] `POST /api/admin/cattle`: Menambah data ternak baru.
    -   [ ] `POST /api/admin/cattle/{cattleId}/updates`: Menambah laporan perkembangan (berat, kesehatan) untuk seekor ternak.
-   [ ] **Manajemen Transaksi**
    -   [ ] `PATCH /api/admin/transactions/{transactionId}/verify`: Memverifikasi dan mengubah status transaksi dari `PENDING` ke `COMPLETED`.
-   [ ] **Monitoring**
    -   [ ] `GET /api/admin/investors`: Melihat daftar semua user dengan peran `INVESTOR`.
    -   [ ] `GET /api/admin/investors/{userId}`: Melihat detail lengkap seorang investor (profil, investasi, transaksi).
    -   [ ] `GET /api/admin/transactions`: Melihat semua transaksi di platform, dengan kemampuan filter berdasarkan status dan tipe.

#### **Fitur Investor**
-   [ ] **Manajemen Profil**
    -   [ ] `GET /api/investor/profile`: Mengambil `UserProfile` milik investor yang login.
    -   [ ] `PATCH /api/investor/profile`: Membuat atau memperbarui `UserProfile` (nomor telepon, rekening bank, dll).
-   [ ] **Manajemen Investasi**
    -   [ ] `POST /api/investor/investments`: Membuat permintaan investasi baru pada ternak yang `AVAILABLE`. (Logika: mengubah status ternak, membuat transaksi `PENDING`).
    -   [ ] `GET /api/investor/investments`: Melihat daftar semua investasi milik investor yang login.
    -   [ ] `GET /api/investor/investments/{investmentId}`: Melihat detail satu investasi, termasuk update perkembangan ternak.
-   [ ] **Manajemen Tabungan**
    -   [ ] `POST /api/investor/savings`: Membuat akun tabungan baru.
    -   [ ] `GET /api/investor/savings`: Melihat daftar akun tabungan milik investor.
    -   [ ] `POST /api/investor/savings/{savingId}/deposit`: Melakukan deposit ke tabungan (membuat transaksi `PENDING`).
-   [ ] **Fitur Umum**
    -   [ ] `GET /api/investor/transactions`: Melihat riwayat semua transaksi pribadi.
    -   [ ] `POST /api/investor/investments/{investmentId}/documents`: Mengunggah dokumen (misal: bukti transfer). Perlu perencanaan storage file.
    -   [ ] `GET /api/investor/referral`: Menampilkan informasi sistem referral (kode, jumlah referral, total komisi).
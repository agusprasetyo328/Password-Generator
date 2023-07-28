# BuatPaswordAman - Pembuat Password Aman
(screenshot.png)
BuatPaswordAman adalah sebuah aplikasi sederhana untuk menghasilkan password acak yang lebih aman. Aplikasi ini dibangun dengan menggunakan HTML, CSS (dengan Tailwind CSS), dan JavaScript.
## Cara Penggunaan
Anda dapat mengikuti langkah-langkah berikut untuk menggunakan aplikasi BuatPaswordAman:
1. Buka aplikasi BuatPaswordAman di peramban web Anda.
2. Klik tombol "Buat Password" untuk menghasilkan password acak.
3. Setelah password tergenerasi, password akan ditampilkan dalam kotak teks di bawah tombol "Buat Password".
4. Anda dapat menyalin password tersebut dengan mengklik tombol "Salin". Password akan secara otomatis tersalin ke clipboard Anda sehingga Anda dapat langsung menyimpan atau menggunakan password tersebut.
5. Anda juga dapat melihat kekuatan password yang dihasilkan di bawah kotak teks. Kekuatan password ditunjukkan dengan indikator berwarna yang mengisi sebagian dari kotak berdasarkan panjang password.
## Kustomisasi Panjang Password
Secara default, aplikasi ini menghasilkan password dengan panjang 12 karakter. Namun, jika Anda ingin mengatur panjang password yang berbeda, Anda dapat melakukan kustomisasi dengan mengedit kode JavaScript berikut:
```javascript
function generateRandomPassword(length) {
  // ... (kode lain)
}
```
Anda dapat mengubah angka 12 di `generateRandomPassword(12)` menjadi panjang yang diinginkan.
## Kekuatan Password
Aplikasi ini memberikan penilaian kekuatan password berdasarkan panjang password. Berikut adalah kriteria penilaiannya:
- Panjang password ≥ 8 karakter dan < 13 karakter: **Lemah**
- Panjang password ≥ 13 karakter: **Sedang**
- Panjang password ≥ 8 karakter dan < 13 karakter: **Kuat**
Kekuatan password ditunjukkan oleh indikator berwarna yang mengisi sebagian dari kotak di bawah kotak teks password.
## Perhatian

1. Pastikan untuk tidak membagikan atau menyimpan password hasil generasi di tempat yang tidak aman atau dapat diakses oleh pihak yang tidak berwenang.
2. Pastikan untuk menggunakan password yang unik dan sulit ditebak untuk akun-akun yang penting atau sensitif.
## Lisensi
Aplikasi BuatPaswordAman ini dilisensikan di bawah MIT License. Silakan merujuk ke berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.
---
Aplikasi BuatPaswordAman ini dapat membantu Anda dalam menghasilkan password yang lebih aman dan mengamankan akun-akun online Anda. Jika Anda memiliki pertanyaan atau saran terkait aplikasi ini, jangan ragu untuk menghubungi saya.

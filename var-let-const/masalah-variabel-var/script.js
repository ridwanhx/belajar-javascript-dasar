// # Masalah Variabel var
// Sebelumnya sudah dijelaskan bahwa penggunaan var sudah tidak direkomendasikan lagi pada javascript modern ini, dan diganti dengan let untuk mendeklarasikan variabel yang sifatnya imutable / bisa dirubah
// Pertanyaannya, kenapa?
// Alasan var tidak direkomendasikan untuk dipergunakan lagi adalah, karena var tidak memiliki block scope, artinya dia tidak mengikat ke local scope yang sebelumnya sudah kita bahas
// Karena masalah ini, var bisa tidak terprediksi
// Kita akan buat contoh penggunaan var dan let

// Implementasi
// penggunaan variabel menggunakan kata kunci let
let i = 10; // mendeklarasikan variabel global i
for (let i = 0; i < 6; i++) {   // mendeklarasikan variabel local i (hanya berlaku untuk lingkup/scope perulangan ini saja)
    console.info(`Perulangan ke-${i + 1}`); // terlihat dari output yang dihasilkan, keyword let dapat membedakan lingkup dari variabel yang dimaksud, hasil perulangan dilakukan sebanyak 6 kali / bisa dikatakan mengacu pada variabel i di lingkup lokal nya.
}
console.info(`Global ${i}`);    // mengacu pada variabel i global


// penggunaan variabel menggunakan kata kunci var
var index = 100;
for (var index = 0; index < 6; index++) {
    console.info(`Perulangan ke-${index + 1}`);
}
// sedangkan yang terjadi disini adalah, variabel index yang didalam lingkup perulangan menimpa/meng-override nilai daripada variabel index dalam lingkup global nya.
// hal ini tentu berbeda dengan cara kerja let yang akan bisa membedakan variabel berdasarkan lingkupnya (global / lokal)
console.info(`Global ${index}`);    // Global 6, harusnya 100
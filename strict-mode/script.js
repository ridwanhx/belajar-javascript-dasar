// # Strict Mode
// Saat kita menjalankan kode program JavaScript, secara default kode program kita berjalan dalam model tidak strict, atau istilahnya sloppy mode
// Pada ECMAScript 5, diperkenalkan mode strict, dimana ketika strict mode dijalankan, maka akan merubah beberapa cara kerja di JavaScript, seperti :
// - Merubah beberapa JavaScript error dari yang tadinya silent error, menjadi throw error (terlihat)
// - Memperbaiki beberapa kesalahan engine JavaScript untuk optimisasi
// - Menolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript: misal seperti penggunaan keyword var untuk mendeklarasikan variabel, penggunaan with statement yang sebelumnya telah dijelaskan pada materi With Statement, parameter arguments, penggunaan keyword delete untuk variabel, dan masih banyak lagi.


// Cara Menyalakan Strict Mode
// Untuk menyalakan strict mode, kita bisa menambahkan 'use strict' pada baris awal file javascript kita
// Atau bisa juga ditambahkan di awal function kita

// Implementasi
function activateStrictMode() {
    // aktivasi strict mode
    'use strict';
    // deklarasi object person
    const person = {
        fullName: 'Muhamad Ridwan'
    };
    // mencoba menjalankan delete statement ketika strict mode sudah di aktifkan
    delete person;  // 'delete' cannot be called on an identifier in strict mode.
    
    // mencoba menjalankan with statement ketika strict mode sudah di aktifkan
    with (person) {
        return fullName;
    }

}

console.info(activateStrictMode()); // Strict mode code may not include a with statement
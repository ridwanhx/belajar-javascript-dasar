// # Arrow Function
// Arrow Function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
// Arrow Function mulai tersedia di EcmaScript Versi 6 ke-atas
// Meskipun dari segi penulisan/pembuatan dari Arrow Function ini semakin sederhana/simple, namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
// Dinamakan arrow function karena menggunakan tanda => (seperti arrow/anak panah)
// Karakteristik dari Arrow Function ini sendiri hampir sama dengan Anonymous Function, dalam artian tidak bisa berdiri sendiri, harus ditempatkan penulisannya didalam variabel, atau menjadi parameter
// Berikut contoh beberapa kekurangan/limitasi Arrow Function:
// - Tidak memiliki fitur arguments object
// - Tidak bisa menggunakan function generator
// - Tidak bisa mengakses this (yang nanti akan dibahas di function di object)
// - Tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
// Implementasi
// Pembuatan Arrow Function sederhana
// Penulisan arrow function diawali dengan penulisan parameter (jika memang diperlukan/opsional)
// kita juga bisa menambahkan rest parameter sebagai parameter nya
// dilanjutkan dengan tanda => (arrow), kemudian bracket
let salam = (ucapan = 'Datang', nama = 'Guest') => {
    // lalu didalam scope arrow function nya kita isi dengan aksi yang akan dilakukan / dikembalikan oleh si arrow function ini
    const str = `Selamat ${ucapan}, ${nama}`;
    return str;
}
// karena karakteristik yang kurang lebih sama dengan Anonymous function. Jika Arrow Function dideklarasikan didalam variabel, maka kita cukup memanggil variabel tersebut kemudian diikuti dengan tanda kurung untuk mengirimkan argument nya
console.info(salam('Malam', 'Ridwan'));


// Arrow Function Tanpa Block
// Jika sebuah arrow function isinya sangat sederhana, misal hanya satu barus
// Kita bisa membuat arrow function tanpa harus menggunakan block / kurung kurawal / bracket
// Implementasi
// misal pada case ini kita hanya ingin menambahkan 2 buah kondisi yang kita tuliskan dalam bentuk ternary operation
const sayMyName = (name) => (name === 'Heisenberg') ? `You're God Damn Right!` : `Wrong, I am Heisenberg!`;

console.info(sayMyName('Heisenberg'));
console.info(sayMyName('Walter White'));


// Arrow Function Return Value
// Arrow Function bisa mengembalikan value, sama seperti function biasanya (dan literally author secara sadar sudah melakukannya pada implementasi sebelumnya / pada baris program diatas)
// Jika menggunakan block, maka kita perlu menggunakan kata kunci return (sama/sesuai seperti yang sudah author lakukan diatas)
// Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
// Implementasi
// pada case kali ini, kita akan membuat arrow function yang akan mengembalikan hasil nilai penjumlahan untuk setiap nilai yang dikirimkan melalui argument yang akan ditangkap kedalam rest parameter sebagai parameter nya
let sum = (...values) => {
    let result = 0; // inisiasi kondisi awal
    for (let item of values) {  // perulangan for of | dokumentasi: materi perulangan > for-of
        result += item; // result = result + item
    }
    return result;  // nilai kembalian / return value | dokumentasi: materi-function > function-return-value
}

console.info(sum(12, 14, 31));
console.info(sum(...[10, 10, 10, 20]));    // konversi array kedalam rest parameter / Spread Syntax | dokumentasi: materi rest parameter


// Arrow Function Tanpa Kurung Parameter
// Jika Parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter
// kekurangannya daripada penulisan seperti ini, kita jadi tidak bisa menambahkan default value kedalam parameter nya
const sayHello = name => `Welcome Back, ${name}`;

console.info(sayHello('Ridwan'));


// Arrow Function Sebagai Parameter
// Karena Arrow Function sama seperti anonymous function
// Jadi kita juga bisa menggunakan Arrow Function sebagai parameter di function lain
// Implementasi
// menjadikan nilai default dari parameter bernama callback sebagai arrow function yang akan mengembalikan sebuah nilai berupa str tergantung dari argument yang diberikan ketika pemanggilan callback()
function sayHeisenberg(name, callback = (name) => (name === 'Heisenberg') ? `You're God Damn Right!` : `Wrong, I am Heisenberg!`) {
    return callback(name);
}

console.info(sayHeisenberg('Ridwan'));  // Wrong, I am Heisenberg!
console.info(sayHeisenberg('Heisenberg'));  // You're God Damn Right!
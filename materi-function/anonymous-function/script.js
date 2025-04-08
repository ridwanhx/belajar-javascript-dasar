// # Anonymous Function
// Sebelumnya kita selalu membuat function dengan mendefinisikan juga nama dari function tersebut
// Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function / function tanpa nama
// Kita bisa buat anonymous function dalam sebuah variabel atau bisa juga kita buat ketika mengisi parameter
// implementasi
const hello = function (name) { // deklarasi anonymous function
    return `Hello, ${name}`;
}

console.info(hello('Muhamad Ridwan'));

// dalam implementasinya, penulisan daripada anonymous function ini tidak bisa kita samakan dengan penulisan function biasa, untuk anonymous function seperti yang sudah dijelaskan diatas harus di deklarasikan didalam sebuah variabel, ataupun parameter

// implementasi anonymous function sebagai parameter
function sayMyName(callback) {  // deklarasi function yang menerima parameter bernama callback, yang diharapkan si parameter ini akan menerima function sebagai argument nya untuk kemudian digunakan di sayMyName() / fungsi ini
    return callback('Heisenberg');  // memanggil function yang diterima melalui parameter callback, dan mengoperkan string 'Heisenberg' sebagai argumentnya
}

console.info(sayMyName(function (name) { // anonymous function sebagai argument untuk parameter callback
    // fungsi ini (anonymous function) menerima satu parameter 'name' dan mengembalikan string yang sudah dimodifikasi
    return `Say My Name... ${name}`;
}));
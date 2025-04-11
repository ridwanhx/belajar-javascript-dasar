// # Closure
// Closure adalah kombinasi function dan bundle referensi ke data disekitarnya
// Agak membingungkan memang, apalagi untuk yang baru pertama belajar
// Kita sudah tahu bahwa local scope tidak bisa diakses di luar scope nya
// Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local sope tersebut, keluar scope nya
// Implementasi
function createAdder(value) {   // merupakan global scope untuk lingkup program file ini
    const owner = 'Ridwan'; // variabel lokal dalam createAdder(), tersedia untuk add() / function-function lain didalam lingkup yang sama, karena lexical scoping
    // lexical scope adalah Cara JavaScript menentukan dari mana sebuah variabel bisa diakses, berdasarkan tempat / lingkup daripada penulisan kode tersebut
    function add(param) {   // deklarasi nested function add()
        console.info(owner);    // mencetak nilai dari owner, karena add() memiliki akses ke scope induknya
        return value + param;   // nilai kembalian = value + param
    }
    return add; // mengembalikan fungsi add (add disini tanpa tanda kurung, artinya tidak langsung dieksekusi, karena kita akan menjadikan add sebagai value), memungkinkan kita membuat fungsi baru dengan value yang sudah 'tertanam'
}

const addTwo = createAdder(2);  // membuat fungsi baru yang akan selalu menambahkan 2 ke parameternya
// ilustrasi cara kerja addTwo:
/*
const addTwo = function(param) {
    console.info('Ridwan');
    return 2 + param;
}
*/
console.info(addTwo(10));   // mencetak 12
/* 
addTwo(10)
param = 10
value = 2 (dari closure)
Cetak 'Ridwan'
Hitung 2 + 10 = 12
Cetak 12
*/
console.info(addTwo(20));   // mencetak 22

// jadi artinya, kita bisa mengekspos sebuah function (dalam kasus ini add()) dan juga data variabel pendukung / bundle (dalam kasus ini owner) di sekitarnya ke luar dari scope semestinya
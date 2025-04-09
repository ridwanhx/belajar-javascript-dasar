// # Scope
// Scope merupakan area akses sebuah data
// Ada dua jenis scope, global scope dan local scope
// Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
// Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
// implementasi
let counter = 0;    // global scope

// global scope (lingkup dari function ini bisa di akses oleh seluruh program)
function hitMe() {
    // local scope hitMe
    counter++;  // do counter++ atau counter + 1
}

// global function (lingkup dari function ini bisa di akses oleh seluruh program)
function other() {
    // local scope other
}

hitMe();    // counter = 0 + 1
hitMe();    // counter = 1 + 1

console.info(counter);  // output : 2

// yang terjadi jika kita memaksa untuk mengakses element yang merupakan local scope dari suatu function
// global scope
function tambahSatu() {
    // local scope
    let totalTambah = 0;
    totalTambah++
    return totalTambah;
}

// global scope
function kurangSatu() {
    // local scope
    let totalKurang = 0;
    totalKurang--;
    // mencoba mengakses variabel yang ada di local scope lain
    // console.info(totalTambah);  // totalTambah is not defined
    return totalKurang;
}

// ketika mencoba mengakses global scope nya (si function terluarnya)
console.info(tambahSatu()); // output: 1
console.info(kurangSatu()); // output: -1

// ketika mencoba mengakses local scope nya (element (var, function, dll) didalam lingkup function)
// console.info(totalTambah);  // output: totalTambah is not defined

// bagaimana cara kerja scope untuk lingkup nested function ?
// Implementasi
function contoh(n) {
    // variabel yang merupakan scope terluar / global scope untuk lingkup function contoh
    let bilangan = n;

    // misal disini kita akan membuat nested function sederhana yaitu untuk mengembalian T/F untuk menentukan sebuah bilangan apakah ganjil(odd) / genap(even)
    function isOdd() {
        // seperti yang dapat kita lihat, didalam local scope isOdd, kita dapat mengakses variabel bilangan yang merupakan global scope / variabel terluar
        let str = '';
        if (bilangan % 2 != 0) {
            str = `Ganjil`;
            return str;
        } else {
            str = 'Genap';
            return str;
        }
    }

    // misal ceritanya kita akan mengakses property yang ada di dalam local scope isOdd
    // console.info(str);  // output: str is not defined

    return isOdd();
}

console.info(contoh(11));
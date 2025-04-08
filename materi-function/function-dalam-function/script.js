// # Function dalam Function / nested function
// Tidak ada batasan dimana kita bisa membuat function
// Termasuk jika kita ingin membuat function di dalam sebuah function sekalipun, kita bisa melakukannya
// Function yang terdapat di dalam, kita sebut inner function
// Inner function ini hanya bisa diakses di tempat kita membuat function nya, tidak bisa diakses dari luar function nya
// implementasi
function outerFunction() {  // function terluar
    function innerFunction() {  // function bagian dalam
        return `Inner Function`;
    }

    return innerFunction(); // mengembalikan value yang dikembalikan innerFunction()
}

console.info(outerFunction());
// console.info(innerFunction());  // innerFunction is not defined
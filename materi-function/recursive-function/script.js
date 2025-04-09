// # Recursive Function
// Recursive Function adalah kemampuan function untuk memanggil dirinya sendiri
// Kadang memang ada banyak problem/permasalahan, yang lebih mudah diselesaikan dengan menggunakan recursive function, seperti contohnya kasus factorial
// implementasi
// penulisan function factorial sederhana menggunakan perulangan
function factorialWithLoop(n) {
    let result = 1;
    // anggaplah kali ini kita menggunakan perulangan while untuk implementasinya
    // author merasa jenuh dengan for
    let i = 1;  // inisiasi
    while (i <= n) {    // kondisi terminasi
        result *= i;    // aksi
        i++;    // increment
    }

    return result;  // return value
}

console.info(factorialWithLoop(5));

// penulisan function factorial menggunakan recursive function
function factorialWithRecursive(value) {
    // penulisan menggunakan ternary operator
    // return (value === 1) ? 1 : value * factorialWithRecursive(value - 1); 

    // penulisan sederhana
    if (value === 1) {  // Kondisi dasar (base case) / kadang disebut juga terminasi akhir, untuk menghentikan rekursi agar tidak terjadi infinite loop
        return 1;
    } else {
        return value * factorialWithRecursive(value - 1);
        // Ilustrasi proses rekursif ketika value = 5:
        // Panggilan pertama: value = 5 → 5 * factorialWithRecursive(4)
        // Panggilan kedua: value = 4 → 5 * 4 * factorialWithRecursive(3)
        // Panggilan ketiga: value = 3 → 5 * 4 * 3 * factorialWithRecursive(2)
        // Panggilan keempat: value = 2 → 5 * 4 * 3 * 2 * factorialWithRecursive(1)
        // Panggilan kelima: value = 1 → return 1 (karena base case terpenuhi)
        // Hasil akhir: 5 * 4 * 3 * 2 * 1 = 120
    }
}

console.info(factorialWithRecursive(5));
// # Do While Loop
// Do While loop adalah perulangan yang mirip dengan while
// Perbedaannya hanya pada pengecekan kondisi
// Pengecekan kondisi di while loop dilakukan diawal sebelum perulangan dilakukan, sedangkan di Do While loop dilakukan setelah perulangan dilakukan
// Oleh karena itu dalam Do While loop, minimal pasti sekali perulangan dilakukan walaupnu kondisi tidak bernilai true
// implementasi
let i = 1;  // inisiasi
do {
    console.info(`Perulangan Do While ke-${i}`);    // aksi
    i++;    // increment
} while (i <= 10);  // kondisi terminasi
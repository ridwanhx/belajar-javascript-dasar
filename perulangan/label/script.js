// # Label
// Label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue
// Secara default saat kita melakukan break atau continue, dia akan melakukan terhadap perulangan dimana kode break dan continue itu bisa digunakan
// Dengan menggunakan label, kita bisa melakukan break dan continue terhadap perulangan yang kita inginkan, asalkan pada perulangannya kita gunakan label
// Untuk membuat label, kita bisa gunakan nama label lalu diikuti dengan : (titik dua)
// implementasi
loopi:  // deklarasi label u/ perulangan i
for (let i = 1; i <= 5; i++) {
    loopj:  // deklarasi label u/ perulangan j
    for (let j = 1; j <= 10; j++) {
        console.table(`Kolom ke-${j}, Baris ke-${i}`);
    }
}

// Implementasi label dengan Break / Continue
looprow: // deklarasi  label
for (let row = 1; row <= 10; row++) {
    loopcolumn: // deklarasi  label
    for (let column = 1; column <= 100; column++) {
        if (column > 10) {  // implementasi continue, jika perulangan untuk column sudah bernilai > 10
            continue looprow; // maka continue (lompat ke iterasi berikutnya) perulangan untuk row
        }
        console.info(`Kolom ${column}, Baris ${row}`);
    }
}
// # Function Generator
// Function Generator adalah function yang digunakan untuk membuat data generator
// Generator adalah data yang bisa di iterasi seperti hal nya Array
// Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
// Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya
// implementasi
function* createNames() {   // deklarasi function generator
    // membuat data generator
    yield 'Muhamad Ridwan';
    yield 'Ignasya Claravelya';
    yield 'Clarasya Artisan';
}

console.info(createNames());    // Object [Generator] {}

const names = createNames();    // hasil daripada pemanggilan function generator diatas, akan terlihat seperti Array, tapi karakteristiknya tidak seperti Array
for (let name of names) {   // sehingga kita bisa melakukan iterasi untuk setiap data generator didalamnya
    console.info(name);
}

// mencoba mengakses data generator sebagaimana mengakses data Array biasa
console.info(names[0]); // undefined
// hasilnya undefined karena, meskipun data generator ini bersifat iterable (bisa dilakukan iterasi untuk setiap data yang ada didalamnya), namun perlu diketahui bahwa data generator tidak bisa di akses secara langsung menggunakan index sebagaimana yang biasa kita lakukan terhadap data Array.
// karakteristik dari data generator ini hanya bisa dilakukan iterasi, tidak bisa di akses menggunakan index, bahkan tidak memungkinkan untuk dilakukan perubahan pada data nya sekalipun


// contoh implementasi yang agak kompleks
function* generateBilanganGanjil(value) {
    for (let i = 1; i <= value; i++) {  // lakukan perulangan sebanyak jumlah value yang dikirimkan
        if (i % 2 !== 0) {  // jika i tidak habis dibagi 2, maka
            // implementasi Lazy Evaluation
            console.info(`Yield ${i}`);

            yield i;    // buat data generator dengan nilai i yang dihasilkan di tiap perulangannya dan berhasil memenuhi kondisi diatas
        }
    }
}

const bilanganGanjil = generateBilanganGanjil(10);
for (let ganjil of bilanganGanjil) {
    console.info(ganjil);
}


// Lazy Evaluation
// Generator itu sifatnya lazy
// Jadi artinya jika data nya belum kita ambil dari generator, maka yield selanjutnya tidak akan di eksekusi
// implementasinya ada di function generateBilanganGanjil diatas
// implementasi lainnya terkait ini
function* generateArrayBilanganGanjil(value) {
    const result = [];
    for (let i = 1; i <= value; i++) {
        if (i % 2 !== 0) {
            console.info(`Yield ${i}`);
            result.push(i);
            yield i;
        }
    }
    return result;
}

const arrGanjil = generateArrayBilanganGanjil(20);
for (let arr of arrGanjil) {
    console.info(arr);
}

const buatGanjil = generateBilanganGanjil(20);
console.info(buatGanjil.next().value);
console.info(buatGanjil.next().value);
console.info(buatGanjil.next().value);
// next merupakan function milik generator, untuk ke perulangan berikutnya
// .value untuk mengembalikan value nya
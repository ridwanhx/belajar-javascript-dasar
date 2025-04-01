// # Break & Continue
// Pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
// Sama dengan pada perulangan, break juga digunakan untuk menghentikan seluruh perulangan (berhenti total)
// Namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya
// kalau di perulangan for, continue akan mengeksekusi increment/decrement-nya terlebih dahulu, lalu dilanjutkan ke perulangan selanjutnya

// implementasi break
let counter = 1;
while (true) {  // diatur supaya perulangan berjalan terus menerus / loop forever
    console.info(`Implementasi perulangan dengan break ke-${counter}`);
    counter++;

    if (counter > 10) { // hentikan total perulangan jika counter sudah lebih dari 10
        break;  // tidak peduli jenis perulangan apapun itu (for, while, do while), ketika menemui break, perulangan berhenti total
    }
}


// Implementasi continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {   // jika perulangan berada di kondisi i merupakan bilangan genap, maka continue / skip lalu lanjutkan untuk mengeksekusi perulangan berikutnya
        continue;
    }
    console.info(`Bilangan ganjil ${i}`);
}
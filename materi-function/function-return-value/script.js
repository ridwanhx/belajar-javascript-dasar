// # Function Return Value
// Secara default, function itu tidak menghasilkan value apapun (maksudnya, jadi saat kita memanggil function, function tersebut tidak mengembalikan data apapun), namun jika kita ingin, kita bisa membuat sebuah function untuk mengembalikan value
// contoh beberapa function yang mengembalikan value di JavaScript (confirm(), prompt(), dan lain sebagainya)
// contoh function yang tidak mengembalikan value di JavaScript salah satunya adalah alert() yang ketika kita simpan kedalam variabel, akan bernilai undefined
// Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya
// Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan
// Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan array sebagai return value nya.
// implementasi
// membuat function dengan return value
function sayHello(firstName, lastName) {
    const greetings = `Hello, ${firstName} ${lastName}`;
    return greetings;
}
// memanggil function dengan return value
console.info(sayHello('Muhamad', 'Ridwan'));

// implementasi function return value lebih dari satu (hanya berlaku satu return per kondisi didalam satu percabangan)
function gradeNilai(nilai) {
    if (nilai >= 90) {
        return 'A';
    } else if (nilai >= 80) {
        return 'B';
    } else if (nilai >= 70) {
        return 'C';
    } else if (nilai >= 60) {
        return 'D'
    } else {
        return 'E';
    }
}

console.info(gradeNilai(88));

// Menghentikan Eksekusi dengan Return
// Saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan di eksekusi
// Kita bisa menggunakan return untuk menghentikan eksekusi dari sebuah function
// implementasi
function inContains(array, searchOfValue) { // mencari jarum didalam tumpukan jerami
    for (const element of array) { // melakukan iterasi untuk setiap elemen didalam array yang dikirimkan
        console.info(`Iterasi element: ${element}`);    // untuk membuktikan program berhenti ketika return diberikan
        if (element == searchOfValue) { // jika ada elemen yang nilainya sama dengan searchOfValue
            return true;    // hentikan eksekusi program, kembalikan true
        }
    }
    return false; // hentikan eksekusi program, kembalikan false
}

let jerami = [1, 14, 2, 25, 12, 19, 5, 6, 19, 20, 6, 10, 11, 15];   // meskipun ada 2 buah element yang sama, program dihentikan di element pertama yang ditemukan
let jarum = 6;
console.info(inContains(jerami, jarum)); // mencari jarum diantara tumpukan jerami
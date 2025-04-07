// # Rest Parameter
// Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
// Untuk membuat rest parameter, ada ketentuannya
// Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
// Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan, ataupun di tengah, kecuali memang cuma ada 1 parameter
// Di bahasa pemograman lain, ada juga yang bilang ini adalah variabel argument
// implementasi
function sumArray(name, ...data) {  // penulisan rest parameter ...data
    let total = 0;
    for (let item of data) {
        total += item;
    }
    console.log(`name: ${name}, total: ${total}`);
}

sumArray('Mango', 1,2,3,4,5);
sumArray('Apple', 6,7,2,3,1,5,8);
sumArray('Banana', 3, 4, 10, 12);

// Spread Syntax
// Kadang kita terlanjut memiliki data berupa Array
// Tapi untungnya kita juga bisa mengirim Array ke Rest Parameter
// Kita bisa gunakan ... (titik tiga kali) diikuti dengan array nya ketika memanggil function
// Fitur ini dinamakan Spread Syntax
// contoh kasus
const arr = [10, 10, 10, 10];
sumArray('Test', arr);  // output: name: Test, total: 010,10,10,10
// yang terjadi adalah, karena kita mengirimkan argument untuk rest parameter nya berupa array, maka rest parameternya akan menganggap data yang dikirimkan adalah data pertama dari si array rest parameter nya

// untuk menangani permasalahan seperti contoh diatas, kita bisa menggunakan Spread Syntax
// implementasi
sumArray('Spread Syntax', ...arr);  // penulisan Spread Syntax / mengkonversi array menjadi rest parameter
sumArray('Test', ...[20, 20, 20, 20, 20]); // penulisan Spread Syntax / mengkonversi array menjadi rest parameter

// Arguments Object (fitur lama / sesepuh)
// Sebelum ada fitur rest parameter, di JavaScript sudah ada fitur yang bernama arguments object
// Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments
// arguments secara otomatis bisa digunakan di function
// Namun perlu diingat, bahwa untuk JavaScript saat ini, lebih baik disarankan menggunakan rest parameter dibandingkan arguments object
// *** catatan tambahan dari penulis
// materi ini sebenarnya sudah pernah kita pelajari tempo dulu ketika kita masih belajar JavaScript dasar di WebProgrammingUnpas
// implementasi
function sumArguments() {   // dari penjelasan tempo dulu ketika belajar javascript dasar, arguments bisa dikatakan pseudo parameter / parameter semu yang memang sudah disediakan dibalik layar oleh JavaScript sendiri
    let total = 0;
    for (let item of arguments) {
        total += item
    }

    return `Total from arguments is : ${total}`;
}

console.info(sumArguments(1,2,3,4,5));
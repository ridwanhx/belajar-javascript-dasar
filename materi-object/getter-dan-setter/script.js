// # Getter dan Setter
// Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan mengubah data (Setter) yang dimana kedua fitur ini bisa kita masukkan pada sebuah property di dalam Object
// Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain lain

// Implementasi
// - Getter
const person = {
    firstName: 'Muhamad',
    lastName: 'Ridwan',
    // contoh penulisan getter
    // walaupun kita menuliskannya sebagaimana penulisan function, tapi Javascript tetap akan membaca ini sebagai property dari object ini dengan nama fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // contoh penulisan setter
    set fullName(value) {
        // setter sifatnya void, jadi kita tidak perlu dan tidak boleh melakukan return value karena secara fungsi digunakan untuk mengatur (menyimpan) nilai.
        // dan untuk mengambil nilai tersebut, gunakan getter.
        const values = value.split(' ');    // menangkap value yang masuk, kemudian memisahkannya/dibelah oleh spasi
        // misal value yang dikirim adalah "Muhamad Ridwan"
        // akan dipisahkan oleh spasi, sehingga didapatkan 2 buah value yaitu Muhamad dan Ridwan
        // lalu bagaimana jika value yang dikirim lebih dari dua kata? misal "Pablo Emilio Escobar Gaviria"?
        // Pertanyaan yang sangat kalcer. Jika demikian, karena kita hanya mendefinisikan value hanya untuk 2 property saja yaitu firstName dan lastName, maka yang akan disimpan hanyalah index ke 0, dan 1 saja. sisanya akan diabaikan.
        // values sendiri nantinya akan menyimpan nilai berupa array dari hasil split yang telah dilakukan
        this.firstName = values[0];
        this.lastName = values[1];
    }
};

console.info(person.fullName);  // mengakses property getter | sebelum dilakukan setter
console.info(person.fullName = 'Jude Bellingham');  // mengakses property setter, manipulasi value pada property firstName, lastName didalam Object person | setelah dilakukan setter
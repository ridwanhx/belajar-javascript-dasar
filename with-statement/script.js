// # With Statement
// With Statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
// Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya
// jadi biasanya, with statement digunakan ketika kita membutuhkan untuk mengakses property dalam sebuah object
// Untuk mengakses property dalam sebuah object, kadang kita perlu menyebutkan object nya, misal person.firstName, person.lastName, dll..
// Dengan menggunakan with statement, kita bisa membuat scope didalam si object nya jadi seakan akan ketika kita memanggil firstName saja itu sudah memanggil data si object nya
// implementasi
// const person = {
//     firstName: 'Pablo',
//     middleName: 'Escobar',
//     lastName: 'Gaviria'
// };

// penulisan tanpa with statement | before
// console.info(person.firstName);
// console.info(person.middleName);
// console.info(person.lastName);

// penulisan dengan menggunakan with statement | after
// with (person) {  // perkecil scope nya untuk object person
//     console.info(firstName);
//     console.info(middleName);
//     console.info(lastName);
// }

// jujurly, meskipun with statement itu ada, namun tidak direkomendasikan, bahkan untuk javascript terbaru pun, statement ini sudah tidak relevan / tidak boleh untuk digunakan lagi.
// adapun itu, kita bisa menggantinya dengan strict

// kenapa with statement tidak direkomendasikan lagi untuk digunakan?
// Walaupun fitur with statement ini sangat menarik
// Namun kebanyakan orang tidak merekomendasikan penggunakan with statement
// Hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu
// implementasi
// contoh studi kasus kenapa bisa ambigu
// deklarasi object person
const person = {
    firstName: 'May',
    middleName: 'Hanny',
    lastName: 'Khoirunnisa'
};
// deklarasi variabel biasa
const firstName = 'Muhamad';
const lastName = 'Ridwan';

with (person) { // karena kita sudah perkecil scope nya untuk object person, maka tidak heran jika kode program kebawahnya pun akan mengambil nilai dari object yang dimaksud
    console.info(firstName);    // berharap Muhamad
    console.info(lastName);     // berharap Ridwan
}
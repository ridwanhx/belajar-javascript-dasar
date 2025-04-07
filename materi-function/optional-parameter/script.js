// # Optional Parameter
// Secara default, parameter di function itu opsional
// Artinya kita tidak wajib mengisi value nya ketika memanggil function
// berbeda hal nya dengan bahasa pemograman lain seperti php misalnya, javascript secara default mempersilahkan kita untuk tidak mengisi value dari parameter sebuah function, yang dimana hal ini jika dilakukan di bahasa pemograman lain tentunya akan menghasilkan error pada program
// Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined
// Implementasi
function sayHello(firstName, middleName, lastName) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

sayHello('John');   // misal disini kita hanya mengirimkan satu argument saja, yang otomatis hanya parameter firstName lah yang akan menangkapnya, kemudian untuk argument setelah2 nya tidak kita kirim, maka otomatis parameter sisanya akan bernilai undefined

// Bagaimana jika argument yang dikirimkan lebih dari parameter yang sudah ditentukan ?
sayHello('Muhamad', 'Ridwan', 'Corleone', 'DiCaprio');
// yang terjadi adalah, argument yang berlebihnya itu tidak akan dianggap oleh javascript

// walaupun hal seperti ini terlihat menguntungkan untuk kita karena tidak ada komplain apapun dari javascript ketika ada situasi situasi seperti yang sudah kita simulasikan diatas
// tapi sebenarnya ini cukup beresiko, karena ketika terjadi kesalahan (misal kelebihan kirim argument, dan lain hal..) akhirnya tidak bisa kita lihat di sebelah mana error nya
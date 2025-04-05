// # For In
// For in merupakan perulangan dor yang digunakan untuk mengiterasi seluruh data property di object atau index di array
// Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data nomor index untuk Array, kita bisa menggunakan For Of (yang akan dibahas setelah ini)
// implementasi
// deklarasi object
const person = {
    // properties
    firstName: 'Diego',
    middleName: 'Armando',
    lastName: 'Maradona'
}

// perulangan for in terhadap object person
// lakukan perulangan untuk object person, dan simpan setiap property nya kedalam variabel property (nama variabelnya bebas, tidak harus property tentunya)
for (let property in person) {
    // untuk mengambil nama propertynya, bisa cukup dituliskan dengan property
    // sedangkan untuk mengambil value nya, bisa dengan namaObject[namaInisiasi], contoh pada kasus ini nama object nya person, nama inisiasi nya property, sehingga penulisannya: person[property]
    console.info(`Property: ${property} - ${person[property]}`);
}

// implementasi for in terhadap array (numerical array)
const hobbies = ['coding', 'learning', 'streaming'];
// perulangan for in terhadap array numerik hobbies
for (let index in hobbies) {
    console.info(`Index: ${index}, Value: ${hobbies[index]}`);
}
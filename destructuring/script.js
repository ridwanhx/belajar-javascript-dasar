// # Destructuring
// Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di dalam array atau object ke dalam variabel-variabel
// Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu

// Implementasi
// melakukan pengambilan data/nilai yang terdapat didalam array secara manual
// const names = ['Hana', 'Meysha', 'Berliana'];
// const firstName = names[0];
// const middleName = names[1];
// const lastName = names[2];

// console.info(firstName);
// console.info(middleName);
// console.info(lastName);

// penulisan menggunakan destructuring
// const names = ['Hana', 'Meysha', 'Berliana', 'Neneng', 'Qokom', 'Komalasari'];

// melakukan destructuring
// untuk element array pertama (index 0) disimpan kedalam firstName
// untuk element array kedua (index 1) disimpan kedalam middleName
// untuk element array ketiga (index 2) disimpan kedalam lastName
// untuk element array sisanya, simpan kedalam array baru dengan nama lainnya
// const [firstName, middleName, lastName, ...lainnya] = names;

// console.info(firstName);    // Hana
// console.info(middleName);   // Meysha
// console.info(lastName); // Berliana
// console.info(lainnya);  // ['Neneng', 'Qokom', 'Komalasari']


// Selain bisa diimplementasikan untuk array, destructuring juga bisa diimplementasikan untuk object
// Implementasi
// const person = {
//     firstName: 'May',
//     middleName: 'Hanny',
//     lastName: 'Khoirunnisa',
//     address: {
//         street: 'Jl. yang pernah ada',
//         city: 'Bandung',
//         country: 'Indonesia'
//     },
//     hobby: 'Cooking',
//     channel: 'May Hanny Khoirunnisa'
// };

// contoh manual
// console.info(person.firstName);
// console.info(person.address.street);

// melakukan destructuring
// const { firstName, middleName, lastName, address, ...others } = person;

// melakukan destructing terhadap nested object (dalam kasus ini adalah address) / multilevel destructuring
// const { firstName, middleName, lastName, address: {street, city, country}, ...others } = person;

// console.info(firstName);
// console.info(middleName);
// console.info(lastName);
// karena pada saat destructuring kita mengakses data/property yang ada didalam address, otomatis sekarang kita tidak bisa lagi mengakses address nya langsung seperti ini. Namun, kita bisa mengakses langsung property-property didalamnya
// console.info(address);  // hasilnya akan berupa object yang berisi property beserta nilai
// console.info(street);
// console.info(city);
// console.info(country);
// console.info(others);   // hasilnya akan menjadi object, karena untuk sisa nya tidak kita mention ketika destructuring


// Destructuring Function Parameter
// Destructuring tidak hanya bisa dilakukan di variabel, tapi juga bisa dilakukan di function parameter
// Hal ini membuat kita bisa dengan mudah ketika ingin mengambil nested data dalam array ataupun object di dalam function

// Implementasi
function displayPerson({ firstName, middleName, lastName }) {   // melakukan destructuring
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

const person = {
    firstName: 'Syifa',
    middleName: 'Aurella',
    lastName: 'Fauziah',
};

displayPerson(person);


// Implementasi destructuring function parameter, array edition
function average([value1, value2]) {    // melakukan destructuring
    return (value1 + value2) / 2;
}

console.info(average([25, 40]));    // 32.5
console.info(average([30, 60]));    // 45


// Default Value
// Yang paling menarik di destructuring adalah, kita bisa menambahkan default value
// Jadi misal kita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
// Begitu juga pada object, jika ternyata property nya tidak ada, maka kita bisa menambahkan default value

// Implementasi
const names = ['Muhamad', 'Ridwan'];    // deklarasi array names
const [firstName, lastName, optionalName = 'Corleone'] = names; // deklarasi destructuring dengan default value
// sebagaimana sifat/karakteristik default value pada umumnya, default value pada destructuring juga bersifat sementara, dalam artian value nya akan dipakai hanya jika pada array/object data nya tidak tersedia.

console.info(firstName);
console.info(lastName);
console.info(optionalName);


// Menggunakan Nama Variabel Lain
// Saat melakukan destructuring di Array, kita bisa dengan mudah membuat/menentukan nama variabel sesuka kita
// Namun pada saat melakukan destructuring, kita harus membuat nama variabel sama dengan nama property
// Kita juga bisa menggunakan nama variabel lain saat melakukan destructuring object jika kita mau

// Implementasi
const mahasiswa = {
    name: {
        first: 'Entis',
        last: 'Sutisna'
    },
    npm: '623220024',
    email: 'ridwan@gmail.com',
    jurusan: 'Manajemen Informatika'
};

const { name: {
    first: namaDepan,   // deklarasi variabel namaDepan, yang akan menyimpan value dari property first
    last: namaBelakang  // deklarasi variabel namaBelakang, yang akan menyimpan value dari property last
}, npm: nomorNpm, // deklarasi variabel nomorNpm, yang akan menyimpan value dari property npm
    email, jurusan } = mahasiswa;

console.info(namaDepan);    // otomatis kita cukup memanggil nama variabel yang sebelumnya sudah kita tentukan ketika melakukan destructuring
console.info(namaBelakang); // otomatis kita cukup memanggil nama variabel yang sebelumnya sudah kita tentukan ketika melakukan destructuring
console.info(nomorNpm); // otomatis kita cukup memanggil nama variabel yang sebelumnya sudah kita tentukan ketika melakukan destructuring
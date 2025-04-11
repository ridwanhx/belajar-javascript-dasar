// # Object Method
// Pada tipe data object, kita sudah membahas tentang property di dalam object
// Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di dalam object
// Cara pembuatannya pun sama dengan function sebagai value
// Function di object kadang disebut juga sebagai Object Method
// Implementasi
const greetings = {
    name: 'Ridwan',
    sayHello: function (name = 'Guest') { // parameter name disini berbeda dengan property name diatas, dan memang seharusnya tidak ada korelasinya antara property name, dengan parameter name pada anonymous function ini
        return `Hello, ${name}`;
    }
};

// console.info(greetings.sayHello()); // Hello, undefined | nilai default jika kita tidak mengirimkan argument dan parameter name di sayHello() tidak memiliki nilai default

console.info(greetings.sayHello()); // Hello, Guest | karena kita sudah memberikan nilai default pada parameternya
console.info(greetings.sayHello('Muhamad Ridwan')); // Hello, Muhamad Ridwan

// kita juga bisa memisahkan function dengan peroperty nya, misal
function saySomething(name = 'Guest', period = 'Hello') {
    return (period === 'Hello') ? `${period}, ${name}` : `Good ${period}, ${name}`;
}

const person = {
    name: 'Muhamad Ridwan',
    greetings: saySomething // penulisan tanpa tanda kurung (kita akan menjadikan function saySomething sebagai value / tanpa di eksekusi)
};

console.info(person.greetings());   // Hello, Guest
console.info(person.greetings(person.name, 'Evening')); // Good Evening, Muhamad Ridwan


// Bagaimana caranya menambahkan method ke dalam object ?
// Implementasi
const contoh = {
    age: 21
};
// menambahkan method kedalam object yang sudah ada
// contoh = nama object yang akan ditambahkan property baru kedalamnya
// summary = nama property baru yang akan ditambahkan
// arrow function = nilai daripada property yang ditambahkan
// selain anonymous function, tentunya kita juga bisa menuliskan functionnya menggunakan arrow function, seperti berikut
contoh.summary = (...data) => {
    let result = 0;
    for (let item of data) {
        result += item;
    }
    return result;
};
 
console.info(contoh.summary(10,20,30));
console.info(contoh.summary(...[10,20,30]));
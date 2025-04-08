// # Function Sebagai Value
// Function tidak hanya bisa digunakan sebagai kode program yang di eksekusi, tapi bisa juga sebagai value
// Artinya, function bisa disimpan di variabel, bisa juga dikirim melalui parameter ke function lainnya
// implementasi
function sayHello(name = 'Guest') {
    return `Hello, ${name}`
}

// penulisan function sebagai value dari sebuah variabel
let say = sayHello; // penulisan function sebagai value tidak perlu dilengkapi dengan tanda kurung (), karena jika demikian artinya kita memanggil function nya
// sedangkan penulisan tanpa tanda kurung seperti diatas, hanya mendeklarasikan/menginisiasi si function nya sebagai value kedalam variabel saja
console.info(sayHello('Muhamad Ridwan')); // pemanggilan function langsung
console.info(say('Eria'));    // pemanggilan function melalui variabel


// implementasi function sebagai parameter
function sayMyName(callback) {  // menangkapnya sebagai parameter, tentu untuk penamaan parameternya ini bebas, tidak harus callback tentunya
    return callback('Heisenberg'); // memanggil function | sayHello('Heisenberg')
}

console.info(sayMyName(sayHello)); // mengirim function sebagai argument
console.info(sayMyName(say));  // mengirim function sebagai argument
// # Default Parameter
// Sekarang kita tahu bahwa parameter itu opsional, artinya kita bisa tidak memberi value terhadap parameter
// Parameter juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default value
// konsep ini cocok untuk studi kasus dimana terdapat beberapa data yang mandatory / wajib diisi, akan tetapi boleh untuk kita tidak mengirimkan argument nya
// implementasi
function sayHello(name = 'Guest') {
    let say = `Hello, ${name}`;
    return say;
}

console.info(sayHello());   // ketika kita tidak mengirimkan argument untuk parameternya
console.info(sayHello('Muhamad Ridwan'));   // ketika argument dikirim
console.info(sayHello(undefined));  // ketika kirim argument nya sebagai undefined | output: Hello, Guest
console.info(sayHello(null));  // ketika kirim argument nya sebagai null | output: Hello, null
// kenapa bisa demikian (Hello, null) ?
// karena seperti yang sudah kita tahu, undefined itu kondisi ketika nilai dari suatu variabel / argument belum didefinisikan / bernilai kosong
// sedangkan null adalah tipe data yang juga merupakan nilai/value yang bisa kita tambahkan kedalam variabel / argument, jadi memang sifat nya berbeda.
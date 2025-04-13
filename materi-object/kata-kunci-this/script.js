// # Kata Kunci this
// Kata kunci this adalah referensi ke object milik siapa / pemilik dari tempat kita mengakses (this) nya
// Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya
// Dalam Object Method (ketika kita mendeklarasikan sebuah method didalam object), this merupakan referensi ke object pemilik function nya
// Di global scope, this merupakan referensi ke global object (di browser biasanya Window)
// Dalam function, this merupakan referensi ke global object (di browser biasanya Window)
// Di function dengan strict mode (akan dibahas nanti), this adalah undefined
// Dalam event, this merupakan referensi ke element yang menerima event (dibahas di materi Document Object Model)

// Implementasi
// + Mengakses this di global scope
// - mengakses secara langsung
console.info(this); // output: {} / Window (jika dibuka di console browser)
// - mengakses melalui function
function example() {
    // return this;    // output: Window (jika dibuka di console browser)

    // bagaimana jika diakses melalui nested function ?
    function exampleInner() {
        return this;
    }

    return exampleInner();  // output: Window (jika dibuka di console browser)
}
console.info(example());

// Setelah dilakukan beberapa pembuktian diatas, baik di akses secara langsung, melalui function, ataupun nested function sekalipun, pemilik dari this berasal dari sumber yang sama yaitu Window


// + Mengakses this melalui Object Method
const person = {
    name: 'Muhamad Ridwan',
    sayHello: function (value) {
        // this.name -> mengacu pada Object saat ini (person), dan property name didalamnya
        return `Hello, ${value}. My name is ${this.name}`;
    }
};

console.info(person.sayHello('Eko'));    // Hello, Eko (argument/parameter). My name is Muhamad Ridwan (property value)

// Perlu diingat untuk tidak menuliskan method nya dalam bentuk arrow function, karena seperti yang sudah dijelaskan pada dokumentasi pembelajaran arrow function, tidak memungkinkan untuk mengakses this, untuk dokumentasi lengkapnya bisa kamu baca lagi di materi function > arrow function
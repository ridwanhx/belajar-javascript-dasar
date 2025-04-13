// # Arrow Function di Object
// Sebelumnya kita sudah bahas tentang Arrow Function
// Arrow Function juga bisa kita gunakan sebagai Object Method
// Namun perlu diketahui, Arrow Function tidak bisa digunakan untuk mengakses arguments object, function generator, kata kunci this dan kata kunci super (akan dibahas di materi Javascript Object Oriented Programming)
// Jadi pastikan gunakan Arrow Function hanya memang ketika kita tidak butuh fitur-fitur diatas

// Implementasi
const example = {
    // "paling cocok kalo mau begini studi kasus nya pake anonymous function aja sih, soalnya lebih seru kalau bisa kombinasi dengan kata kunci this".
    // -author
    doLogin: (username, password) => {
        if (username === 'admin' && password === 'rahasia') {
            return `Welcome Back, ${username}`;
        } else {
            return `Sorry, you couldn't access this page.`;
        }
    }
};

console.info(example.doLogin('admin', 'rahasia'));
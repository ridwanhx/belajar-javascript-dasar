// function recursive
// factorial
function factorial(n) {
    // tentukan final termination / terminasi akhir
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// menjumlah deret bilangan
function sumRecursive(n) {
    if (n === 0) {  // terminasi akhir
        return 0;
    } else {
        return n + sumRecursive(n - 1);
    }
}
// menghitung pangkat
function hitungPangkat(base, exponent) {
    // implementasi menggunakan perulangan sederhana
    // let result = 1;
    // for (let i = 0; i < exponent; i++) {
    //     result *= base;
    // }
    // return result;

    // implementasi menggunakan recursive function
    if (exponent === 0) {
        return 1;
    // jika ingin ditambahkan penanganan terkait pangkat negatif
    } else if (exponent < 0) {
        return 1 / hitungPangkat(base, -exponent);
    } else {
        return base * hitungPangkat(base, exponent - 1);
    }
}

console.info(factorial(5));
console.info(sumRecursive(5));
console.info(hitungPangkat(4, 5));
console.info(hitungPangkat(4, -5)); // pangkat negatif
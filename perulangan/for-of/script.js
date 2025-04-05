// # For Of
// Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of, perulangan ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String, dan lain lain..
// Jadi, dalam javascript, terdapat konsep iterable, yang dimana daripada konsep itu salah satunya Array, merupakan tipe data yang bisa di iterasi/iterable.
// For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable
// implementasi
const hobbies = ['coding', 'streaming', 'learning'];
// perulangan for of terhadap array
for (let hobby of hobbies) {
    console.info(hobby);
}

const fullName = 'Muhamad Ridwan';
// perulangan for of terhadap string
for (let character of fullName) {
    console.info(character);    // mencetak setiap digit karakter dari string
}
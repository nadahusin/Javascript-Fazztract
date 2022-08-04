// 1.   Array.prototype.concat() 
// digunakan untuk menggabungkan dua atau lebih array
let x = ['a', 'b', 'c']
let y = ['d', 'e', 'f']
const xy = x.concat(y)

console.log(xy)


// 2.    Array.prototype.push  
// berfungsi untuk menambahkan nilai ke array
const hewan = ['ayam', 'bebek', 'kambing']

hewan.push('kelinci', 'kuda', 'zebra')
console.log(hewan)


// 3.   String.prototype.concat ()  
// berfungsi untuk menggabungkan argumen string ke string panggilan dan mengembalikan string baru
const str1 = 'Dina'
const str2 = 'punya'
const str3 = 'Buku'

console.log(str1.concat(' ', str2, " ", str3))
console.log(str3.concat(' ', str2, " ", str1))


// 4.   String.prototype.toLowerCase () 
// mengembalikan nilai string yang diubah ke huruf kecil
const kalimat = 'Saya mengikuti bootcamp di Fazztrack'

console.log(kalimat.toLowerCase())


// 5.   Set.prototype.add () 
// untuk menyisipkan elemen baru dengan nilai tertentu ke dalam Set objek
// jika belum ada elemen dengan nilai yang sama di file Set.
const set1 = new Set();

set1.add(14)
set1.add(85)
set1.add(61)

for (const item of set1) {
    console.log(item)
}

// 6.   Boolean.prototype.toString() 
// mengembalikan string yang mewakili objek Boolean yang ditentukan.
const contoh1 = new Boolean(true);
console.log(contoh1.toString());

const contoh2 = new Boolean(5);
console.log(contoh2.toString())


// 7.   Array.prototype.filter ()
//membuat salinan dari sebagian larik tertentu, disaring ke elemen dari larik
//tertentu yang diterapkan oleh fungsi yang disediakan.

const angka = [2, 9, 10, 4, -5, -2, 3, 8]

const newAngka = angka.filter((a) => a >= 3)
newAngka.sort(function(x, y) { return x - y })

console.log(newAngka)


// 8.   Boolean.prototype.valueOf()
// mengembalikan nilai primitif suatu objek Boolean
const nilai1 = new Boolean()
console.log(nilai1.valueOf())

const nilai2 = new Boolean('Fazztrack')
console.log(nilai2.valueOf())


// 9.    Map.prototype.delete () 
// menghapus elemen tertentu dari objek Map dengan kunci.
// bernilai true jika elemen dalam objek Map ada dan telah dihapus atau false jika elemen tidak ada.

const map1 = new Map();
map1.set('anggur', 'apel');

console.log(map1.delete('anggur')) // Returns true. Successfully removed.
console.log(map1.has('anggur')) // Returns false. The "anggur" element is no longer present.


/* 10.   Map.prototype.get () 
mengembalikan elemen tertentu dari Map objek.
outputnya adalah Elemen yang terkait dengan kunci yang ditentukan,
atau undefined jika kunci tidak dapat ditemukan di Map objek. */

const sayur = new Map()
sayur.set('bayam', 'sawi')

console.log(sayur.get('bayam'))
console.log(sayur.get('kangkung'))

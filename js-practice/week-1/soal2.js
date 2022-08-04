const matematika = 80
const bahasaIndonesia = 89
const bahasaInggris = 69
const ipa = 89

const rata2 = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4
let a = ""

if (
    typeof matematika == 'number' &&
    typeof bahasaIndonesia == 'number' &&
    typeof bahasaInggris == 'number' &&
    typeof ipa == 'number'
) {
    a = 'Rata-rata = ' + rata2
} else {
    console.log('Input dengan benar')
    return
}
console.log(a)

if (typeof rata2 == 'number') {
    if (rata2 >= 90 && rata2 <= 100) {
        console.log("Grade = A")
    } else if (rata2 >= 80 && rata2 <= 89) {
        console.log("Grade = B")
    } else if (rata2 >= 70 && rata2 <= 79) {
        console.log("Grade = C")
    } else if (rata2 >= 60 && rata2 <= 69) {
        console.log("Grade = D")
    } else {
        console.log("Grade = E")
    }
}
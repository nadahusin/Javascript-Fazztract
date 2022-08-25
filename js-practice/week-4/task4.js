const divideAndSort = (angka) => {
    let cek = angka.toString().split(0)
    let array = []
    for (let i = 0; i < cek.length; i++) {
        array.push(Array.from(cek[i]).sort())
    }

    const hasil = Number(array.flat().join(""))
    console.log(hasil)
}
divideAndSort(5956560159466056)

module.exports = divideAndSort
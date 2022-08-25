function cekKecepatan() {
    return new Promise((resolve, reject) => {
        const waktu = 6000
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Kecepatan OK!')
            }, waktu)
        } else {
            setTimeout(() => {
                reject(new Error('Kecepatan NOT OKE!'))
            }, waktu)
        }
    })
}

// then catch
const kecepatan = cekKecepatan()

kecepatan
    .then(kecepatan => console.log(kecepatan))
    .catch(kecepatan => console.log(kecepatan))

// try catch
// async function cekAsync() {
//     try {
//         const kecepatan = await cekKecepatan()
//         console.log(kecepatan)
//     } catch (err) {
//         console.error(err)
//     }
// }

// cekAsync()
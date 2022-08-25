const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

/*** MENGGUNAKAN PROMISE THEN CATCH ***/

const hari = cekHariKerja("sabtu")
hari
    .then(hari => console.log(hari)) // resolve
    .catch(hari => console.log(hari)) // reject


/*** MENGGUNAKAN ASYNC/AWAIT TRY CATCH ***/
async function cobaAsync() {
    try {
        const hari = await cekHariKerja('senin')
        console.log(hari)
    } catch (err) {
        console.error(err)
    } // pesan di dalam reject masuk kedalam catch
}

cobaAsync()

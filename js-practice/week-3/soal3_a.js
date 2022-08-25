function status() {
    return new Promise((resolve, reject) => {
        const kondisi = true;
        if (kondisi) {
            setTimeout(() => {
                resolve('Sudah Vaksin')
            }, kondisi, 500)
        } else {
            setTimeout(() => {
                reject(new Error('Belum Vaksin'))
            }, kondisi, 1000)
        }
    })
}

// // then catch
// const keterangan = status()

// keterangan
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log(response))

// try catch
async function statusAsync() {
    try {
        const keterangan = await status()
        console.log('OK! : ' + keterangan)
    } catch (err) {
        console.error(err)
    }
}

statusAsync()
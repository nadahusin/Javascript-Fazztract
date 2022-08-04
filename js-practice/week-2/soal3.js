function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (
        typeof nilaiAwal == "number" && typeof nilaiAkhir == "number" && Array.isArray(dataArray) &&
        nilaiAwal < nilaiAkhir && dataArray.length >= 5
    ) {
        const x = dataArray.filter(function(a) {
            return a > nilaiAwal && a < nilaiAkhir
        })
        const urutan = x.sort(function(a, b) {
            return a - b
        })
        if (urutan.length > 0) {
            console.log(urutan)
        } else {
            console.log('nilai tidak ditemukan')
        }

    } else if (nilaiAkhir < nilaiAwal) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (dataArray.length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
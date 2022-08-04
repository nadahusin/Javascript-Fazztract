const printSegitiga = 5

let a = ""
if (typeof printSegitiga == 'number') {
    for (let i = printSegitiga; i > 0; i--) {
        for (let j = 1; j <= i; j++)
            a += j;
        console.log(a)
        a = ''
    }
} else {
    console.log('Data harus number');
}
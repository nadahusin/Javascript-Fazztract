const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(search, limit, callbackFN) {
    nama.forEach((search, limit, arr) => (arr[limit] = search.toLowerCase()))
    let data = nama.filter(function(n) {
        return n.includes(search)
    })
    data.splice(limit, data.length)
    callbackFN(data)
}

function callback(data) {
    console.log(data);
}

searchName("an", 3, callback)
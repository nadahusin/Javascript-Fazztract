let data = {
    id: 1,
    name: "Nada Salsabila",
    email: "nadahusin89@gmail.com",
    hobby: "Mendengarkan Musik",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let data1 = { nama: 'Nada Salsabila', email: 'nadahusin89@gmail.com' }
let data2 = { hobby: 'Mendengarkan Musik' }
let data3 = {...data1, ...data2 }

console.log(data3)

// Distructuring Object
const { street, city } = data.address
console.log(street, city);
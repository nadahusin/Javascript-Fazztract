fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json()
    })

.then(function(user) {
    user.forEach(user => console.log(user.name))
})

/*  #1. Untuk mendapat response dalam bentuk json() maka digunakan method Body.json()
    #2. Hasil dari method Body.json() Menerima respon dalam format plain text menggunakan method Body.text() */
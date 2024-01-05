const bcrypt = require('bcrypt')
let user={
    userName:"Akhila",
    email:"vankamakhila9@gmail.com",
    password:'i love myself',
    cc:'9988776655443322',
    cvv:'177'
}
let new_password=bcrypt.hashSync(user.password,1)
let new_cc=bcrypt.hashSync(user.cc,1)

console.log(user.password)
console.log(new_password)
console.log(user.cc)
console.log(new_cc)
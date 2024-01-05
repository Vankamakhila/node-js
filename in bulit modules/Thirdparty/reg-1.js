const bcrypt = require('bcrypt')
let user = {
    email:"vankamakhila@9gmail.com",
    password:"i hate you",
    mobile:6281213855
}
console.log(user)
let salt = 20;
let new_userName=bcrypt.hashSync(user.password,salt)
/*console.log(user.password)
console.log(new_password)
*/
//store user object into database
user={...user,password:new_password}


console.log(user)
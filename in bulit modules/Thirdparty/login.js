const bcrypt = require('bcrypt')
let user = {
    email:"vankamakila@9gmail.com",
    password:"i love myself",
    mobile:6281213855
}
console.log(user)
let new_password=bcrypt.hashSync(user.password,10)
user={...user,password:new_password}

console.log(user)
//login details
let login_password = 'i love myself'
let flag= bcrypt.compareSync(login_password,user.password)

if(flag){
    console.Log("Login succeess")
}
else{
    console.log("Login fail")
}
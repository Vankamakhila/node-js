let employees =[{id:101,name:"anju",sal:55000},
                {id:102,name:"akhila",sal:65000},
                {id:103,name:"janaki",sal:75000}]

let emp_Str=JSON.stringify(employees)
let emp_Obj = JSON.parse(emp_Str)
console.log(typeof employees)
console.log(typeof emp_Str)
console.log(typeof emp_Obj)
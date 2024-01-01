import fs from 'fs'
import { json } from 'stream/consumers'

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err

    let employees_obj=JSON.parse(data)
    console.log(typeof employees_obj)
    console.log(employees_obj)

    for(let i=0;i<=employees_obj.length-1;i++){
        console.log(employees_obj[i]).name
    }
})
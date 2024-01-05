import fs from 'fs'
import http from 'http'

let sever =http.createServer((rer,resp)=>{
    console.log(req.url)
    fs.readFile("views/index.html",'utf-8',(err,data)=>{
        if(err) throw err
        resp.end(data)
    })
})
sever.listen(8181,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("sever is running")
})

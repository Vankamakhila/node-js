import http from 'http'
import fs from 'fs'
let server=http.createServer((req,resp)=>{
    //resp.end("<h1>Happy Birthday!<h1>")
    //resp.end("<h2>Happy Birthday!.....<h1>")
    fs.readFile("index.html",'utf-8',(err,data)=>{
      if(err) throw err
      resp.end(data) 
    })
    //resp.end('index.html')
})
server.listen(8181,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`sever running....`)
})

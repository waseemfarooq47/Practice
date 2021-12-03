var express = require("express")  //ist step
var app=express(); //step3
var fs= require("fs")
// dotenv

var dotenv=require("dotenv")
dotenv.config()

var port=process.env.PORT || 8882  // 2nd step  it must remain after config

app.get("/",(req,res)=>{
    res.send("hi from the express")
})

app.get("/location",(req,res)=>{
    fs.readFile('data.json',"utf-8",(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
   
})


//port has call back function not like node 
app.listen(port,()=>{   
    console.log("listening to port "+port )
})









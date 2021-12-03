var fs=require('fs');
var express=require("express");
var app=express();
var dotenv=require("dotenv");
var mongo=require("mongodb");   //1step
var MongoClient=mongo.MongoClient;

//here starts mongo connection
dotenv.config();
// var MongoUrl=process.env.mongoUrl;
var MongoUrl=process.env.mongoUrlLive;
var port= process.env.PORT || 3451;

var db;

app.get("/",(req,res)=>{
    res.send("its from express but mongo ")
})

// app.get("/location",(req,res)=>{
//     fs.readFile("newdata.json","utf-8",(err,data)=>{
//         if(err) throw err;
//         res.send(data)
//     })
// })

app.get("/location",(req,res)=>{
    db.collection('location').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})

app.get("/mealtype",(req,res)=>{  // we can route other pages to route on same url
    db.collection("mealtype").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})
app.get("/restaurant",(req,res)=>{  // we can route other pages to route on same url
    db.collection("restaurantdata").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})


MongoClient.connect(MongoUrl,(err,client)=>{
    if(err) console.log("error in connection")
    db=client.db("waseemdata")
    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    })
})






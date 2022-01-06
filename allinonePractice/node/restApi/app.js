var express=require('express');
var fs=require('fs');
var dotenv=require('dotenv');
var app= express();
var mongo=require('mongodb')
var MongoClient=mongo.MongoClient
dotenv.config();

// var mongoUrl=process.env.MongoUrl
var mongoUrl=process.env.mongoUrlLive
var port=process.env.PORT|| 6662

var db;

//default route
app.get('/',(req,res)=>{
    res.send("this is from express")
})

//return all the city
app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if (err) throw error
        res.send(result)
    }) 
})


//return all the mealtype
app.get('/mealtype',(req,res)=>{
    db.collection("mealtype").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//return all the menus
app.get("/menu",(req,res)=>{  // we can route other pages to route on same url
    db.collection("menu").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})

app.get('/orders',(req,res)=>{
    db.collection('orders').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//return all the restaurants
app.get('/restaurants',(req,res)=>{
    db.collection('restaurants').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//return restaurant wrt id
app.get('/restaurants/:id',(req,res)=>{
    var id=parseInt(req.params.id);
    db.collection('restaurants').find({'restaurant_id':id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})


MongoClient.connect(mongoUrl,(err,client)=>{
    if (err) console.log("error while connecting")
    db=client.db("waseemdata")
    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    })
})




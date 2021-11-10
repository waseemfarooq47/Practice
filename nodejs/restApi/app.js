var express =require("express")
var fs = require("fs")
// port

// object of express   also install dotenv
var app=express();
var dotenv=require("dotenv")
dotenv.config();
var mongo=require("mongodb")
var MongoClient=mongo.MongoClient;
var mongoUrl=process.env.MongoLiveUrl
var port=process.env.PORT || 9898 // order matters 

var db;

/*Here is  terms of DB
C create    insert    post
R read      select    get
U update    update    put
D delete    remove    delete*/

app.get("/",(req,res)=>{   // >>>"/" for default
    res.send("hi from express")
})

// app.get("/second",(req,res)=>{  // we can route other pages to route on same url
//     fs.readFile('stock.json','utf-8',(err,data)=>{
//         res.write(data)
//         res.end()
//     })
    
// })


app.get("/location",(req,res)=>{  // we can route other pages to route on same url
    db.collection("location").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})
app.get("/mealtype",(req,res)=>{  // we can route other pages to route on same url
    db.collection("mealtype").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})
app.get("/restaurantdata",(req,res)=>{  // we can route other pages to route on same url
    db.collection("restaurantdata").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})


app.get("/restaurantdata/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    db.collection("restaurantdata").find({"restaurant_id":id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})
app.get("/restaurantmenu",(req,res)=>{  // we can route other pages to route on same url
    db.collection("restaurantmenu").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})










MongoClient.connect(mongoUrl,(err,client)=>{
    if (err) console.log("error while connecting")
    db=client.db("waseemdata")
})

app.listen(port,()=>{
    console.log(`listen to port ${port}`)
})
const mysql=require("mysql");
const express=require("express");
const path = require("path");
const app=express();
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3307,
    password:"root123",
    database:"mydatabase" 
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

// app.get("/page", (req, res)=> {
//     res.sendFile(path.join(__dirname, "page.html"));
// })

app.post("/page", (req, res) => {
   var name =  req.query.name;
   var add = req.query.address;
 Var q = "insert into personal data value (5, '"+name+"', '"+add+"')";

   con.query(q, function(err, result) {
        if(err){
            console.log(err);
        }
        else
        console.log(result);
   });
   res.status(200).sendFile(path.join(__dirname, "page.html"));
});

app.listen(7070);
console.log("port:7070");
// con.query("create database mydatabase",function(err,result){
//     if(err) throw err;
//     else 
//     console.log(result);
// } )
// con.query("show databases",function(err,result){
//     if(err) throw err;
//     else 
//     console.log(result);
// } )
// con.query("create table personaldata(id int primary key, name varchar(20),address varchar(20))",function(err,result){
//     if(err) throw err;
//     else 
//     console.log(result);
// } )
// con.query("insert into personaldata (id,name,address) values (1,'pratiksha','mumbai')",function(err,result){
//     if(err) throw err;
//     else 
//     console.log(result);
// } )
// con.query("select * from personaldata",function(err,result){
//     if(err) throw err;
//     else 
//     console.log(result);
// } )



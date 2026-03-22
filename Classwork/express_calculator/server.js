const express = require('express');
const { parse } = require('node:path');
const app = express();

// app.use(express.json());
app.use(function(req,res,next){
    console.log("request received");
    next();
})

app.get("/sum",(req,res)=>{
    console.log(req.query);
    const a = req.query.a;
    const b = req.query.b;
    // const{a,b} = req.body;
    res.send(parseInt(a)+parseInt(b));
})

app.get("/subtract",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    // const{a,b} = req.body;
    res.send(parseInt(a)-parseInt(b));
})

app.get("/product",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    // const{a,b} = req.body;
    res.send(parseInt(a)*parseInt(b));
})

app.get("/divide",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    // const{a,b} = req.body;
    res.send(parseInt(a)/parseInt(b));
})

app.post("/percentage",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
//   const{a,b} = req.body;
    res.send((parseInt(a)*100)/parseInt(b));
})





app.listen(3000,()=>{
    console.log("Server is running on 3000");
})
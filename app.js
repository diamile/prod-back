const express = require('express');
const app = express();
const path = require("path")
const fs = require('fs');
const http = require('http')

require('dotenv').config()

console.log('ICI')

app.use(express.static(path.join(__dirname,"../client-build")))



app.get("*",async (req,res,next)=>{
    try{
        res.sendFile(path.join(__dirname,"../client-build/index.html"))
    }catch(err){
        if(err){
            console.log('err',err)
            next(err)
        }

    } 
    
})


app.use((err,req,res,next)=>{
    const errors = err.errors
    console.log('dans le stack d\'erreur');
    console.log('stack',errors);
    res.status(400).json(errors);
})



module.exports = app



//app.listen(3000,()=>{console.log('server is running on port 3000')})
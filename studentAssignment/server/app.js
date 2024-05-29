const express = require("express")
const mongoose = require("mongoose")
const dotenv = require ("dotenv").config()
const app = express()

app.get('/', (req, res)=>{
    res.send(("<h2>my world</h2"))
})
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(4001, ()=>{
        console.log("listening already")
    });
    console.log(("connected"))
})
.catch((error)=>{
    console.log(("error"))
})

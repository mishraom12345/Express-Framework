
const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("in a middleware")
    next()// allow request to continue to next middle ware in line 
})

app.use((req,res,next)=>{
    console.log("in another middleware")
    res.send("<h1>hello from express js</h1>")
})


app.listen(3000)
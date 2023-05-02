const express = require('express')
const bodyParser = require('body-parser')
const adminroutes = require('./routes/admin')
const shoprouter = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))


app.use('/admin',adminroutes)

app.use(shoprouter)

app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found</h1>")
})


app.listen(3000)
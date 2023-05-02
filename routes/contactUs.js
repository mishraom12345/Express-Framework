const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/contactUs',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactUs.html'))
})

module.exports = router
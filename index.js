
const PORT=8003
const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/mongoose')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use('/',require('./routes'))

app.listen(PORT, (err)=>{
    if(err){
        console.log('error while starting server',err)
    }
    console.log(`Server is up and running ${PORT}`)
})
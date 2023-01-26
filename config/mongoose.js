const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:root@trainbooking.co01kne.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection

db.on('error',console.error.bind(console,'error connecting to Database'))

db.once('open',function(){
    console.log('Database Connected')
})

module.exports =db;
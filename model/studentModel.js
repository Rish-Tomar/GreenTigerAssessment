// Name, Age, Dept, Date of Joining

const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    department:{
        type:String
    },
    dateOfJoining:{
        type:String
    }
})

const Student = mongoose.model('Student',studentSchema)

module.exports = Student
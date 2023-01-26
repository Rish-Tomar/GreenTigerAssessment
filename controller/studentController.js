const Student = require('../model/studentModel')

module.exports.studentCreate=async function(req,res){

    //recieve data as post request and data inside req body
    console.log('recieved data',req.data)

    const createRecord = await Student.create(req.body);

    if(createRecord){
        console.log('Student Created')
        return res.status(200).json({
            message:'Student created'
        })
    }
    
    return res.status(500).json({
        error:'Student not Created'
    })

}

module.exports.studentShowData=async function(req,res){

    //fetch data from database
    const data=await Student.find()
    console.log('data is ::',data)
    return res.status(200).json({
        message:'show record function',
        data
    })

}

module.exports.studentShowDataById=function(req,res){
    
}

module.exports.editStudentDataById=function(req,res){
    
}

module.exports.deleteStudentDataById=function(req,res){
    
}
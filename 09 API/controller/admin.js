const userSchema = require('../model/userSchema')

module.exports.home = async (req,res)=>{
    const data = await userSchema.find({})
    res.status(200).json({message : "You are in Home Page", data})
}

module.exports.insertData = async (req,res)=>{
    const data = await userSchema.create(req.body)
    res.status(201).json({message : "Data Inserted Successfully", data : data})
}

module.exports.deleteData = async (req,res)=>{
    const isDelete = await userSchema.findByIdAndDelete(req.query.id)
    if(isDelete) res.status(200).json({message : "Data Deleted Successfully"})
    else res.status(400).json({message : "Data Not Deleted"})
}

module.exports.updateData = async (req,res)=>{
    const isEdit = await userSchema.findByIdAndUpdate(req.query.id,  req.body)
    if(isEdit) res.status(200).json({message : "Data Edited Successfully"})
    else res.status(400).json({message : "Data Not Edited"})
}
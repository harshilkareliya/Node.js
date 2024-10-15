const userSchema = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const moment = require('moment')
const jwt = require('jsonwebtoken')

module.exports.viewUsers = async (req,res)=>{
    const data = await userSchema.find({})  
    res.status(200).json({data})    
}

module.exports.insertUser = async (req,res)=>{
    const isAlready = await userSchema.findOne({email : req.body.email})
    if(isAlready){
        return res.status(200).json({message : "Email already exists"})
    }

    const token = jwt.sign({ userData: user }, 'node', { expiresIn: '1h' });
    if(req.file){
        req.body.image = req.file.path;
    }
    req.body.password = await bcrypt.hash(req.body.password,10)
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');

    const data = await userSchema.create(req.body)
    res.status(201).json({message : "Data Inserted Successfully", data : data,token})
}

module.exports.login = async (req,res)=>{
    const user = await userSchema.findOne({email : req.body.email})
    if(!user) return res.status(401).json({message : "Invalid Email"})

    const isCompare = await bcrypt.compare(req.body.password,user.password)
    if(isCompare){
        const token = jwt.sign({ userData: user }, 'node', { expiresIn: '1h' });
        res.status(200).json({token})
    }
    else res.status(401).json({message :  "Invalid Password"})
}

module.exports.deleteUser = async (req,res)=>{
    const isDelete = await userSchema.findByIdAndDelete(req.query.id)
    if(isDelete) res.status(200).json({message : "Data Deleted Successfully"})
    else res.status(400).json({message : "Data Not Deleted"})
}

module.exports.updateUser = async (req,res)=>{
    const isEdit = await userSchema.findByIdAndUpdate(req.query.id,  req.body)
    if(isEdit) res.status(200).json({message : "Data Edited Successfully"})
    else res.status(400).json({message : "Data Not Edited"})
}
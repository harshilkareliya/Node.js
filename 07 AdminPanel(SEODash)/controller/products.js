const productSchema = require('../model/products')
const path = require('path')
const fs = require('fs')

module.exports.addProduct = (req,res)=>{
    res.render('pages/products/addProduct')
}

module.exports.addProductPost = async (req,res)=>{
    if(req.files){
        req.body.productImage = req.files.productImage[0].path
    }
    const data = await productSchema.create(req.body)
    data ? res.redirect('back') : console.log("Error While Add Product");   
}

module.exports.viewProducts = async (req,res)=>{
    const data = await productSchema.find({})
    res.render('pages/products/viewProducts',{data})
}

module.exports.editProduct = async (req,res)=>{
    const data = await productSchema.findById(req.query.id)
    data ? res.render('pages/products/editProduct', {data}) : console.log('Error While editing product');
}

module.exports.updateProduct = async (req,res)=>{
    const data = await productSchema.findById(req.query.id)

    if(req.files.productImage){
        req.body.productImage = req.files.productImage[0].path
        fs.unlinkSync(data.productImage)
    } else{
        req.body.productImage = data.productImage
    }
    const isUpdate = await productSchema.findByIdAndUpdate(req.query.id, req.body)
    isUpdate? res.redirect('/products/viewProducts') : console.log("Error While updating product");
}

module.exports.deleteProduct = async (req,res)=>{
    const data = await productSchema.findById(req.query.id)
    console.log(data.productImage);
    
    if(data.productImage){
        const isdelete = fs.unlinkSync(data.productImage)
    }
    const isdelete = await productSchema.findByIdAndDelete(req.query.id)
    isdelete ? res.redirect('/products/viewProducts') : console.log("Error While deleting product");
}
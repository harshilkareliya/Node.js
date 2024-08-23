const express = require('express');
const app = express();
const db = require('./config/db')
const bookSchema = require('./model/bookSchema')

app.use(express.urlencoded())
app.set('view engine','ejs')

app.get('/', async (req,res)=>{
    const bookData = await bookSchema.find({})
    res.render('index',{bookData})
})

app.post('/insertData',async (req,res)=>{
    const isInsertData = await bookSchema.create(req.body)
    isInsertData? res.redirect('back') : console.log('Data not Inserted')
})

app.get('/deleteData', async (req,res)=>{
    const isDeleteData = await bookSchema.findByIdAndDelete(req.query.id)
    isDeleteData? res.redirect('back') : console.log('Data not Deleted')
})

app.get('/editData', async(req,res)=>{
    const data = await bookSchema.findById(req.query.id)
    data? res.render('edit', {data}) : console.log('Data not found')
})

app.post('/updateData', async (req,res)=>{
    const isUpdateData = await bookSchema.findByIdAndUpdate(req.query.id, req.body)
    isUpdateData? res.redirect('/') : console.log('Data not Updated')
})

app.listen(1008,(err)=>{
    err ? console.log(err) : console.log('Server Start on port 1008')
})
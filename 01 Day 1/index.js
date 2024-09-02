const express = require('express');
const port = 1008;
const app = express();
const db = require('./config/db');
const crudSchema = require('./module/crudSchema');
app.use(express.urlencoded())
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    let data = await crudSchema.find({})
    res.render('index', {data})
})

app.post('/insertData', async (req, res) => {
    const data = await crudSchema.create(req.body)
    data ? res.redirect("back") : console.log('Data not Inserted')
})

app.get('/deleteData', async (req, res) => { 
    const data = await crudSchema.findByIdAndDelete(req.query.id)
    data? res.redirect("back") : console.log('Data not Deleted')  
})

app.get('/editData', async (req,res)=>{
    const singleData = await crudSchema.findById(req.query.id)
    singleData ? res.render('edit', {singleData}) : console.log('Data not found')
})

app.post('/updateData', async (req,res)=>{
    const data = await crudSchema.findByIdAndUpdate(req.query.id, req.body)
    data ? res.redirect("/") : console.log('Data not Updated')
})

app.listen(port, (err)=> {
    err ? console.log(err) : console.log("Server Started on port " + port);
})

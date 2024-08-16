const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TODO = require('./todoSchema')
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

const db = require('./db')
var allTask = []

app.get('/', async (req, res) => {

    allTask = await TODO.find()
    const activeTask = allTask.filter((el) => el.iscomplete == false);
    const completeTask = allTask.filter((el) => el.iscomplete == true);
    if(allTask.length == 0){
        res.render('noTask')
    } else{
        res.render('index', { activeTask, completeTask });
    }

});

app.post('/addtask',async (req, res) => {
    const { task, priority } = req.body

    const obj = {
        task: task,
        priority: priority,
        iscomplete : false
    }
    const data = await TODO.create(obj);
    // res.send(data)
    res.redirect('/')
})

app.get('/deleteTask',async (req, res) => {
    const id = req.query.id;
    console.log(id);
    try {
        // Use ObjectId to ensure the ID format is correct
        await TODO.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        console.error("Error deleting task:", err);
        res.status(500).send("Error deleting task");
    }
})

app.get('/editTask',async (req, res) => {
    const id = req.query.id
    const task = await TODO.findById(id); 
    res.render('edit', { task })
})

app.post('/updateTask',async (req, res) => {
    const { id, task, priority } = req.body
    await TODO.findByIdAndUpdate(id, { task, priority});

    res.redirect('/')
})

app.get('/iscomplete', async (req, res) => {
    const id = req.query.id
    const from = req.query.from
    const data = await TODO.findById(id)
    if (data) {
        data.iscomplete = !data.iscomplete
        await data.save()
    }

    if(from == 'activeTask'){
        res.redirect('/activeTask')
    } else if(from == 'completeTask'){
        res.redirect('/completeTask')
    } else{
        res.redirect('/')
    }
})

app.get('/activeTask',async(req,res)=>{
    const activeTask = await TODO.find({iscomplete : false})
    res.render('activeTask',{activeTask})
})

app.get('/completeTask',async (req,res)=>{
    const completeTask = await TODO.find({iscomplete : true})
    res.render('completeTask',{completeTask})
})

app.listen(3000, () => console.log("Server is starting... on port 3000"))
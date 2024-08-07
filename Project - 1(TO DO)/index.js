const express = require('express')
const app = express()
app.use(express.urlencoded())
app.set('view engine','ejs')

var allTask = [
    {
        id : 1,
        task : 'Learning',
        priority : 'High'
    }
]

app.get('/',(req,res)=>{
    res.render('index', {allTask})
})



app.post('/addtask',(req,res)=>{
    const {task, priority} = req.body

    const obj = {
        id : allTask[allTask.length-1].id + 1,
        task : task,
        priority: priority
    }

    allTask.push(obj)
    res.redirect('/')
})

app.get('/deleteTask', (req,res)=>{
    const id = req.query.id

    const tasks = allTask.filter((el)=>{
        return el.id != id
    })

    allTask = tasks
    res.redirect('/')
})

app.get('/editTask',(req,res)=>{
    const id = req.query.id

    const task = allTask.find(el=>el.id == id)

    res.render('edit',{task})
})

app.post('/updateTask',(req,res)=>{
    const {id, task} = req.body
    const data = allTask.find(el=>el.id == id)
    
    if(data){
        data.id = id,
        data.task = task
    }

    res.redirect('/')
})

app.listen(3000,console.log("Server is starting... on port 3000"))


const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

var allTask = [
    {
        id: 1,
        task: 'Learning',
        priority: 'High',
        iscomplete: false
    }
]

app.get('/', (req, res) => {
    const activeTask = allTask.filter((el) => el.iscomplete == false);
    const completeTask = allTask.filter((el) => el.iscomplete == true);

    res.render('index', { activeTask, completeTask });
});

app.post('/addtask', (req, res) => {
    const { task, priority } = req.body

    const obj = {
        id: allTask.length > 0 ? allTask[allTask.length - 1].id + 1 : 1,
        task: task,
        priority: priority,
        iscomplete : false
    }

    allTask.push(obj)
    res.redirect('/')
})

app.get('/deleteTask', (req, res) => {
    const id = req.query.id

    allTask = allTask.filter((el) => el.id != id)

    res.redirect('/')
})

app.get('/editTask', (req, res) => {
    const id = req.query.id

    const task = allTask.find(el => el.id == id)

    res.render('edit', { task })
})

app.post('/updateTask', (req, res) => {
    const { id, task } = req.body
    const data = allTask.find(el => el.id == id)

    if (data) {
        data.task = task
    }

    res.redirect('/')
})

app.get('/iscomplete', (req, res) => {
    const id = req.query.id
    const data = allTask.find(el => el.id == id)

    if (data) {
        data.iscomplete = !data.iscomplete
    }

    res.redirect('/')
})

app.listen(3000, () => console.log("Server is starting... on port 3000"))

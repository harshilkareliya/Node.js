const express = require('express');
const port = 1008;
const app = express();
const db = require('./config/db');
const crudSchema = require('./module/crudSchema');
app.use(express.urlencoded())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
    // res.end("Hello World!");
})

app.post('/insertData', (req, res) => {
    console.log(req.body);
})

app.listen(port, (err)=> {
    err ? console.log(err) : console.log("Server Started on port " + port);
})

const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');
const cookie = require('cookie-parser');

app.use(cookie());
app.use(express.urlencoded());
app.set('view engine','ejs');

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',require('./routes'))

app.listen(1008,(err)=>{
    console.log(err ? err : 'Server is running on port 1008');
})
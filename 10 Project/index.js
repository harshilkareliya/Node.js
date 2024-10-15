const express = require('express');
const app = express();
const db = require('./config/db')
const cookie = require('cookie-parser');
const session = require('express-session')

app.use(express.urlencoded())
app.use(cookie())
app.use(
    session({
      name: "Users",
      secret: "keyboard",
      resave: true,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 * 1 }
    })
);

app.use('/', require('./routes'))

app.listen(1008,(err)=>{
    console.log(err? err : "Server is running on port 1008");
})
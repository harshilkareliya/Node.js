const { urlencoded } = require('body-parser');
const exp = require('constants');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
app.set('view engine','ejs')
app.use(express.urlencoded())

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/',require('./routes'))

app.listen(port,(err)=>{
    console.log(err ? err : `Server is running on port ${port}`);
})

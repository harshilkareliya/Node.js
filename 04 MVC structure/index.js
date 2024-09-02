const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.use('/', require('./routes'));


app.listen(1008, (err) => {
    console.log(err ? err : 'Server Started On port 1008');
});
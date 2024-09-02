const express = require('express');
const app = express();
const path = require('path');

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "images" and "styles" folder
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Use routes
app.use('/', require('./routes'));


// Start the server
app.listen(1008, (err) => {
    console.log(err ? err : 'Server Started On port 1008');
});

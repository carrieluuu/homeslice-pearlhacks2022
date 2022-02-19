// require modules
const express = require('express');
const morgan = require('morgan');

//create application
const app = express();

//configure application
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware functionss
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(morgan('tiny'));
// app.use(methodOverride('_method'));

//set up routes
app.get('/', (req, res) => {
    res.render('index');
});

//start the server
app.listen(port, host, () => {
    console.log('Server is running on port', port);
});
// require modules
const express = require('express');
const morgan = require('morgan');
const listingRoutes = require('./routes/listingRoutes');
const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'pc34GcKx3w8po3mRJcW8z7Jtco2PKQnjhRbj7nTvreNcmyADokotnGh8fwcYseDVpakLW7SNc77SMS2NN9ygpLFkFnMEsy86zGhZ',
    baseURL: 'http://localhost:3000',
    clientID: 'g3xYTgJ1EV83VDLANe3mYzSjIpX5hG4a',
    issuerBaseURL: 'https://dev-v1gzv39i.us.auth0.com'
  };

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
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//set up routes
app.get('/', (req, res) => {
    // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    res.render('index', { isAuthenticated: req.oidc.isAuthenticated(), user: req.oidc.user });
});

app.use('/listings', listingRoutes);

//start the server
app.listen(port, host, () => {
    console.log('Server is running on port', port);
});
// require modules
const express = require('express');
const morgan = require('morgan');
const listingRoutes = require('./routes/listingRoutes');
const { auth } = require('express-openid-connect');
const multer = require("multer");
const path = require('path');
const fs = require('fs');
const { Client } = require("pg");
const parse = require("pg-connection-string").parse;

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'pc34GcKx3w8po3mRJcW8z7Jtco2PKQnjhRbj7nTvreNcmyADokotnGh8fwcYseDVpakLW7SNc77SMS2NN9ygpLFkFnMEsy86zGhZ',
    baseURL: 'http://localhost:3000',
    clientID: 'g3xYTgJ1EV83VDLANe3mYzSjIpX5hG4a',
    issuerBaseURL: 'https://dev-v1gzv39i.us.auth0.com'
};

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
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

const upload = multer({
    dest: "public/img"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
  });

// getting the secret connection string  
var connectionString = fs.readFileSync(
    './db/db-connection-info.secret',
    'utf8',
    function (err,data) {
      if (err) {
        return err;
      }
      return data;
  });

// using the connection string and db info to store in an object  
var db_config = parse(connectionString);
db_config.port = 26257;
db_config.database = 'defaultdb';
const client = new Client(db_config);

function convertToTimestamp(regularDate){
    return Math.floor(new Date(regularDate).getTime()/1000);
}

async function db_upload(db_obj) {
    try {
        await client.connect();
        await client.query("BEGIN;");
        const queryText = 'insert into listings(host_name, phone_num, email, college, housing_type, address_1, address_2, city, state, zip, start_stay, end_stay, price, offering_description, num_of_bedrooms, num_of_bathrooms, amenities, image_path) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING id'
        const values = [
            db_obj.name,
            db_obj.phone,
            db_obj.email,
            db_obj.college,
            db_obj.type,
            db_obj.address1,
            db_obj.address2,
            db_obj.city,
            db_obj.state,
            db_obj.zip,
            convertToTimestamp(db_obj.start_date),
            convertToTimestamp(db_obj.end_date),
            Number(db_obj.price),
            db_obj.offering,
            db_obj.bedrooms,
            db_obj.bathrooms,
            db_obj.amenities,
            db_obj.img_path
        ]
        const result = await client.query(queryText, values)

        await client.query("COMMIT;");
        await client.end()
        return result.rows[0].id
    } catch (err) {
        console.log(`error connecting: ${err}`)
    }
}


app.post(
    "/listings",
    upload.single("image" /* name attribute of <file> element in your form */),
    (req, res) => {
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, `./public/img/listings/${req.file.originalname}`);
        // console.log(req.body);
        // console.log(req.file);
        let db_data = req.body;
        db_data.img_path = targetPath
        if (db_data.img_path.includes(path.win32.sep)){
            db_data.img_path = db_data.img_path.split(path.sep);
            db_data.img_path = db_data.img_path.slice(-2, db_data.img_path.length).join(path.posix.sep);
        }
        

        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
            db_upload(db_data);
            fs.rename(tempPath, targetPath, err => {
                // console.log(tempPath);
                // console.log(targetPath);
                if (err) return handleError(err, res);

                res.redirect(301, `/listings`)
            });
        } else {
            fs.unlink(tempPath, err => {
                if (err) return handleError(err, res);

                res
                    .status(403)
                    .contentType("text/plain")
                    .end("Only .png files are allowed!");
            });
        }
    }
);

app.use('/listings', listingRoutes);

//start the server
app.listen(port, host, () => {
    console.log('Server is running on port', port);
});
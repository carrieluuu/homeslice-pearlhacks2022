const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const parse = require("pg-connection-string").parse;
const { Client } = require("pg");

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

let listings;
(async () => {
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM listings')
        
        // console.log('\nPrinting individual table entries messages:')
        listings = result.rows

        // console.log('\n')
        await client.end()
    } catch (err) {
        console.log(`error connecting: ${err}`)
    }
})().catch((err) => console.log(err.stack));

// const listings = [
//     {
//         id: '1',
//         title: 'East Village 4 Month Lease',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sapien nibh, ac efficitur diam pellentesque ut.',
//         author: 'Zaina',
//         createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
//     },
//     {
//         id: '2',
//         title: 'UNCC East Deck 1 year',
//         content: 'Aliquam sagittis ut ipsum vitae fringilla. Etiam at orci scelerisque, egestas lectus in, feugiat tortor.',
//         author: 'Walrus',
//         createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
//     }
// ];

exports.find = () => listings; 

exports.save = listing => {
    listing.id = uuidv4();
    listing.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    listings.push(listing);
    //change this with database later
}

exports.search = search => {
    listing.id = uuidv4();
    listing.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    listings.push(listing);
    //change this with database later
}

exports.findById = id => listings.find(listings=>listings.id ===  id);

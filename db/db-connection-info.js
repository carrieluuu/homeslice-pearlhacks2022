const parse = require("pg-connection-string").parse;
const { Client } = require("pg");
const fs = require('fs');

(async () => {

  var connectionString = fs.readFileSync(
      './db/db-connection-info.secret',
      'utf8',
      function (err,data) {
        if (err) {
          return err;
        }
        return data;
    });
  var config = parse(connectionString);
  config.port = 26257;
  config.database = 'defaultdb';
  const client = new Client(config);

  // Printing individual entries
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM sample')
    console.log('\nPrinting individual table entries (id and message):')
    console.log(result.rows)
  } catch (err) {
    console.log(`error connecting: ${err}`)
  }

  // Printing individual row
  try {
    const result = await client.query('SELECT * FROM sample')
    console.log('\nPrinting individual table entry (first row\'s message):')
    console.log(result.rows[0].message)
  } catch (err) {
    console.log(`error connecting: ${err}`)
  }

  // Printing all entries
  try {
    const result = await client.query('SELECT message FROM sample')
    
    console.log('\nPrinting individual table entries messages:')
    for(var i=0; i<result.rows.length; i++){
      console.log(result.rows[i].message)
    }
    console.log('\n')
  } catch (err) {
    console.log(`error connecting: ${err}`)
  }

  // Printing all entries from listings
  try {
    const result = await client.query('SELECT * FROM listings')
    
    console.log('\nPrinting individual table entries messages:')
    for(var i=0; i<result.rows.length; i++){
      console.log(result.rows[i])
    }
    console.log('\n')
    await client.end()
  } catch (err) {
    console.log(`error connecting: ${err}`)
  }

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));
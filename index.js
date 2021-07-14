const express = require('express');
const { Client } = require('pg');
const app = express();

const port = process.env.PORT || 4444;

//add middlewares
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
 res.render('index', {});
// var dbOpts = {
//       connectionString: process.env.DATABASE_URL, 
//       ssl : true
//     }
// const client = new Client(dbOpts);    
// client.connect();    
// client.query('SELECT * FROM salesforce.contact;', (err, dbRes) => {
//       if (err) throw err;     
 
//       res.render('index',{
//         results : dbRes.rows
//       });
 
//       client.end();
//     });
 
// client.end();
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
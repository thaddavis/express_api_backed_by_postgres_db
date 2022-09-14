'use strict'

const express = require('express')
const pg = require('pg');
const bodyParser = require('body-parser')

const PORT = 5000
const HOST = '0.0.0.0'

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// POSTGRES_DB: postgresdb
// POSTGRES_USER: admin
// POSTGRES_PASSWORD: psltest

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'admin',
//   host: 'postgres.db',
//   // host: '127.0.0.1',
//   database: 'postgresdb',
//   // password: 'psltest',
//   password: 'psltest',
//   port: 6000,
//   // port: 56380
// })

const cs = 'postgres://yourname:yourpassword@postgres.db:6000/postgresdb';
// const cs = 'postgres://yourname:yourpassword@localhost:7000/postgresdb';



const client = new pg.Client(cs);

(async function() {
  try {
    console.log('CONNECTING...')
    await client.connect();
    console.log('OK? : ) ...')
  } catch(e) {
    console.log('ERROR : ) ...')
    console.error(e)
    console.log('___ --- ___ --- ___')
  }
})()

app.get('/', (req, res) => {
  res.send('Hello world \n')
});

app.get('/info', (req,res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/db', (req,res) => {
    try {
        
        client.query('SELECT * FROM company', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })

    } catch(e) {
        res.send(e.toString())
    }
})

app.listen(PORT, HOST)

console.log(`Running version 3 on http://${HOST}:${PORT}`)
// Requiring Express from node modules
const express = require('express');

// @ADD this, to require dotenv and configure it
const dotenv = require('dotenv').config();

// Creating express instance and save it to app variable
const app = express()

// Setup the app to serve static files
app.use(express.static('./public'))

// Setup our express server with env port
let port = process.env.PORT;
app.listen(port, ()=>{
  console.log(`App is running on port ${ port }`)
})


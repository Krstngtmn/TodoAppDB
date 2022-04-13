
// Modules //
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

//Routes setup //

const tasksRouter = require('./routes/tasksRoutes');

//Mongoose connection and config//

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.DB_SERVER)
.then(()=> console.log('Connected to DB server'))
.catch((err) => console.log(err));

// Create server //

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', tasksRouter); 


//Server //

const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, hostname, (err) => {
  if (err) {
    return console.log("Something went wrong: " + err);
  } else {
    console.log(`Server running on port ${port}...`)
  }
})
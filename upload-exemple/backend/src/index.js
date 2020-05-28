const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();//servidor express

/***
 * Database setup
 */
mongoose.connect(
    'mongodb://localhost:27017/upload',
     {
    useNewUrlParser: true
    }
);

app.use(express.json()); //lidar com json
app.use(express.urlencoded({extended: true})); //enviar aqrui
app.use(morgan('dev'))

app.use(require('./routes'))

app.listen(3000); //porta
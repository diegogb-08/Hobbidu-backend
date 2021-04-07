const mongoose = require('mongoose');

const MONGO_SERVER = process.env.MONGO_SERVER || 'mongodb'
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'Hobbidu';
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || null;
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUEARY_STRING = MONGO_USER ?

`${MONGO_SERVER}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DBNAME}?retryWrites=true&w=majority`

:

`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

// mongodb+srv://Diegogb-08:<password>@cluster0.kmacc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// Connection to DB
console.log(QUEARY_STRING)
const db = mongoose.connect(QUEARY_STRING,{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected to Database'))
.catch((error) => console.log(error));

module.exports = db;


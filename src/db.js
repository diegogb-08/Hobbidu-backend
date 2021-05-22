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

// Connection to DB
const db = mongoose.connect(QUEARY_STRING,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(console.log('Connected to Database'))
.catch((error) => console.log(error));

module.exports = db;


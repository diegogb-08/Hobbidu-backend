require('dotenv').config()
const express = require('express');
const router = require('./router');
const db = require('./db');
const cors = require('cors')
const app = express();
const port = 3000;
const { getFileStream } = require('./middlewares/s3')

// Middleware
app.use(express.json())
app.use(cors())
app.use(router);


// Get images from AWS

app.get('/images/:key', (req, res) => {

    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res)
})

// Start server
db
.then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))


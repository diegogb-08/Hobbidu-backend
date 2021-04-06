const express = require('express');
const router = require('./router');
const db = require('./db');
const cors = require('cors')
const app = express();
const port = 3000;


// Middleware
app.use(express.json())
app.use(cors())
app.use(router);



// Start server
db
.then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))


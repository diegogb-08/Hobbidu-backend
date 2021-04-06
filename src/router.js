const router = require('express').Router();

const routerUser = require('./routes/user.router.js')



router.use('/user', routerUser);


module.exports = router;
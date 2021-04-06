const router = require('express').Router();

const routerUser = require('./routers/user.router')



router.use('/user', routerUser);


module.exports = router;
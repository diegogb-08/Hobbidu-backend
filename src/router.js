const router = require('express').Router();

const routerUser = require('./routers/user.router')
const routerHobby = require('./routers/hobby.router')


router.use('/user', routerUser);
router.use('/hobby', routerHobby);


module.exports = router;
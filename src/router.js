const router = require('express').Router();

const routerUser = require('./routers/user.router')
const routerHobby = require('./routers/hobby.router')
const routerPost = require('./routers/post.router')

router.use('/user', routerUser);
router.use('/hobby', routerHobby);
router.use('/post', routerPost);

module.exports = router;
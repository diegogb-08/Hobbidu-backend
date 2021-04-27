const router = require('express').Router();

const routerUser = require('./routers/user.router')
const routerHobby = require('./routers/hobby.router')
const routerPost = require('./routers/post.router')
const routerEvent = require('./routers/event.router')
const routerFollower = require('./routers/follower.router')

router.use('/user', routerUser);
router.use('/hobby', routerHobby);
router.use('/post', routerPost);
router.use('/event', routerEvent);
router.use('/follower', routerFollower);

module.exports = router;
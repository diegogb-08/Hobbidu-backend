const router = require('express').Router();
const express = require('express');
const app = express();
const routerUser = require('./routers/user.router');
const routerHobby = require('./routers/hobby.router');
const routerPost = require('./routers/post.router');
const routerEvent = require('./routers/event.router');
const routerFollower = require('./routers/follower.router');
const routerComment = require('./routers/comment.router');

router.use('/user', routerUser);
router.use('/hobby', routerHobby);
router.use('/post', routerPost);
router.use('/event', routerEvent);
router.use('/follower', routerFollower);
router.use('/comment', routerComment);

// Get images from AWS

app.get('/images/:key', async (req, res) => {
    const key = req.params.key;
    const readStream = await getFileStream(key);

    readStream.pipe(res)
})



module.exports = router;
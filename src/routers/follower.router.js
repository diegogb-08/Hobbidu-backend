const router = require('express').Router();
const followerController = require('../controllers/follower.controller');


// API routes

//GET - Return all Followers in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await followerController.indexAllFollowers())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return All Followers and followings of 1 user

router.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await followerController.indexFollowersByUser(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a Follower by ID

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await followerController.indexById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});



//POST - Create a new Follower in the DB & Login

router.post('/',async (req, res) => {
    try{
        res.json(await followerController.follow(req.body));
    } catch( err ){
        return res.status(500).json({
            message: err.message
        });
    }
})

//DELETE - Delete a Follower with specified ID

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await followerController.unFollow(id);
        res.json({status,id});
    } catch( err ) {
        return res.status(500).json({
            message: err.message
     });   
    }
});

module.exports = router;
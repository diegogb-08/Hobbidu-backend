const router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth');

// API routes

//GET - Return all Posts in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await postController.findAllPosts())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a Post from specified User Id

router.get('/search/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await postController.findPostByUserId(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a Post with specified ID

router.get('/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await postController.findPostById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//POST - Create a new Post in the DB & Login

router.post('/',async (req, res) => {
    try{
        const post = await postController.createNewPost(req.body);
        res.json(post);
    } catch( err ){
        console.log(err)
        return res.status(500).json({
            message: err.message
        });
    }
})

//DELETE - Delete a Post with specified ID

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await postController.deletePost(id);
        res.json({status,id});
    } catch( err ) {
        return res.status(500).json({
            message: err.message
     });   
    }
});

module.exports = router;
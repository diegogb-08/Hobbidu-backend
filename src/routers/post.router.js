const router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/uploads')

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

router.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await postController.findPostByUserId(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a Post from specified User Id

router.get('/hobby/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await postController.findPostByHobbyId(id))
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

router.post('/', upload.single('image'), async (req, res) => {
    try{

        console.log(req.body)
        console.log(req.file)
        const post = await postController.createNewPost(req.body,req.file.path);
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
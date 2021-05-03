const router = require('express').Router();
const commentController = require('../controllers/comment.controller');


// API routes

//GET - Return all Comments in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await commentController.indexAllComments())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return All Comments of a Post

router.get('/post/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await commentController.indexCommentsByPost(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return All Comments of an Event

router.get('/event/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await commentController.indexCommentsByEvent(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message602415199
        });
    }
});

//GET - Return a Comment by ID

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await commentController.indexById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});



//POST - Create a new Comment in the DB & Login

router.post('/',async (req, res) => {
    try{
        res.json(await commentController.createComment(req.body));
    } catch( err ){
        return res.status(500).json({
            message: err.message
        });
    }
})

//DELETE - Delete a Comment with specified ID

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await commentController.deleteComment(id);
        res.json({status,id});
    } catch( err ) {
        return res.status(500).json({
            message: err.message
     });   
    }
});

module.exports = router;
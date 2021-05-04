const router = require('express').Router();
const hobbyController = require('../controllers/hobby.controller');
const auth = require('../middlewares/auth');

// API routes

//GET - Return 15 Hobbys in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await hobbyController.findLimitedHobbys())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return All Hobbys in the DB

router.get('/all', async (req, res) => {
    try {
        res.json(await hobbyController.findAllHobbys())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a Hobby from specified User Id

router.get('/search/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await hobbyController.findHobbyByUserId(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//GET - Return a Hobby with specified Hobby_name ?query=
router.get('/search',async (req, res) => {
    try {
        const hobby = await hobbyController.findByHobbyName(req.query);
        res.json(hobby)
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a Hobby with specified ID

router.get('/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await hobbyController.findById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//POST - Create a new Hobby in the DB & Login

router.post('/',async (req, res) => {
    try{

        const hobby = await hobbyController.createNewHobby(req.body);
        res.json(hobby);
    } catch( err ){

        return res.status(500).json({
            message: err.message
        });
    }
})

//DELETE - Delete a Hobby with specified ID

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await hobbyController.deleteHobby(id);
        res.json({status,id});
    } catch( err ) {
        return res.status(500).json({
            message: err.message
     });   
    }
});

module.exports = router;
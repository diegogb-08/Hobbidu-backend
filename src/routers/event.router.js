const router = require('express').Router();
const eventController = require('../controllers/event.controller');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/uploads');
const { route } = require('./user.router');

// API routes

// Create an Event

router.post('/', async (req, res) => {

    try{
        res.json(await eventController.createNewEvent(req.body))
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})

// Get all Events

router.get('/', async (req, res) => {

    try{
        res.json(await eventController.indexAllEvents())
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})





module.exports = router;
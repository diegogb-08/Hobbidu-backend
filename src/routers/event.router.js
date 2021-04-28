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

// Get all Events by user Id

router.get('/user/:id', async (req, res) => {

    try{
        res.json(await eventController.findEventByUserId(req.params.id))
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})

// Get all Events by hobby Id

router.get('/hobby/:id', async (req, res) => {

    try{
        res.json(await eventController.findEventsByHobbyId(req.params.id))
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})

// List Events by coords

router.post('/distance', async (req, res) => {

    try{
        res.json(await eventController.indexEventsByCoords(req.body))
    } catch (err) {

        return res.status(500).json({
            message: err.message
        });
    }
});

// Get all Events by Id

router.get('/:id', async (req, res) => {

    try{
        res.json(await eventController.findById(req.params.id))
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})


// Update an Event by ID with verified user

router.put('/:id', async (req, res) => {

    try{
        let user_id = req.params.id
        res.json(await eventController.updateEvent(user_id,req.body))
    } catch (err){

        return res.status(500).json({
            message: err.message
        });
    }
})

// Update an Event by ID with verified user

router.put('/join/:id', async (req, res) => {

    try{
        let id = req.params.id
        res.json(await eventController.joinEvent(id,req.body.user_id))
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})

router.delete('/:id', async (req, res) => {

    try{
        let user_id = req.params.id
        let event = await eventController.deleteEvent(user_id,req.body)
        res.json({deleted, event})
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;
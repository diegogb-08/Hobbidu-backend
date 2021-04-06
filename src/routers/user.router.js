const router = require('express').Router();
const userController = require('../controllers/user.controller');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');

// API routes

//GET - Return all Users in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//GET - Return a User with specified User_name ?query=
router.get('/search',async (req, res) => {
    try {
        const user = await userController.findByUserName(req.query);
        console.log('UUUUSSSSEEEEEERRRRRRR', user)
        res.json(user)
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return a User with specified User_name ?query=
router.get('/email',async (req, res) => {
    try {
        const user = await userController.findUserByEmail(req.query);
        res.json(user)
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});



//GET - Return a User with specified ID

router.get('/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.findById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

 //POST - SignIn a new User in the DB & Login

router.post('/',async (req, res) => {
    try{
        const user = await userController.signUpUser(req.body);
        res.json(user);
    } catch( err ){
        console.log(err)
        return res.status(500).json({
            message: err.message
        });
    }
})

router.post('/login',async (req, res) => {
    try{
        const {email,password} = req.body;
        const jwt = await userController.login(email,password);
        const token = jwt.token
        const user = jwt.user
        res.json({token,user})
    } catch (err) {
        return res.status(401).json({
            message: err.message
        });
    }
});

  //PUT - Update a User Profil already existing

router.put('/:id', auth, async (req,res) => {
    try{
        const id = req.params.id;
        const userUpdated = await userController.updateProfile(id,req.body)
        res.json(userUpdated).status(200);
    } catch( err ){
        return res.status(500).json({
            message: err.message
        });
    }
});

//DELETE - Delete a User with specified ID

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({status,id});
    } catch( err ) {
        return res.status(500).json({
            message: err.message
     });   
    }
});

module.exports = router;
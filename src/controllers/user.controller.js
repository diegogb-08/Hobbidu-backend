const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'secret_word';

class Customer {

    constructor(){

    }

    //GET - Return all Users in the DB

    async findAllUsers(users){
        return User.find(users);
    };

    //GET - Return a User with specified ID

    async findById(id) {
        return User.findById(id);
    };

     //GET - Return a User with specified User_name

     async findByUserName({query}) {
        if(query == undefined)
        return []
        else
        return User.findOne({"user_name": query});
    };

    //GET - Return a user with specified email

     async findUserByEmail({query}) {
        if(query == undefined)
        return []
        else
        return User.findOne({"email": query});
    };

    //POST - SignUp a new User in the DB & Login

    async signUpUser(user){
        user.password = await bcrypt.hash(user.password, 10)
       return User.create(user)
    };

    async login(email,password){
        const user =  await User.findOne({email})
        if(!user){
            throw new Error('Email does not exist')
        }
        if (!await bcrypt.compare(password,user.password)){
            throw new Error('Password incorrect')
        }

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }
        const token = jwt.sign(payload, secret)
        return ({token, user});
    }

    //PUT - Update a User Profil already existing

    async updateProfile(id,user){
        return User.findByIdAndUpdate(id,user,{new: true})
    };

    //DELETE - Delete a User with specified ID

    async deleteUser(id) {
        return User.findByIdAndRemove(id)
    };
};

let userController = new Customer();
module.exports = userController;

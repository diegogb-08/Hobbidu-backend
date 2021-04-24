const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'secret_word';

class Customer {

    constructor(){

    }

    //GET - Return all Users in the DB

    async findAllUsers(){
        return await User.find();
    };

    //GET - Return a User with specified ID

    async findById(id) {
        return await User.findById(id);
    };

    //GET - Return any User with similar name

     async findByName(req) {
        if(req.query != '')
            return await User.find({"name": new RegExp(req.query, 'i')}).limit(5);
        else
            return []
    };

    //GET - Return a user with specified email

     async findUserByEmail({query}) {
        if(query == undefined)
        return []
        else
        return await User.findOne({"email": query});
    };

    //POST - SignUp a new User in the DB & Login

    async signUpUser(user){
        user.password = await bcrypt.hash(user.password, 10)
       return await User.create(user)
    };

    async login(email,password){
        const user = await User.findOne({email})
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
        return await User.findByIdAndUpdate(id,user,{new: true})
    };

    //PUT - Update Profile picture

    async updateProfilePicture(id,user, file){
        user.profile_img = file;
        return await User.findByIdAndUpdate(id,user,{new: true})
    };

    //PUT - Update User Password 

    async changePassword(id,body){

        const user = await User.findOne({_id: id});
        if(!user){
            throw new Error('User does not exist')
        }
        if (!await bcrypt.compare(body.oldPassword,user.password)){

            throw new Error('Password incorrect')
        }else{

            user.password = await bcrypt.hash(body.newPassword, 10)
            return await User.findByIdAndUpdate(id,user,{new: true})
        }
    };


    //PUT - Update User Email 

    async changeEmail(body){

        const user = await User.findOne({email: body.oldEmail});
        
        if(!user){
            throw new Error('User does not exist')
        }
        if (!await bcrypt.compare(body.password,user.password)){

            throw new Error('Password incorrect')
        }else{

            user.email = body.newEmail
            return await User.findByIdAndUpdate(user._id,user,{new: true})
        }
    };



    //DELETE - Delete a User with specified ID

    async deleteUser(id) {
        return await User.findByIdAndRemove(id)
    };
};

let userController = new Customer();
module.exports = userController;

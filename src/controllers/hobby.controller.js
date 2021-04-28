const Hobby = require('../models/hobby');

class Hobbies {

    constructor(){

    }

    //GET - Return all Hobbys in the DB
    async findLimitedHobbys(){
        return await Hobby.find().limit(15);
    };

    //GET - Return all Hobbys in the DB
    async findAllHobbys(){
        return await Hobby.find();
    };

    //GET - Return all Hobbys in the DB
    async findHobbyByUserId(id){
        return await Hobby.find({"user_id": id});
    };

    
    //GET - Return a Hobby with specified Hobby_name
    async findByHobbyName({query}) {
        if(query == undefined)
        return []
        else
        return await Hobby.findOne({"hobby_name": query});
    };
    
    //GET - Return a Hobby with specified ID
    async findById(id) {
        return await Hobby.findById(id);
    };

    //POST - Create a new Hobby in the DB & Login
    async createNewHobby(hobby){

        let hobbyFound = await Hobby.findOne({"hobby_name": hobby.hobby_name});
        if(hobbyFound){
            return hobbyFound
        }else{
            return await Hobby.create(hobby);
        }
    };

    //DELETE - Delete a Hobby with specified ID

    async deleteHobby(id) {
        return await Hobby.findByIdAndRemove(id)
    };
};

let hobbyController = new Hobbies();
module.exports = hobbyController;

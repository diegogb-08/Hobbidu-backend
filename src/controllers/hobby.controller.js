const Hobby = require('../models/hobby');

class Hobbies {

    constructor(){

    }

    //GET - Return all Hobbys in the DB
    async findAllHobbys(){
        return Hobby.find().limit(15);
    };

    //GET - Return all Hobbys in the DB
    async findHobbyByUserId(id){
        return Hobby.find({"user_id": id});
    };

    
    //GET - Return a Hobby with specified Hobby_name
    async findByHobbyName({query}) {
        if(query == undefined)
        return []
        else
        return Hobby.findOne({"hobby_name": query});
    };
    
    //GET - Return a Hobby with specified ID
    async findById(id) {
        return Hobby.findById(id);
    };

    //POST - Create a new Hobby in the DB & Login
    async createNewHobby(hobby){
        let hobbyFound = Hobby.findOne({"hobby_name": hobby.hobby_name});
        if(hobbyFound){
            return hobbyFound
        }else{
            return await Hobby.create(hobby);
        }
    };

    //DELETE - Delete a Hobby with specified ID

    async deleteHobby(id) {
        return Hobby.findByIdAndRemove(id)
    };
};

let hobbyController = new Hobbies();
module.exports = hobbyController;

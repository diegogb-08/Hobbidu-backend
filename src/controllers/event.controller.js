const Event = require('../models/event');

class Events {

    constructor(){

    }

    //POST - Create a new Event in the DB & Login
    async createNewEvent(event){
        return await Event.create(event);
    };


    //GET - Return all Events in the DB
    async indexAllEvents(){
        return Event.find()
    };

    //GET - Return all Events in the DB
    async findEventByUserId(user_id){
        return Event.find({"user_id": user_id});
    };

    
    //GET - Return a Event by ID
    async findEventsByHobby({hobby_id}) {
        return Event.findOne({"hobby_id": hobby_id});
    };
    
    //GET - Return a Event with specified ID
    async findById(id) {
        return Event.findById(id);
    };

    //PUT - Update a User Profil already existing

    async updateEvent(id,body){
        return await Event.findByIdAndUpdate(id,body,{new: true})
    };

    //DELETE - Delete a Event with specified ID

    async deleteEvent(id) {
        return Event.findByIdAndRemove(id)
    };
};

let eventController = new Events();
module.exports = eventController;

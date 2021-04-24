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

    //GET - Return all Events by User Id
    async findEventByUserId(user_id){
        return Event.find({"user_id": user_id});
    };

    
    //GET - Return all Events by Hobby Id
    async findEventsByHobbyId(hobby_id) {
        return Event.find({"hobby_id": hobby_id});
    };
    
    //GET - Return a Event with specified ID
    async findById(id) {
        return Event.findById(id);
    };

    // GET - Return all Events by Coords
    async indexEventsByCoords (query) {

        return Event.find({
            location: {
                $near: {
                    $maxDistance: query.distance,
                    $geometry: {
                        type: 'Point',
                        coordinates: query.coords
                    }
                }
            }
        }).sort({event_date: 'asc'})
        // .find((error, results) => {
        //     if (error) console.log(error);
        //     console.log(JSON.stringify(results, 0, 2))
        // })
    }

    //PUT - Update an Event by ID with verified user

    async updateEvent(user_id, body){
        if(user_id == body.user_id)
            return await Event.findByIdAndUpdate(body._id,body,{new: true})
        else
            throw new Error('Not authorized to update this Event')
    };

    // PUT - Join an Event
    
    async joinEvent(id,user_id){

        let event = await Event.findById(id)
        if (event.joiners.find(element => element === user_id) === undefined){
            event.joiners.push(user_id)
            return await Event.findByIdAndUpdate(id,event,{new: true})
        }else{
            event.joiners = event.joiners.filter(element => element !== user_id)
            return await Event.findByIdAndUpdate(id,event,{new: true})
        }
    }

    //DELETE - Delete a Event with specified ID

    async deleteEvent(user_id, body) {
        if(user_id === body.user_id)
            return Event.findByIdAndRemove(body._id)
        else
            throw new Error('Not authorized to update this Event')
    };
};

let eventController = new Events();
module.exports = eventController;

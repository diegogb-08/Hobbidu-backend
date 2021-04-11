const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const eventSchema = new Schema({
    user_id : { 
        type: ObjectId,
        ref: 'User',
        required: true
    },
    hobby_id : {
        type: ObjectId,
        ref: 'Hobby',
        required: true
    },
    joiner : {
        type: [],
        ref: 'User',
    },
    image : {
        data: Buffer,
        contentType: String
    },
    descritpion : {
        type: String,
    },
    location : {
        type: String,
        required: true
    },
    content : {
        type: String,
    },
    event_date: {
        type: Date,
        required: true
    },
    creation_date: {
        type: Date,
        default: new Date
    },

    
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
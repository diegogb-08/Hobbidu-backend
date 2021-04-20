const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const eventSchema = new Schema({
    title : {
        type: String,
    },
    user_id : { 
        type: ObjectId,
        ref: 'User',
        required: true
    },
    hobby_id : {
        type:  ObjectId,
        ref: 'Hobby',
        required: true
    },
    joiners : {
        type: Array,
        ref: 'User',
    },
    maxJoiners : {
        type: Number,
        required: true
    },
    image : {
        type: String
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
    price : {
        type: String,
        default: 'Free'
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
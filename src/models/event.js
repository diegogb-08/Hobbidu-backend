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
    vehicle: {
        type: Boolean,
    },
    seats: {
        type: String,
    },
    image : {
        type: String
    },
    description : {
        type: String,
    },
    location : {
        name : {
            type: String,
            required: true
        },
        coordinates : {
            type: [Number],
            default: [,0,0]
        },
        type : { 
            type: String,
            enum: ['Point'],
            default: 'Point',
        }
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

eventSchema.index({ location: "2dsphere" });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const meetingSchema = new Schema({
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
    meeting_date: {
        type: Date,
        required: true
    },
    creation_date: {
        type: Date,
        default: new Date
    },

    
});

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;
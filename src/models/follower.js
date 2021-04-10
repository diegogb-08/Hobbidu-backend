const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const followerSchema = new Schema({
    user_id : { 
        type: ObjectId,
        ref: 'User',
        required: true
    },
    follower_id : {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    creation_date: {
        type: Date,
        default: new Date
    },
});

const Follower = mongoose.model('Follower', followerSchema);
module.exports = Follower;
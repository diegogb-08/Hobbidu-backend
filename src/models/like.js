const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const likeSchema = new Schema({
    user_id : { 
        type: ObjectId,
        ref: 'User',
        required: true
    },
    post_id : {
        type: ObjectId,
        ref: 'Post'
    },
    meeting_id : {
        type: ObjectId,
        ref: 'Meeting'
    },
    creation_date: {
        type: Date,
        default: new Date
    },
    
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
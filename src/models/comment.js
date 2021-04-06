const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const commentSchema = new Schema({
    user_id : { 
        type: ObjectId,
        ref: 'User',
        required: true
    },
    post_id : {
        type: ObjectId,
        ref: 'Post',
        required: true
    },
    content : {
        type: String,
    },
    creation_date: {
        type: Date,
        default: new Date
    },

    
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
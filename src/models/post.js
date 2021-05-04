const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const postSchema = new Schema({
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
        type: String
    },
    location : {
        type: Schema.Types.Mixed,
    },
    description : {
        type: String,
    },
    like : {
        type: Array,
        ref: 'User',
        default: []
    },
    creation_date: {
        type: Date,
        default: new Date
    },

    
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
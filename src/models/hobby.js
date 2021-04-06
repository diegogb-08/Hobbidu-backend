const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const hobbySchema = new Schema({
    hobby : {
        type: String,
        required: true,
        unique: true
    },
    user_id : { 
        type: ObjectId,
        ref: 'User'
    },
    creation_date: {
        type: Date,
        default: new Date
    },
});

const Hobby = mongoose.model('Hobby', hobbySchema);
module.exports = Hobby;
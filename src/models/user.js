const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { 
        type: String,
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: new Date
    },
    birth_date: { 
        type: Date,
    },
    phone_number: { 
        type: Number,
        unique: true
    },
    location: { 
        type: String
    },
    bio: {
        type: String
    },
    profile_img: {
        data: Buffer,
        contentType: String
    }
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
}


userSchema.set('toJSON', toJSONConfig);


const User = mongoose.model('User', userSchema);
module.exports = User;
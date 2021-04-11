const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    name: { 
        type: String,
    },
    user_name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
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
    birth_date: { 
        type: Date,
    },
    phone_number: { 
        type: Number
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
    },
    hobbies: [],
    creation_date: {
        type: Date,
        default: new Date
    },
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
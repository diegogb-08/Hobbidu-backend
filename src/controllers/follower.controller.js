const Follower = require('../models/follower');

class Followers {

    constructor(){

    }

    //GET - Return all Followers in the DB
    async indexAllFollowers(){
        return await Follower.find();
    };

    //GET - Return all Followers in the DB
    async indexFollowersByUser(id){
        let followers = await Follower.find({"user_id": id});
        let following = await Follower.find({"follower_id": id});
        return {followers, following}
    };
    
    //GET - Return a Follower by ID
    async indexById(id) {
        return await Follower.findById(id);
    };

    //POST - Create a new Follower in the DB & Login
    async follow(follower){
        return await Follower.create(follower);
    };

    //DELETE - Delete a Follower with specified ID

    async unFollow(id) {
        return await Follower.findByIdAndRemove(id)
    };
};

let followerController = new Followers();
module.exports = followerController;

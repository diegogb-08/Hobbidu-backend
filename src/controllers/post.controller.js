const Post = require('../models/post');
const Follower = require('../models/follower');

class Posts {

    constructor(){

    }

    //GET - Return all Posts in the DB
    async findAllPosts(){
        return await Post.find()
        .populate('user_id')
        .populate('hobby_id')
        .populate('like');
    };

    //GET - Return all Posts in the DB
    async findOwnPostsByUserId(id){
        return await Post.find({"user_id": id})
        .populate('user_id')
        .populate('hobby_id')
        .populate('like');
    };

    //GET - Return all Posts in the DB by User_id
    async findFollowAndOwnPostByUserId(id){
        let query = await Follower.find({"follower_id": id}, { '_id': 0, 'user_id': 1})
        .then(result => result.map(obj => {
            return obj.user_id;
        }))

        query.unshift(id)

        return await Post.find({"user_id": query})
        .populate('user_id')
        .populate('hobby_id')
        .populate('like')
        .sort({creation_date: -1});

    };

    //GET - Return all Posts in the DB by Hobby_id
    async findPostByHobbyId(id){
        return await Post.find({"hobby_id": id})
        .populate('user_id')
        .populate('like')
        .populate('hobby_id');
    };

       
    //GET - Return a Post with specified ID
    async findPostById(id) {
        return await Post.findById(id);
    };

    //POST - Create a new Post in the DB & Login
    async createNewPost(post,file){
        post.image = file;
        let location = JSON.parse(post.location)
        post.location = location
        return await Post.create(post)
    };

    // PUT - Join an Event
    
    async likePost(id,user_id){
    
        let post = await Post.findById(id)
        if (post.like.find(element => element === user_id) === undefined){
            post.like.push(user_id)
            return await Post.findByIdAndUpdate(id,post,{new: true})
                .populate('user_id')
                .populate('hobby_id')
                .populate('like');
        }else{
            post.like = post.like.filter(element => element !== user_id)
            return await Post.findByIdAndUpdate(id,post,{new: true})
                .populate('user_id')
                .populate('hobby_id')
                .populate('like');
        }
    }

    //DELETE - Delete a Post with specified ID

    async deletePost(id) {
        return await Post.findByIdAndRemove(id)
    };
};

let postController = new Posts();
module.exports = postController;

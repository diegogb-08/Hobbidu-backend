const Post = require('../models/post');

class Posts {

    constructor(){

    }

    //GET - Return all Posts in the DB
    async findAllPosts(){
        return await Post.find()
        .populate('user_id')
        .populate('hobby_id');;
    };

    //GET - Return all Posts in the DB by User_id
    async findPostByUserId(id){
        return await Post.find({"user_id": id})
        .populate('user_id')
        .populate('hobby_id');
    };

    //GET - Return all Posts in the DB by Hobby_id
    async findPostByHobbyId(id){
        return await Post.find({"hobby_id": id})
        .populate('user_id')
        .populate('hobby_id');
    };

       
    //GET - Return a Post with specified ID
    async findPostById(id) {
        return await Post.findById(id);
    };

    //POST - Create a new Post in the DB & Login
    async createNewPost(post,file){
        post.image = file;
        return await Post.create(post)
        .populate('user_id')
        .populate('hobby_id');
    };

    //DELETE - Delete a Post with specified ID

    async deletePost(id) {
        return await Post.findByIdAndRemove(id)
    };
};

let postController = new Posts();
module.exports = postController;

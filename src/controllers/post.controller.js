const Post = require('../models/post');

class Posts {

    constructor(){

    }

    //GET - Return all Posts in the DB
    async findAllPosts(){
        return Post.find();
    };

    //GET - Return all Posts in the DB
    async findPostByUserId(id){
        return Post.find({"user_id": id});
    };

       
    //GET - Return a Post with specified ID
    async findPostById(id) {
        return Post.findById(id);
    };

    //POST - Create a new Post in the DB & Login
    async createNewPost(post){
       return await Post.create(post);
    };

    //DELETE - Delete a Post with specified ID

    async deletePost(id) {
        return Post.findByIdAndRemove(id)
    };
};

let postController = new Posts();
module.exports = postController;

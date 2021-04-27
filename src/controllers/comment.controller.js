const Comment = require('../models/comment');

class Comments {

    constructor(){

    }

    //GET - Return all Comments in the DB
    async indexAllComments(){
        return await Comment.find();
    };

    //GET - Return all Comments in the DB by post_id
    async indexCommentsByPost(id){
        return await Comment.find({"post_id": id});
    };

    //GET - Return all Comments in the DB by event_id
    async indexCommentsByEvent(id){
        return await Comment.find({"event_id": id});
    };
    
    //GET - Return a Comment by ID
    async indexById(id) {
        return Comment.findById(id);
    };

    //POST - Create a new Comment in the DB & Login
    async createComment(comment){
        return await Comment.create(comment);
    };

    //DELETE - Delete a Comment with specified ID

    async deleteComment(id) {
        return Comment.findByIdAndRemove(id)
    };
};

let commentController = new Comments();
module.exports = commentController;

const Comment = require('../models/comment');

class Comments {

    constructor(){

    }

    //GET - Return all Comments in the DB
    async indexAllComments(){
        return await Comment.find().populate('user_id');
    };

    //GET - Return all Comments in the DB by post_id
    async indexCommentsByPost(id){
        return await Comment.find({"post_id": id}).populate('user_id');
    };

    //GET - Return all Comments in the DB by event_id
    async indexCommentsByEvent(id){
        return await Comment.find({"event_id": id}).populate('user_id');
    };
    
    //GET - Return a Comment by ID
    async indexById(id) {
        return await Comment.findById(id).populate('user_id');
    };

    //POST - Create a new Comment in the DB & Login
    async createComment(comment){
        let newComment =  await Comment.create(comment);
        if(newComment.event_id)
            return await Comment.find({"event_id": comment.event_id}).populate('user_id');
        if(newComment.post_id)
            return await Comment.find({"post_id": id}).populate('user_id');
    };

    //DELETE - Delete a Comment with specified ID

    async deleteComment(id) {
        return await Comment.findByIdAndRemove(id)
    };
};

let commentController = new Comments();
module.exports = commentController;

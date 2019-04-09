const express = require("express");

const Router = express.Router;

const commentApiRouter = Router();

const CommentModel = require("../models/comment");
// Create
commentApiRouter.post('/comment', (req,res) => {
    CommentModel.create(
        req.body,
        (err, commentCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: commentCreated});
        }
    )
});
// Read
commentApiRouter.get('/', (req,res) => {
    CommentModel.find({ }, (err, docs) =>{
        if(err) console.log(err)
        else res.send(docs);
    });
});

// Read One
commentApiRouter.get('/:id', (req,res) => {
    commentId = req.params.id;
    const commentData = req.body;
    CommentModel.findById({_id:commentId}, (err, commentData) =>{
        if(err) console.log(err)
        else res.send(commentData);
    });
});
// Update
commentApiRouter.put('/:id', (req,res) => {
    commentId = req.params.id;
    const update = {
        content: req.body.content,
        commentId: req.body.commentId
    }
    CommentModel.updateOne(commentId, update, 
        (err) => {
            if(err) console.log(err)
            else res.send('Updated');
        }
    )
});
// Delete
commentApiRouter.delete(":/id", (req,res) => {
    commentId = req.params.id;
    CommentModel.deleteOne({_id:commentId}, (err) => {
        if(err) console.log(err)
        else res.send('Deleted');
    });
});
module.exports = commentApiRouter;
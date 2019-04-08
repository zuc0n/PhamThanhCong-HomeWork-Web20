const express = require("express");

const Router = express.Router;

const commentApiRouter = Router();

const CommentModel = require("../models/comment");
// Create
commentApiRouter.post('/comment', (req,res) => {
    const {userId, content} = req.body;
    CommentModel.create(
        {userId, content},
        (err, contentCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: contentCreated});
        }
    )
});
// Read
commentApiRouter.get('/comment', (req,res) =>{

});
// Read One

// Update

// Delete

module.exports = commentApiRouter;
const express = require("express");

const Router = express.Router;

const commentApiRouter = Router();

const CommentModel
// Create
commentApiRouter.post('/', (req,res) => {
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
commentApiRouter.get('/', (req,res) =>{

});
// Read One

// Update

// Delete

module.exports = commentApiRouter;
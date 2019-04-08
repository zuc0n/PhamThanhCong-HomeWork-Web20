const express = require("express");

const Router = express.Router;

const userApiRouter = Router();

const UserModel = require("../models/user");
// Create
userApiRouter.post('/', (req,res) => {
    const {name, dob, passwords,location, account, gender} = req.body;
    UserModel.create(
        {name, dob, passwords,location, account, gender},
        (err, userCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: userCreated});
        }
    )
});
// Read
userApiRouter.get('/', (req,res) =>{
    
});
// Read One

// Update

// Delete

module.exports = userApiRouter;
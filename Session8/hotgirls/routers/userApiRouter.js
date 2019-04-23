const express = require("express");

const Router = express.Router;

const userApiRouter = Router();

const bcrypt = require("bcryptjs");

const UserModel = require("../models/user");
// Create
userApiRouter.post('/', (req,res) => {
    const {name, dob, passwords,location, account, gender} = req.body;
    
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(passwords, salt);
    UserModel.create(
        {name, dob, passwords: hashPassword,location, account, gender},
        (err, userCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: userCreated});
        }
    )   
});
// Read
userApiRouter.get('/', (req,res) =>{
    UserModel.find({ }, (err,docs) => {
        if(err) console.log(err)
        else res.send(docs);
    });
});
// Read One
userApiRouter.get('/:id', (req,res) =>{
    userId = req.params.id;
    const userData = req.body;
    UserModel.findById(userId, (err, userData) =>{
      if(err) console.log(err)
      else res.send(userData);  
    });
})
// Update
userApiRouter.put('/:id', (req,res) => {
    userId = req.params.id;
    const update = {
        name: req.body.name,
        dob: Date,
        password: req.body.passwords,
        location: req.body.location,
        account: req.body.account,
        gender: req.body.gender,
    }
    UserModel.updateOne({_id: userId}, update,
        (err) =>{
            if(err) console.log(err)
            else res.send('Update');
        }
    )
});
// Delete
userApiRouter.delete('/:id', (req,res) =>{
    userId = req.params.id;
    ImageModel.deleteOne({_id: userId}, (err) => {
        if(err) console.log(err)
        else res.send('Deleted');
    });
});
module.exports = userApiRouter;
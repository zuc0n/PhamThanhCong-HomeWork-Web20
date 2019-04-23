const express = require('express');
const Router = express.Router;
const authApiRouter = Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");

authApiRouter.get("/me", (req,res) => {
    const 
    if(!req.session.userAccount){
        res.status(401).send({success: 0, message: "Ban can dang nhap"})
    }else{
        const account = req.session.userAccount;
        UserModel
        .findOne({account})
        .then(userFound => {
            res.send(userFound)
        })
        .catch(err => {
            res.status(500).send({success: 0, message:err});
        })
    }   
});

authApiRouter.post("/login", (req,res) =>{
    const {account , passwords} = req.body;
    if (!account || !passwords) {
        res.status(400).send({ success: 0, message: "Thieu account hoac password"});
    } else{
        UserModel
        .findOne({account})
        .then(userFound =>{
            if(!userFound || !userFound._id) {
                res.status(404).send({ success:0, message: "K tim thay"})
            } else {
                console.log(passwords, userFound.passwords)
                if(bcrypt.compareSync(passwords, userFound.passwords)){
                    req.session.userInfo = { account };
                    res.send({success: 1, message: "Thanh cong"});
                } else {
                    res.send({success: 0, message: "sai mat khau"});
                }
            }
        }).catch(err => {
            res.status(500).send({success: 0, message:err});
        })
    }
});



module.exports = authApiRouter;
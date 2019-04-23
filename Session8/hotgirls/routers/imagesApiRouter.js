const express = require("express");

const Router = express.Router;

const imagesApiRouter = Router();

const ImageModel = require("../models/images"); 

// Create
imagesApiRouter.post('/', (req,res) => {
    ImageModel.create(
        req.body
    ).then(imageCreated =>{
        res.send({success:1, data: imageCreated}); 
    })
    .catch(err =>{
        res.send({success: 0, err});
    })
});
// Read
imagesApiRouter.get('/', (req,res) => {
    const limit = req.query.perPage || 5;
    const page = req.query.page || 0;
    const skip = limit*(page-1);
    
    ImageModel.find({}, 
      "link titles")
    .populate({
        path: "author",
        //select: "name account" lua chon cac field nay
        select: "-__v -_id -password" //loai bo cac field nay
    })
    .limit(limit)
    .skip(skip)
    .then(images)
    .exec(
        (err, images) => {
            if(err) console.log(err)
            else res.send(images);
        }
    );
});
// Read one
imagesApiRouter.get('/:id', (req,res) => {
    imgId = req.params.id;
    const imageData = req.body;
    ImageModel.findById({_id: imgId}, (err, imageData) =>{
        if(err) console.log(err)
        else res.send(imageData);
    });
});
// Update
imagesApiRouter.put('/:id', (req,res) => {
    imgId = req.params.id;
    const update = {
        links: req.body.links,
        titles: req.body.titles,
        description: req.body.description,
    }
    ImageModel.updateOne({_id: imgId}, update,
        (err) => {
            if(err) console.log(err)
            else res.send('Updated');
        }
    )
});
// Delete
imagesApiRouter.delete('/:id', (req,res) =>{
    imgId = req.params.id;
    ImageModel.deleteOne({_id: imgId}, (err) => {
        if(err) console.log(err)
        else res.send('Deleted');
    });
});
module.exports = imagesApiRouter;


const express = require("express");

const Router = express.Router;

const imagesApiRouter = Router();

const ImageModel = require("../models/images"); 

// Create
imagesApiRouter.post('/', (req,res) => {
    ImageModel.create(
        req.body,
        (err, imageCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: imageCreated}); 
        }
    )
});
// Read
imagesApiRouter.get('/', (req,res) => {
    ImageModel.find({ }, (err, docs) =>{
        if(err) console.log(err)
        else res.send(docs);
    });
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


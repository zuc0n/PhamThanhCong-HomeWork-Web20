const express = require("express");

const Router = express.Router;

const imagesApiRouter = Router();

const ImageModel = require("../models/images"); 
// Create
imagesApiRouter.post('/', (req,res) => {
    // ImageModel.create({
    //     links: req.body.links,
    //     views: 0,
    //     like: 0,
    //     description: req.body.description,
    //     titles: req.body.titles,
    //     author: mongoose.Types.ObjectId, ref: 'User',
    // })
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
        else console.log(docs);
    });
});
// Read one
imagesApiRouter.get('/:id', (req,res) => {
    imgId = req.params.id;
    ImageModel.findById(imgId, (err, docs) =>{
        if(err) console.log(err)
        else console.log(docs);
    });
});
// Update
imagesApiRouter.put('/:id', (req,res) => {
    imgId = req.params.id;
    ImageModel.updateOne(imgId, {
        links: req.body.links,
        titles: req.body.titles,
        description: req.body.description,
        }
    )
});
// Delete
imagesApiRouter.delete('/:id', (req,res) =>{
    imgId = req.params.id;
    ImageModel.deleteOne(imgId);
});
module.exports = imagesApiRouter;


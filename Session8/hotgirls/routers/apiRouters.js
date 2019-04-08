const express = require("express");

const Router = express.Router;

const apiRouter = Router();

apiRouter.get("/",(req, res) =>{
    res.send("Hello");
});

apiRouter.use('/images', imagesApiRouter);

apiRouter.use('/comment', commentApiRouter);
module.exports = apiRouter
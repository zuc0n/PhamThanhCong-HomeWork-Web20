const express = require("express");

const Router = express.Router;

const apiRouter = Router();

const imagesApiRouter = require("./imagesApiRouter");

const commentApiRouter = require("./commentApiRouter");

const userApiRouter = require("./userApiRouter");
apiRouter.get("/",(req, res) =>{
    res.send("Hello");
});

apiRouter.use('/images', imagesApiRouter);

apiRouter.use('/user', userApiRouter);

apiRouter.use('/comment', commentApiRouter);

module.exports = apiRouter
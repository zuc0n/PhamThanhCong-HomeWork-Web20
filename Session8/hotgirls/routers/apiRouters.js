const express = require("express");

const Router = express.Router;

const apiRouter = Router();

const imagesApiRouter = require("./imagesApiRouter");

const commentApiRouter = require("./commentApiRouter");

const userApiRouter = require("./userApiRouter");

const authApiRouter = require("./authApiRouter");
apiRouter.get("/",(req, res) =>{
    res.send("Hello");
});


apiRouter.use('/auth', authApiRouter);

apiRouter.use((req,res,next) => {
    if(req.session.userAccount) {
        next();
    } else {
        res.status(401).send({
            success: 0,
            message: "Ban chua dang nhap"
        });
    }

});

apiRouter.use('/images', imagesApiRouter);

apiRouter.use('/user', userApiRouter);

apiRouter.use('/comment', commentApiRouter);

module.exports = apiRouter;
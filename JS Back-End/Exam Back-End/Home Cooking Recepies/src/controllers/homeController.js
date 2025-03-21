import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    const user = req.user
    res.render('home', {
        title: 'Home Page',
        user
    });
});

export default homeRouter;
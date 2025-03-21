import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import volcanoesController from "./controllers/volcanoesController.js";

const router = Router();

router.use(homeController);
router.use('/auth', authController);
router.use('/volcanoes', volcanoesController);

router.all('*', (req, res) => {
    res.render('home/404', {
        title: '404 Page',
    });
});

export default router;
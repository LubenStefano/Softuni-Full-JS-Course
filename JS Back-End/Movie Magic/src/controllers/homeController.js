import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.write('<h1>Home</h1>')
    res.end()
})

export default router;
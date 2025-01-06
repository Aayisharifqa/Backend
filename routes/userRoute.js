// import express from 'express';
// import { fetch } from '../controller/userController.js';
// const router = express.Router();
// router.get('/fetch', fetch);
// router.post('/create',fetch);
// export default router;


import express from 'express';
import { create, fetch ,update,deleted} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleted);

export default router;
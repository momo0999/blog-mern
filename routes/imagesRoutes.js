import express from 'express';
const router = express.Router();
import { getImagesByCategory } from '../controller/imagesController.js';

router.route('/category/:category').get(getImagesByCategory);

export default router;

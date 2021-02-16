import express from 'express';
const router = express.Router();
import {
  getImagesByCategory,
  getImages,
  getImageById,
} from '../controller/imagesController.js';

router.route('/').get(getImages);
router.route('/:id').get(getImageById);
router.route('/category/:category').get(getImagesByCategory);

export default router;

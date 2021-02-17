import express from 'express';
const router = express.Router();
import {
  getImagesByCategory,
  getImages,
  getImageById,
  createImage,
  updateImage,
  deleteImage,
} from '../controller/imagesController.js';

router.route('/').get(getImages).post(createImage);
router.route('/:id').get(getImageById).put(updateImage).delete(deleteImage);
router.route('/category/:category').get(getImagesByCategory);

export default router;

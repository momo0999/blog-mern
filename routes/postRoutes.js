import express from 'express';
const router = express.Router();

import {
  getPostById,
  getPosts,
  getPostsByCategory,
} from '../controller/postsController.js';

router.route('/').get(getPosts);
router.route('/:id').get(getPostById);
router.route('/category/:category').get(getPostsByCategory);

export default router;

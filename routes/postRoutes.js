import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

import {
  getPostById,
  getPosts,
  getPostsByCategory,
  createPost,
  updatePost,
  deletePost,
} from '../controller/postsController.js';

router.route('/').get(getPosts).post(protect, admin, createPost);
router.route('/:id').get(getPostById).put(updatePost).delete(deletePost);
router.route('/category/:category').get(getPostsByCategory);

export default router;

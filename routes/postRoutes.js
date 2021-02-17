import express from 'express';
const router = express.Router();

import {
  getPostById,
  getPosts,
  getPostsByCategory,
  createPost,
  updatePost,
  deletePost,
} from '../controller/postsController.js';

router.route('/').get(getPosts);
router.route('/:id').get(getPostById).put(updatePost).delete(deletePost);
router.route('/category/:category').get(getPostsByCategory);

router.route('/').post(createPost);

export default router;

import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';

// @route  /api/posts
// @desc   Get posts
// @access Public

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('Posts not found');
  }
});

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

const getPostsByCategory = asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: req.params.category });
  if (posts.length > 0) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No posts were found with the given category');
  }
});

export { getPosts, getPostById, getPostsByCategory };

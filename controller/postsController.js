import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';

// @route  /api/posts
// @desc   Get posts
// @access Public
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getPostsSearch = asyncHandler(async (req, res) => {
  const r = new RegExp(`(${escapeRegex(req.query.keyword)})`);

  const keyword = req.query.keyword
    ? {
        title: {
          $regex: r,
          $options: 'mi',
        },
      }
    : {};
  const posts = await Post.find({ ...keyword });
  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('Posts not found');
  }
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('Posts not found');
  }
});

// @route  /api/posts/:id
// @desc   Get post
// @access Public

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @route  /api/posts/category/:category
// @desc   Get post by category
// @access Public

const getPostsByCategory = asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: req.params.category });
  if (posts.length > 0) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No posts were found with the given category');
  }
});

// @route  /api/posts
// @desc   Post request
// @access Public

const createPost = asyncHandler(async (req, res) => {
  const { title, content, img, category } = req.body;
  const post = new Post({
    title,
    content,
    img,
    category: category.toLowerCase().trim(),
  });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @route  /api/posts/:id
// @desc   put request update post
// @access Public

const updatePost = asyncHandler(async (req, res) => {
  const { title, content, img, category } = req.body;
  const post = await Post.findById(req.params.id);
  if (post) {
    post.title = title;
    post.content = content;
    post.img = img;
    post.category = category;

    const updatedPost = post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @route  /api/posts/:id
// @desc   delete request delete post
// @access Public

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

export {
  getPosts,
  getPostsSearch,
  getPostById,
  getPostsByCategory,
  createPost,
  updatePost,
  deletePost,
};

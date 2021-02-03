import express from 'express';
import posts from './data/posts.js';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hello There' });
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p._id === req.params.id);
  res.json(post);
});

app.get('/api/posts/category/:category', (req, res) => {
  const filteredPosts = posts.find((p) => p.category === req.params.category);
  res.json(filteredPosts);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

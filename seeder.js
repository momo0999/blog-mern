import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import posts from './data/posts.js';
import images from './data/images.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import Photo from './models/photoModel.js';

import connectDB from './config/db.js';

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Photo.deleteMany();

    await User.insertMany(users);
    await Post.insertMany(posts);
    await Photo.insertMany(images);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Photo.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

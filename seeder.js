import mongoose from 'mongoose';
import dotenv from 'dotenv';
import images from './data/images.js';
import Photo from './models/photoModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Photo.deleteMany();

    const sampleImages = images.map((image) => {
      return { ...image };
    });

    await Photo.insertMany(sampleImages);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Post.deleteMany();

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

import Photo from '../models/photoModel.js';
import asyncHandler from 'express-async-handler';

//@route /api/images
//@desc  Get all images
//@access Public

const getImages = asyncHandler(async (req, res) => {
  const images = await Photo.find({});
  if (images.length > 0) {
    res.json(images);
  } else {
    res.status(404);
    throw new Error('Images Not Found');
  }
});

const getImageById = asyncHandler(async (req, res) => {
  const image = await Photo.findById(req.params.id);
  if (image) {
    res.json(image);
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

// @route /api/images/category/:category
// @desc  Get images by category
// @access Public

const getImagesByCategory = asyncHandler(async (req, res) => {
  const images = await Photo.find({ category: req.params.category });
  if (images.length > 0) {
    res.json(images);
  } else {
    res.status(404);
    throw new Error('No images where found with the given category');
  }
});

const createImage = asyncHandler(async (req, res) => {
  const { img, category, title } = req.body;
  const image = new Photo({
    title,
    img,
    category,
  });
  const createdImage = await image.save();
  res.status(201).json(createdImage);
});

const updateImage = asyncHandler(async (req, res) => {
  const { img, category, title } = req.body;
  const image = await Photo.findById(req.params.id);
  if (image) {
    image.title = title;
    image.img = img;
    image.category = category;
    const updatedImage = await image.save();
    res.json(updatedImage);
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

const deleteImage = asyncHandler(async (req, res) => {
  const image = await Photo.findById(req.params.id);
  if (image) {
    await image.remove();
    res.json('Image removed');
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

export {
  getImagesByCategory,
  getImages,
  getImageById,
  createImage,
  deleteImage,
  updateImage,
};

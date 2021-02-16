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

export { getImagesByCategory, getImages, getImageById };

import Photo from '../models/photoModel.js';
import asyncHandler from 'express-async-handler';

// @route /api/images/category/:category
// @desc  Get images
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

export { getImagesByCategory };

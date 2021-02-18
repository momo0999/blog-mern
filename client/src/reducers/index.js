import { combineReducers } from 'redux';
import {
  postListReducer,
  postDetailReducer,
  postCategoryReducer,
  postCreateReducer,
} from './postReducers';
import { imageListReducer, imageCategoryReducer } from './imageReducers';

export default combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
  postCategory: postCategoryReducer,
  imageList: imageListReducer,
  imageCategory: imageCategoryReducer,
  postCreate: postCreateReducer,
});

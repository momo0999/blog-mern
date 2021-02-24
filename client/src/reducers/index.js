import { combineReducers } from 'redux';
import {
  postListReducer,
  postDetailReducer,
  postCategoryReducer,
  postCreateReducer,
  postDeleteReducer,
  postEditReducer,
} from './postReducers';
import {
  imageListReducer,
  imageCategoryReducer,
  imageCreateReducer,
  imageDeleteReducer,
} from './imageReducers';

export default combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
  postCategory: postCategoryReducer,
  imageList: imageListReducer,
  imageCategory: imageCategoryReducer,
  imageCreate: imageCreateReducer,
  imageDelete: imageDeleteReducer,
  postCreate: postCreateReducer,
  postDelete: postDeleteReducer,
  postEdit: postEditReducer,
});

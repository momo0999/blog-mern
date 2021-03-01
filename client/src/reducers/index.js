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

import { userLoginReducer } from './userReducer';

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
  userLogin: userLoginReducer,
});

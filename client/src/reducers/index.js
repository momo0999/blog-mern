import { combineReducers } from 'redux';
import {
  postListReducer,
  postDetailReducer,
  postCategoryReducer,
} from './postReducers';

export default combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
  postCategory: postCategoryReducer,
});

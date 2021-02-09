import { combineReducers } from 'redux';
import { postListReducer, postDetailReducer } from './postReducers';

export default combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
});

import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
  IMAGE_CATEGORY_REQUEST,
  IMAGE_CATEGORY_SUCCESS,
  IMAGE_CATEGORY_FAIL,
} from '../actions/types';

export const imageListReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case IMAGE_LIST_REQUEST:
      return { ...state, loading: true };
    case IMAGE_LIST_SUCCESS:
      return { ...state, loading: false, images: action.payload };
    case IMAGE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const imageCategoryReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case IMAGE_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case IMAGE_CATEGORY_SUCCESS:
      return { ...state, loading: false, images: action.payload };
    case IMAGE_CATEGORY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

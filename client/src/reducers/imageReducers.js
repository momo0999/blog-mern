import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
  IMAGE_CATEGORY_REQUEST,
  IMAGE_CATEGORY_SUCCESS,
  IMAGE_CATEGORY_FAIL,
  IMAGE_CREATE_REQUEST,
  IMAGE_CREATE_SUCCESS,
  IMAGE_CREATE_FAIL,
  IMAGE_CREATE_RESET,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DELETE_FAIL,
  IMAGE_DELETE_RESET,
} from '../actions/types';

export const imageListReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case IMAGE_LIST_REQUEST:
      return { ...state, loading: true };
    case IMAGE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
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

export const imageCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_CREATE_REQUEST:
      return { loading: true };
    case IMAGE_CREATE_SUCCESS:
      return { loading: false, success: true, image: action.payload };
    case IMAGE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case IMAGE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const imageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_DELETE_REQUEST:
      return { loading: true };
    case IMAGE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case IMAGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case IMAGE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

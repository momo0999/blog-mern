import {
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_FAIL,
  POST_DETAIL_REQUEST,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_FAIL,
  POST_CATEGORY_REQUEST,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_RESET,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_RESET,
  POST_EDIT_REQUEST,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAIL,
  POST_EDIT_RESET,
  POST_SEARCH_REQUEST,
  POST_SEARCH_SUCCESS,
  POST_SEARCH_FAIL,
} from '../actions/types';

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const postSearchReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_SEARCH_REQUEST:
      return { loading: true, posts: [] };
    case POST_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    case POST_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDetailReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAIL_REQUEST:
      return { ...state, loading: true };
    case POST_DETAIL_SUCCESS:
      return { ...state, loading: false, post: action.payload };
    case POST_DETAIL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postCategoryReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case POST_CATEGORY_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case POST_CATEGORY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true };
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const postEditReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_EDIT_REQUEST:
      return { loading: true };
    case POST_EDIT_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case POST_EDIT_FAIL:
      return { loading: false, error: action.payload };
    case POST_EDIT_RESET:
      return {};
    default:
      return state;
  }
};

export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { loading: true };
    case POST_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POST_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case POST_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

import axios from 'axios';

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
  POST_EDIT_REQUEST,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAIL,
  POST_EDIT_RESET,
} from './types';

export const fetchPostsList = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get(`/api/posts`);
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const fetchPostsSearch = (debouncedKeyword = '') => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get(`/api/posts?keyword=${debouncedKeyword}`);
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchPostDetail = (id) => async (dispatch, getState) => {
  const {
    postList: { posts },
  } = getState();
  const post = posts.find((_post) => _post._id === id);
  if (post) {
    return dispatch({ type: POST_DETAIL_SUCCESS, payload: post });
  }
  try {
    dispatch({ type: POST_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/posts/${id}`);
    dispatch({ type: POST_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchPostsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: POST_CATEGORY_REQUEST });
    const { data } = await axios.get(`/api/posts/category/${category}`);
    dispatch({ type: POST_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (formValues) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post('/api/posts', formValues, config);
    dispatch({ type: POST_CREATE_SUCCESS, payload: data });
    dispatch({ type: POST_CREATE_RESET });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editPost = (formValues) => async (dispatch) => {
  try {
    dispatch({ type: POST_EDIT_REQUEST });
    const { data } = await axios.put(
      `/api/posts/${formValues._id}`,
      formValues
    );
    dispatch({ type: POST_EDIT_SUCCESS, payload: data });
    dispatch({ type: POST_EDIT_RESET });
  } catch (error) {
    dispatch({
      type: POST_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DELETE_REQUEST });
    await axios.delete(`/api/posts/${id}`);
    dispatch({ type: POST_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

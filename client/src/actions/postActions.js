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
} from './types';

export const fetchPostsList = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get('/api/posts');
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

export const fetchPostDetail = (id) => async (dispatch) => {
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

export const createPost = (formValues) => async (dispatch) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST });
    const { data } = await axios.post('/api/posts', formValues);
    dispatch({ type: POST_CREATE_SUCCESS, payload: data });
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

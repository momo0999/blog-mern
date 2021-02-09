import axios from 'axios';
import {
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_FAIL,
  POST_DETAIL_REQUEST,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_FAIL,
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

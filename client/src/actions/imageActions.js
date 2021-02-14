import axios from 'axios';
import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
  IMAGE_CATEGORY_REQUEST,
  IMAGE_CATEGORY_SUCCESS,
  IMAGE_CATEGORY_FAIL,
} from './types';

export const getImages = () => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_LIST_REQUEST });
    const { data } = await axios.get(`/api/images`);
    dispatch({ type: IMAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: IMAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getImagesByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_CATEGORY_REQUEST });
    const { data } = await axios.get(`/api/images/category/${category}`);
    dispatch({ type: IMAGE_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: IMAGE_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

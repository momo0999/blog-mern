import axios from 'axios';
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

export const createImage = (formValues) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_CREATE_REQUEST });
    const { data } = await axios.post(`/api/images`, formValues);
    dispatch({ type: IMAGE_CREATE_SUCCESS, payload: data });
    dispatch({ type: IMAGE_CREATE_RESET });
  } catch (error) {
    dispatch({
      type: IMAGE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteImage = (id) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_DELETE_REQUEST });
    await axios.delete(`/api/images/${id}`);
    dispatch({ type: IMAGE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: IMAGE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

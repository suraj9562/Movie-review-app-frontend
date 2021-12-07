import axios from "axios";
import {
  ALL_MOVIE_FAIL,
  ALL_MOVIE_REQUEST,
  ALL_MOVIE_SUCCESS,
  CLEAR_ERRORS,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_REVIEWS_FAIL,
  MOVIE_REVIEWS_REQUEST,
  MOVIE_REVIEWS_SUCCESS,
} from "../constants/ReviewConstants";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_MOVIE_REQUEST,
    });

    const data = await axios.get("http://localhost:5000/api/movie/allmovies");

    dispatch({
      type: ALL_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_MOVIE_FAIL,
      payload: error,
    });
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_DETAILS_REQUEST,
    });

    const data = await axios.get(
      `http://localhost:5000/api/movie/allmovies/${id}`
    );

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const getReviews = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_REVIEWS_REQUEST,
    });

    const data = await axios.get(
      `http://localhost:5000/api/reviews/movie/${id}`
    );

    dispatch({
      type: MOVIE_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_REVIEWS_FAIL,
      payload: error,
    });
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

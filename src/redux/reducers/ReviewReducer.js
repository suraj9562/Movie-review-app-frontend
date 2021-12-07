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

// get all movies
export const movieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {

    case ALL_MOVIE_REQUEST:
      return {
        loading: true,
        movies: [],
      };

    case ALL_MOVIE_SUCCESS:
      return {
        loading: false,
        movies: action.payload.data.result,
      };

    case ALL_MOVIE_FAIL:
      return {
        loading: false,
        movies: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        movies: null,
      };

    default:
      return state;

  }
};

// get particular movie
export const particularMovieReducer = (state = {movie: []}, action) =>{
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return{
        loading: true,
        movie: []
      }
  
    case MOVIE_DETAILS_SUCCESS:
      return{
        loading: false,
        id: action.payload.data.id,
        movie: action.payload.data.result
      }
  
    case MOVIE_DETAILS_FAIL:
      return{
        loading: false,
        movie: action.payload
      }
  
    case CLEAR_ERRORS:
      return {
        ...state,
        movie: null,
      };
  
    default:
      return state;
  }
}

//get reviews of particular moview
export const reviewReducer = (state = {reviews: []}, action) =>{
  switch (action.type) {
    case MOVIE_REVIEWS_REQUEST:
      return{
        loading: true,
        reviews: []
      }

    case MOVIE_REVIEWS_SUCCESS:
      return{
        loading: false,
        reviews: action.payload.data.result
      }

    case MOVIE_REVIEWS_FAIL:
      return{
        loading: false,
        reviews: action.payload
      }

    case CLEAR_ERRORS:
      return{
        ...state,
        reviews: null
      }
  
    default:
      return state;
  }
}

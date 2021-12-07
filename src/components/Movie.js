import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getMovie } from "../redux/actions/ReviewAction";
import MovieDetailCard from "./MovieDetailCard";
import Spinner from "./Spinner";
import Reviews from "./Reviews";
import axios from "axios";

const Movie = ({alerts, isAuthenticated}) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, movie } = useSelector((state) => state.movie);

  const [movieReview, setMovieReview] = useState('');

  const submitReview = async(event) =>{
    event.preventDefault();
      
    await axios.post(`http://localhost:5000/api/reviews/movie/${id}`, { movieReview: movieReview })
    alerts("Review Added Successfully", "success");
    
  }

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getMovie(id));
  }, [dispatch, id, error]);

  return (
    <div className="container">
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {movie &&
              movie.map((parmovie) => (
                <MovieDetailCard parmovie={parmovie} key={parmovie.id} />
              ))}
          </>
        )}
      </div>
      <div className="mb-3 pqr text-center">
        <h1>Give Review</h1>
        <div className="givereview">
          <div className="mb-3" style={{ width: "50%", margin: "auto" }}>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setMovieReview(e.target.value);
              }}
            />
          </div>
          {isAuthenticated ? (<button type="submit" className="btn btn-primary" onClick={submitReview}>
            Submit
          </button>): <h5>Please Login to Submit Review</h5>}

        </div>
      </div>
      <div className="my-4">
        <h1 className="text-center">Reviews</h1>
        <Reviews id={id}/>
      </div>
    </div>
  );
};

export default Movie;

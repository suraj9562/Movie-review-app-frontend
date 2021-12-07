import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getMovies } from "../redux/actions/ReviewAction";
import Spinner from "./Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state.movies);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getMovies());
  }, [dispatch, error]);
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="row">
            {movies &&
              movies.map((movie) => (
                <div key={movie.id} className="col-md-4">
                  <MovieCard movie={movie} />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

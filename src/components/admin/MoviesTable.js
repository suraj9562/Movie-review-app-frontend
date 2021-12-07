import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, getMovies } from "../../redux/actions/ReviewAction";
import Spinner from "../Spinner";
import axios from "axios";

const MoviesTable = () => {
  const dispatch = useDispatch();
  const { movies, loading, error} = useSelector((state) => state.movies);


  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getMovies());
  }, [dispatch, error]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Movie Id</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((movie) => (
                <tr key={movie.id}>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.name}</td>
                  <td>
                  <Link to={`/dashboard/updateMovie/${movie.id}`}><button
                      className="btn btn-outline-primary m-2"
                      type="button"
                    >
                      Edit Details
                    </button></Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary m-2"
                      type="button"
                      onClick={async()=>{
                        await axios.delete(`http://localhost:5000/api/movie/delete/${movie.id}`);
                      }}
                    >
                      Delete Movie
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesTable;

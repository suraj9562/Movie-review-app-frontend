import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { clearErrors, getMovie } from "../../redux/actions/ReviewAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let mname = "";
  let murl = "";
  let mdesc = "";
  let mdur = "";

  const { loading, error, movie } = useSelector((state) => state.movie);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getMovie(id));
  }, [dispatch, id, error]);

  {
    movie &&
      movie.map((parmovie) => {
        mname = parmovie.name;
        murl = parmovie.bannerUrl;
        mdesc = parmovie.description;
        mdur = parmovie.duration;
      });
  }
  const [movieName, setMovieName] = useState(mname);
  const [movieUrl, setMovieUrl] = useState(murl);
  const [movieDesc, setMovieDesc] = useState(mdesc);
  const [movieDuration, setMovieDuration] = useState(mdur);

  const editMovie = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:5000/api/movie/update/${id}`, {
      movieName: movieName,
      movieUrl: movieUrl,
      movieDuration: movieDuration,
      movieDesc: movieDesc,
    });
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="text-center my-3">
            <h4>Back To Dashboard</h4>
            <Link to="/dashboard">
              <button className="btn btn-outline-primary m-2" type="button">
                Back To Dashboard
              </button>
            </Link>
          </div>
          <form className="row g-2 needs-validation m-5" novalidate>
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Movie Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Movie Name"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                Movie Duration
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Duration"
                value={movieDuration}
                onChange={(e) => setMovieDuration(e.target.value)}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">
                Banner Link
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03" 
                value={movieUrl}
                onChange={(e) => setMovieUrl(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">
                Movie Description
              </label>
              <textarea
                className="form-control"
                id="validationTextarea"
                value={movieDesc}
                onChange={(e) => setMovieDesc(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={editMovie}
              >
                Edit Movie
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditMovie;

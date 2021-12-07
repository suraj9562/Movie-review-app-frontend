import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="card mt-3 p-1" style={{ width: "15rem" }}>
        <img className="card-img-top" src={movie.bannerUrl} alt={movie.name} />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text">{movie.duration}</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

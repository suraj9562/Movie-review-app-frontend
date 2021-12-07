import React from "react";

const MovieDetailCard = ({parmovie}) => {
  return (
    <div>
      <div className="crapper">
        <div className="lmn">
          <div className="cuter">
            <div className="ccontent">
              <h1>{parmovie.name}</h1>
              <p>
                {parmovie.description}
              </p>
              <br />
              <span>
                {" "}
                <b>Duration : </b> {parmovie.duration}
              </span>
            </div>
            <img
              src={parmovie.bannerUrl}
              width="400px" alt={parmovie.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;

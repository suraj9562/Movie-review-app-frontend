import React from "react";
import Profile from "../images/Profile.png";

const Review = ({review}) => {
  return (
    <div className="cardcontainer">
      <div className="reviewcard">
        <div className="reviewheader">
          <img src={Profile} alt="User" />
          <h5 className="mx-2">User</h5>
        </div>
        <p className="mt-2 px-4">{review.movieReview}</p>
      </div>
    </div>
  );
};

export default Review;

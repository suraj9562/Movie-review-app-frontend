import React, { useEffect } from "react";
import Review from "./Review";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getReviews } from "../redux/actions/ReviewAction";
import Spinner from "./Spinner";

const Reviews = ({ id }) => {
  const dispatch = useDispatch();

  const { loading, reviews, error } = useSelector((state) => state.reviews);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getReviews(id));
  }, [dispatch, id, error]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {reviews && reviews[0] ? (
            <div>
              {reviews &&
                reviews.map((review) => (
                  <div className="mt-2" key={review.id}>
                    <Review review={review} />
                  </div>
                ))}
            </div>
          ) : (
            <h2 className="m-3 text-center">No Reviews Avaliable</h2>
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;

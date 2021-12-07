import React from "react";
import Loading from "../images/ajax-loader.gif";


const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={Loading} alt="spinner" />
    </div>
  );
};

export default Spinner;

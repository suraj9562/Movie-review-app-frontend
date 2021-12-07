import React from "react";
import { Link } from "react-router-dom";

const MainLogin = () => {
  return (
    <div className="mainloginContainer">
      <div className="mainloginbox">
        <Link to="/login">
          <input type="button" className="goNextButton" value="Login / Register" />
        </Link>
        <Link to="/adminLogin">
          <input
            type="button"
            className="goNextButton"
            value="Login As Admin"
          />
        </Link>
      </div>
    </div>
  );
};

export default MainLogin;

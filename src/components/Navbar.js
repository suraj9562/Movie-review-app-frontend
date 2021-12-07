import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {logout} from "../redux/actions/UserAction";
import {useDispatch} from "react-redux"

export default function Navbar(props) {
  const location = useLocation();
  const dispatch = useDispatch();

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    props.userType === "admin" ? "" : "disabled"
                  }`}
                  to="/dashboard"
                >
                  Dashoboard
                </Link>
              </li>
            </ul>

            {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.toggleText}
              </label>
            </div>

            {props.isAuthenticated ? (
                <button className="btn btn-outline-primary m-2" type="button" onClick={logOut}>
                  Log Out
                </button>
            ) : (
              <Link to="/loginopt">
                {" "}
                <button className="btn btn-outline-primary m-2" type="button">
                  Log-In
                </button>{" "}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired, //title chi type set karun te required ahe mhanun sangat ahot....
};

Navbar.defaultProps = {
  title: "set title",
  aboutText: "set About Text",
};

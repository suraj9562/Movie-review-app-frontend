import React from "react";
import { Link } from "react-router-dom";
import MoviesTable from "./MoviesTable";

const Dashboard = () => {


  return (
    <div className="container">
      <div className="text-center my-3">
        <h4>Add Movie</h4>
        <Link to="/dashboard/addmovie">
          <button className="btn btn-outline-primary m-2" type="button">
            Add Movie
          </button>
        </Link>
      </div>

      <MoviesTable />
    </div>
  );
};

export default Dashboard;

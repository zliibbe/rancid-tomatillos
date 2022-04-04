import React from "react";
import "../styles/MovieOverview.css";
import { Link } from "react-router-dom";

const MovieOverview = ({ id, posterPath, title }) => {
  return (
    <div className="movie-card" tabIndex="1">
      <Link to={`/movies/${id}`} style={{ textDecoration: "none" }}>
        <img className="movie-card-poster" src={posterPath} />
        <h1 className="movie-title-poster">{title}</h1>
      </Link>
    </div>
  );
};

export default MovieOverview;

import React from "react";
import "../styles/MovieDetail.css";
import { fetchMovies } from "../apiCalls";
import DayJS from "react-dayjs";
import { Link } from "react-router-dom";
import { postStarredMovie } from "../apiCalls";

class MovieDetail extends React.Component {
  constructor({ movieID, errorHandling }) {
    super();
    this.state = {
      movieDetails: {},
      movieID: movieID,
      error: "",
      errorHandling: errorHandling,
      isStarred: false,
    };
  }

  formatCurrency = (cost) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(cost);
  };

  formatGenres = (genres) => {
    return genres.join(", ");
  };

  postNewFavorite = () => {
    const movieToStar = {
      id: this.state.movieID,
      title: this.state.movieDetails.title,
      poster_path: this.state.movieDetails.poster_path,
    };
    postStarredMovie(movieToStar).catch((error) => {
      this.setState({ error: error.message, isStarred: false });
    });

    this.setState({ isStarred: true });
  };

  componentDidMount = () => {
    fetchMovies(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieID}`
    )
      .then((data) => {
        this.setState({
          movieDetails: data.movie,
        });
      })
      .catch((error) => {
        this.state.errorHandling();
        console.warn(error);
      });
  };

  render() {
    return (
      <main
        className="single-movie-section"
        style={
          this.state.movieDetails.backdrop_path ===
          "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg"
            ? {
                backgroundImage: `url(${this.state.movieDetails.poster_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
            : {
                backgroundImage: `url(${this.state.movieDetails.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
        }
      >
        <div className="single-movie-container">
          <section className="movie-main">
            <div className="poster-rating-container">
              <img
                className="poster-img"
                src={this.state.movieDetails.poster_path}
                alt="Movie poster"
              />
              <div className="rating-star-container">
                <p className="avg-rating">
                  <i>Average Rating: </i>
                  {Math.round(this.state.movieDetails.average_rating * 10) /
                    10}{" "}
                  / 10
                </p>
                {this.state.isStarred && (
                  <button
                    className="star-movie-btn solid"
                    type="button"
                    onClick={() => this.postNewFavorite()}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                )}
                {!this.state.isStarred && (
                  <button
                    className="star-movie-btn outline"
                    aria-label="Favorite Movie button"
                    type="button"
                    onClick={() => this.postNewFavorite()}
                  >
                    <svg
                      className="w-6 h-6"
                      alt="Favorite Movie Button"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                  </button>
                )}
                {this.state.error && (
                  <p className="fav-error">
                    You've already favorited this movie!
                  </p>
                )}
              </div>
            </div>
            <div className="title-description-container">
              <h1 className="movie-title">{this.state.movieDetails.title}</h1>
              {!this.state.movieDetails.overview ? (
                <p className="movie-overview">No Description Available</p>
              ) : (
                <p className="movie-overview">
                  {this.state.movieDetails.overview}
                </p>
              )}
              <div className="movie-details-section">
                <p className="release-date">
                  <i>Released:</i>{" "}
                  <DayJS format="MMMM DD, YYYY">
                    {this.state.movieDetails.release_date}
                  </DayJS>
                </p>
                {this.state.movieDetails.genres && (
                  <p>
                    <i>Genres: </i>
                    {this.formatGenres(this.state.movieDetails.genres)}
                  </p>
                )}
                {this.state.movieDetails.runtime ? (
                  <p>{this.state.movieDetails.runtime} minutes</p>
                ) : (
                  <p>No runtime available</p>
                )}
                {this.state.movieDetails.budget != 0 && (
                  <p className="budget">
                    Budget:{" "}
                    {this.formatCurrency(this.state.movieDetails.budget)}
                  </p>
                )}
                {this.state.movieDetails.revenue != 0 && (
                  <p className="revenue">
                    Revenue:{" "}
                    {this.formatCurrency(this.state.movieDetails.revenue)}
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
        <div className="back-to-main-container">
          <Link to="/" alt="Back to Main button"style={{ textDecoration: "none" }}>
            <button className="back-to-main" aria-label="Back to Main button" type="button">
              <svg
                className="w-6 h-6"
                alt="Back to Main button"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </main>
    );
  }
}

export default MovieDetail;

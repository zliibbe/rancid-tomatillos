import React from 'react';
import '../styles/StarredMoviesContainer.css';
import { Link } from "react-router-dom";
import { fetchStarredMovies } from "../apiCalls";
import MovieOverview from './MovieOverview';

class StarredMoviesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      starredMovies: []
    }
  }

  mapStarredMovies = () => {
    this.state.starredMovies.map(movie => {
      return (
        <MovieOverview key={movie.id} id={movie.id} posterPath={movie.poster_path} title={movie.title} />
      )
    })
  }



  componentDidMount = () => {
    fetchStarredMovies()
      .then((data) => {
        this.props.sortByTitle(data.movies);
        this.setState({ starredMovies: data.movies})
      })
      .catch((error) => {
        this.props.errorHandling();
        console.warn(error);
      });
  }

  render() {
    return (
      <main className='starred-movie-main'>
        <h1>this is where starred movies will go!</h1>
        <Link to='/'>
        <button>Back to main</button>
        </Link>
      </main>
    )
  }
}



export default StarredMoviesContainer;
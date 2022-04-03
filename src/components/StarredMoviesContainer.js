import React from 'react';
import '../styles/StarredMoviesContainer.css';
import { Link } from "react-router-dom";
import { fetchStarredMovies } from "../apiCalls";
import MovieOverview from './MovieOverview';
import Error from './Error'

class StarredMoviesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      starredMovies: [],
      error: false
    }
  }

  mapStarredMovies = () => {
    return this.state.starredMovies.map(movie => {
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
        {this.state.error && <Error />}
        {!this.state.error && 
          <React.Fragment>
            <nav className='starred-header'>
              <h1>Your Starred Movies</h1>
              <Link to='/'>
                <button className='back-to-main-starred' type='button'><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg></button>
              </Link>
            </nav>
            <section className='starred-movies-container'>
              {this.mapStarredMovies()}
            </section>
          </React.Fragment>
        }
      </main>
    )
  }
}



export default StarredMoviesContainer;
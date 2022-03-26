import '../App.css';
import movieData from '../movieData';
import React from 'react';
import MoviesContainer from './MoviesContainer'
import MovieDetail from './MovieDetail';
import { fetchAllMovies } from '../apiCalls';

class App extends React.Component {
  constructor () {
    super();
    this.state = { 
      movieData: [],
      currentMovie: null,
      error: null,
    };
  }

  displaySingleMovie = (id) => {
    let foundMovie = this.state.movieData.find(movie => movie.id === id);
    this.setState({currentMovie: foundMovie})
  }

  displayMainDashboard = () => {
    this.setState({currentMovie: null})
  }

  errorHandling = () => {
    this.setState = {
      error: true
    }
  }
  
  componentDidMount = () => {
    fetchAllMovies('/movies')
    .then(data => {
      this.setState({
        movieData: data.movies
      })
    })
    .catch(error => {
      this.errorHandling()
      console.warn(error)
    })
  }

  render () {
    return (
      <main className="App">
        {!this.state.currentMovie && <nav className="header">
          <h1>Rancid Tomatillos</h1>
        </nav>}
        {this.state.error && <h2 className="error-msg">Error loading movies</h2>}
        {!this.state.currentMovie && <MoviesContainer  movieData={this.state.movieData} displaySingleMovie={this.displaySingleMovie}/>}
        {this.state.currentMovie && <MovieDetail movieDetails={this.state.currentMovie} displayMainDashboard={this.displayMainDashboard}/>}
      </main>
    );
  }

}

export default App;

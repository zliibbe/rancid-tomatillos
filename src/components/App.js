import '../App.css';
import movieData from '../movieData';
import React from 'react';
import MoviesContainer from './MoviesContainer'
import MovieDetail from './MovieDetail';

class App extends React.Component {
  constructor () {
    super();
    this.state = { 
      movieData: movieData.movies,
      currentMovie: null
    };
  }

  displaySingleMovie = (id) => {
    let foundMovie = this.state.movieData.find(movie => movie.id === id);
    this.setState({currentMovie: foundMovie})
  }

  displayMainDashboard = () => {
    this.setState({currentMovie: null})
  }

  render () {
    return (
      <main className="App">
        {!this.state.currentMovie && <nav className="header">
          <h1>Rancid Tomatillos</h1>
        </nav>}
        {!this.state.currentMovie && <MoviesContainer  movieData={this.state.movieData} displaySingleMovie={this.displaySingleMovie}/>}
        {this.state.currentMovie && <MovieDetail movieDetails={this.state.currentMovie} displayMainDashboard={this.displayMainDashboard}/>}
      </main>
    );
  }

}

export default App;

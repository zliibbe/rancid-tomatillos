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
    // needs to be able to find a movie based on id and maybe set state for a
    // currentMovie property in App? Then App can render either the 
    // MoviesContainer or the MovieDetail depending on whether that property exists
  }

  render () {
    return (
      <main className="App">
        <nav className="header">
          <h1>Rancid Tomatillos</h1>
        </nav>
        {!this.state.currentMovie && <MoviesContainer  movieData={this.state.movieData} displaySingleMovie={this.displaySingleMovie}/>}
        {this.state.currentMovie && <MovieDetail movieDetails={this.state.currentMovie}/>}
      </main>
    );
  }

}

export default App;

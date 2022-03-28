import '../App.css';
import React from 'react';
import MoviesContainer from './MoviesContainer'
import MovieDetail from './MovieDetail';
import { fetchAllMovies } from '../apiCalls';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor () {
    super();
    this.state = { 
      movieData: [],
      currentMovie: {},
      error: null,
    };
  }

  displaySingleMovie = (id) => {
    let foundMovie = this.state.movieData.find(movie => movie.id === id);
    this.setState({currentMovie: foundMovie})
  }

  // displayMainDashboard = () => {
  //   this.setState({currentMovie: {}})
  // }

  errorHandling = () => {
    this.setState({error: true})
  }
  
  sortByTitle = (movies) => {
      return movies.sort((a, b) => {
        if (a.title < b.title) {
            return -1
          } else if (a.title > b.title) {
            return 1
          } else {
            return 0
          }
      })      
  }

  componentDidMount = () => {
    fetchAllMovies('/movies')
    .then(data => {
      this.sortByTitle(data.movies)
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
        <Route exact path='/' render={() => <MoviesContainer  movieData={this.state.movieData} displaySingleMovie={this.displaySingleMovie}/>}/>
        <Route exact path={`/${this.state.currentMovie.id}`} render={() => <MovieDetail movieDetails={this.state.currentMovie} displayMainDashboard={this.displayMainDashboard}/>}/>
        {/* {this.state.currentMovie && <MovieDetail movieDetails={this.state.currentMovie} displayMainDashboard={this.displayMainDashboard}/>} */}
      </main>
    );
  }

}


// {!this.state.currentMovie && <MoviesContainer  movieData={this.state.movieData} displaySingleMovie={this.displaySingleMovie}/>}


export default App;

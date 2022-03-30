import '../App.css';
import React from 'react';
import MoviesContainer from './MoviesContainer'
import MovieDetail from './MovieDetail';
import { fetchAllMovies } from '../apiCalls';
import { Route, Link, Switch } from 'react-router-dom';
import Error from './Error'

class App extends React.Component {
  constructor () {
    super();
    this.state = { 
      movieData: [],
      currentMovie: {},
      error: null,
    };
  }

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



  render() {
    return (
      <main className="App">
        {this.state.error && <h2 className="error-msg">Error loading movies</h2>}
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <React.Fragment>
                <nav className="header"><h1>Rancid Tomatillos</h1></nav>
                <MoviesContainer movieData={this.state.movieData} displaySingleMovie={this.displaySingleMovie}/>
              </React.Fragment>
            )
          }}/>

          <Route exact path='/movies/:id' render={({ match }) => {
            return <MovieDetail movieID={parseInt(match.params.id)}/>
          }}/> 

          <Route><Error/></Route>
        </Switch>
                
      
      </main>
    )
  }
}

export default App;

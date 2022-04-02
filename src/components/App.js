import "../App.css";
import React from "react";
import MoviesContainer from "./MoviesContainer";
import MovieDetail from "./MovieDetail";
import StarredMoviesContainer from './StarredMoviesContainer';
import { fetchAllMovies } from "../apiCalls";
import { Route, Link, Switch } from "react-router-dom";
import Error from "./Error";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      currentMovie: {},
      error: false,
    };
  }

  errorHandling = () => {
    this.setState({ error: true });
  };

  resetError = () => {
    this.setState({ error: false });
  };

  sortByTitle = (movies) => {
    return movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  componentDidMount = () => {
    fetchAllMovies("/movies")
      .then((data) => {
        this.sortByTitle(data.movies);
        this.setState({
          movieData: data.movies,
        });
      })
      .catch((error) => {
        this.errorHandling();
        console.warn(error);
      });
  };

  render() {
    return (
      <main className="App">


        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <React.Fragment>
                  <nav className="header">
                    <h1 className="title">Rancid Tomatillos</h1>
                    <Link to='/movies/starred'>
                      <button className="starred-movies-nav"><svg class="star-movies-btn-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> Movies</button>
                    </Link>
                  </nav>
                  {this.state.error && <Error resetError={this.resetError} />}
                  {!this.state.error && (
                    <MoviesContainer
                      movieData={this.state.movieData}
                      displaySingleMovie={this.displaySingleMovie}
                    />
                  )}
                </React.Fragment>
              );
            }}
          />

          <Route
            exact path='/movies/starred'
            render={() => <StarredMoviesContainer 
            sortByTitle={this.sortByTitle} 
            errorHandling={this.errorHandling}/> }
          />

          <Route
            exact
            path="/movies/:id"
            render={({ match }) => {
              return (
                <React.Fragment>
                  {this.state.error && <Error resetError={this.resetError} />}
                  {!this.state.error && (
                    <MovieDetail
                      movieID={parseInt(match.params.id)}
                      errorHandling={this.errorHandling}
                    />
                  )}
                </React.Fragment>
              );
            }}
          />

          <Route>
            <Error />
          </Route>

        </Switch>
      </main>
    );
  }
}

export default App;

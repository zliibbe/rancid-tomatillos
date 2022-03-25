import '../App.css';
import movieData from '../movieData';
import React from 'react';
import MoviesContainer from './MoviesContainer'

class App extends React.Component {
  constructor () {
    super();
    this.state = { movieData: movieData.movies };

  }

  render () {
    return (
      <main className="App">
        <nav className="header">
          <h1>Rancid Tomatillos</h1>
        </nav>
        <MoviesContainer  movieData={this.state.movieData}/> 
      </main>
    );
  }

}

export default App;

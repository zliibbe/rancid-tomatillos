import React from 'react';
import '../styles/StarredMoviesContainer.css';
import { Link } from "react-router-dom";


class StarredMoviesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      starredMovies: []
    }

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
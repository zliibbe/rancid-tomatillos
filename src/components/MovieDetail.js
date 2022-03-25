import React from 'react';

class MovieDetail extends React.Component {
  constructor( { movieDetails }) {
    super();
    this.state = {
      movieDetails: movieDetails
    }
  }

  render() {
    return (
      <p>{this.state.movieDetails.title}</p>
    )
  
  }
}





export default MovieDetail;
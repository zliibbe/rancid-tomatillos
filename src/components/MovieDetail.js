import React from 'react';

class MovieDetail extends React.Component {
  constructor( { movieDetails, displayMainDashboard }) {
    super();
    this.state = {
      movieDetails: movieDetails,
      displayMainDashboard: displayMainDashboard
    }
  }

  render() {
    return (
      <section className='single-movie-section'>
        <h1>{this.state.movieDetails.title}</h1>
        <img className='poster-img' src={this.state.movieDetails.poster_path} alt="Movie poster" />
        <p className='avg-rating'>{this.state.movieDetails.average_rating}</p>
        <p className='release-date'>{this.state.movieDetails.release_date}</p>
        <img className='backdrop-img' src={this.state.movieDetails.backdrop_path} alt="Movie backdrop" />
        <button className='back-to-main' onClick={() => this.state.displayMainDashboard()}>X</button>
      </section>
    )
  
  }
}





export default MovieDetail;
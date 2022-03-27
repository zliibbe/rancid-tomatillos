import React from 'react';
import '../styles/MovieDetail.css';
import { fetchSingleMovie } from '../apiCalls';

class MovieDetail extends React.Component {
  constructor( { movieDetails, displayMainDashboard }) {
    super();
    this.state = {
      movieDetails: movieDetails,
      displayMainDashboard: displayMainDashboard
    }
  }

componentDidMount = () => {
  fetchSingleMovie(this.state.movieDetails.id)
  .then(data => { 
    this.setState({
        movieDetails: data.movie
    })
  })
}

  render() {
    return (
      <main className='single-movie-section' style={{backgroundImage: `url(${this.state.movieDetails.backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='single-movie-container'>

          <section className='movie-main'>

            <div className='poster-rating-container'>
              <img className='poster-img' src={this.state.movieDetails.poster_path} alt="Movie poster" />
              <p className='avg-rating'>Rating: {Math.round(this.state.movieDetails.average_rating * 10)/10} / 10</p>
            </div>

            <div className='title-description-container'>
              <h1 className='movie-title'>{this.state.movieDetails.title}</h1>
              {!this.state.movieDetails.overview && <p className='movie-overview'>No Description Available</p>}
              <p className='movie-overview'>{this.state.movieDetails.overview}</p>
              <div className='genre-section'>
                <p className='release-date'>{this.state.movieDetails.release_date}</p>
                <p>⎮</p>
                <p>{this.state.movieDetails.genres}</p>
                <p>⎮</p>
                {!this.state.movieDetails.runtime && <p>No runtime available</p>}
                {this.state.movieDetails.runtime != 0 && <p>{this.state.movieDetails.runtime} minutes</p>}
              </div>
              <div className='budget-revenue'>
                {this.state.movieDetails.budget != 0 && <p className='budget'>Budget: {this.state.movieDetails.budget}</p>}
                {this.state.movieDetails.revenue != 0 && <p className='revenue'>Revenue: {this.state.movieDetails.revenue}</p>}
              </div>
            </div>
          
          </section>
  
        </div>
        <div className='back-to-main-container'>
          <button className='back-to-main' type='button' onClick={() => this.state.displayMainDashboard()}>X</button>
        </div>
      </main>
    )
  }
}





export default MovieDetail;
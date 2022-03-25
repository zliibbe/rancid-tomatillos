import React from 'react';
import '../styles/MovieDetail.css'

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
      <main className='single-movie-section' style={{backgroundImage: `url(${this.state.movieDetails.backdrop_path})`, 'background-repeat': 'no-repeat', 'background-size': 'cover'}}>
        <div className='single-movie-container'>

          <section className='movie-main'>

            <div className='poster-rating-container'>
              <img className='poster-img' src={this.state.movieDetails.poster_path} alt="Movie poster" />
              <p className='avg-rating'>{this.state.movieDetails.average_rating}</p>
            </div>

            <div className='title-description-container'>
              <h1 className='movie-title'>{this.state.movieDetails.title}</h1>
              <p className='movie-overview'>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
            </div>
            

          </section>
          <section className='movie-details'>
            <p className='release-date'>{this.state.movieDetails.release_date}</p>
          </section>
        </div>
        <div className='back-to-main-container'>
          <button className='back-to-main' onClick={() => this.state.displayMainDashboard()}>X</button>
        </div>
        {/* <img className='backdrop-img' src={this.state.movieDetails.backdrop_path} alt="Movie backdrop" /> */}
      </main>
    )
  }
}





export default MovieDetail;
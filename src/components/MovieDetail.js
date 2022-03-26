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
      <main className='single-movie-section' style={{backgroundImage: `url(${this.state.movieDetails.backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='single-movie-container'>

          <section className='movie-main'>

            <div className='poster-rating-container'>
              <img className='poster-img' src={this.state.movieDetails.poster_path} alt="Movie poster" />
              <p className='avg-rating'>{this.state.movieDetails.average_rating}</p>
            </div>

            <div className='title-description-container'>
              <h1 className='movie-title'>{this.state.movieDetails.title}</h1>
              <p className='movie-overview'>New Seasons organic dog parks stumptown gluten free mustachioed bartenders microbrew freegans breweries Alberta Arts local honey gentrification stumptown pearl district outdoorsy. Kristian Foden-Vencil beard 82nd Avenue of Roses Silicon Forest clouds stripclubs vibrant Impossible Burger faux bacon Plaid Pantry farm to table it's raining again Voodoo Donuts food carts Cascadia a dog gym. </p>
              <div className='genre-section'>
                <p className='release-date'>{this.state.movieDetails.release_date}</p>
                <p>⎮</p>
                <p>Genre goes here</p>
                <p>⎮</p>
                <p>2h 23m runtime</p>
              </div>
            </div>
          
          </section>
  
        </div>
        <div className='back-to-main-container'>
          <button className='back-to-main' onClick={() => this.state.displayMainDashboard()}>X</button>
        </div>
      </main>
    )
  }
}





export default MovieDetail;
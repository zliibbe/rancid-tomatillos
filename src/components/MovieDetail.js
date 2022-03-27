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

  
  formatCurrency = (cost) => {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})
    return formatter.format(cost)
  }
  
  componentDidMount = () => {
    fetchSingleMovie(this.state.movieDetails.id)
    .then(data => { 
      this.setState({
        movieDetails: data.movie

      })
    })
  }

  // formatGenres = () => {
  //   console.log(this.state.movieDetails.genres)
  //   this.state.movieDetails.genres.map(genre => {
  //     // return (
  //     //   {genre, }
  //     // )
  //   })
  // }
  
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
                <p>{[this.state.movieDetails.genres].join(', ')}</p>
                <p>⎮</p>
                { this.state.movieDetails.runtime ? <p>{this.state.movieDetails.runtime} minutes</p> : <p>No runtime available</p> }
              </div>
              <div className='budget-revenue'>
                {this.state.movieDetails.budget != 0 && <p className='budget'>Budget: {this.formatCurrency(this.state.movieDetails.budget)}</p>}
                {this.state.movieDetails.revenue != 0 && <p className='revenue'>Revenue: {this.formatCurrency(this.state.movieDetails.revenue)}</p>}
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
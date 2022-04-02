import React from 'react';
import '../styles/MovieDetail.css';
import { fetchSingleMovie } from '../apiCalls';
import DayJS from 'react-dayjs';
import { Link } from 'react-router-dom';
import Error from './Error'
import { postStarredMovie } from '../apiCalls';

class MovieDetail extends React.Component {
  constructor( { movieID, errorHandling }) {
    super();
    this.state = {
      movieDetails: {},
      movieID: movieID,
      error: null,
      errorHandling: errorHandling
    }
  }

  formatCurrency = (cost) => {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})
    return formatter.format(cost)
  }

  formatGenres = (genres) => {
    let genreList = genres.reduce((list, genre) => list += `${genre}, `, '')
    return genreList.slice(0, genreList.length - 2)
  }

  postNewFavorite = () => {
    const movieToStar = {
      id: this.state.movieID,
      title: this.state.movieDetails.title,
      poster_path: this.state.movieDetails.poster_path
    }
    postStarredMovie(movieToStar)
      // .catch(error => {
      //   this.state.errorHandling()
      //   console.warn(error)
      // })
  }
  
  componentDidMount = () => {
    fetchSingleMovie(this.state.movieID)
    .then(data => { 
      this.setState({
        movieDetails: data.movie
      })
    })
    .catch(error => {
      this.state.errorHandling()
      console.warn(error)
    })
  }
  
  render() {
    return (
      <main className='single-movie-section' style={{backgroundImage: `url(${this.state.movieDetails.backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='single-movie-container'>

          <section className='movie-main'>

            <div className='poster-rating-container'>
              <img className='poster-img' src={this.state.movieDetails.poster_path} alt="Movie poster" />
              <div className='rating-star-container'>
                <p className='avg-rating'><i>Rating: </i>{Math.round(this.state.movieDetails.average_rating * 10)/10} / 10</p>
                <button className='star-movie-btn' type='button' onClick={() => this.postNewFavorite()}>Star Movie</button>

              </div>
            </div>
            
            <div className='title-description-container'>
              <h1 className='movie-title'>{this.state.movieDetails.title}</h1>
              {!this.state.movieDetails.overview ? <p className='movie-overview'>No Description Available</p> : <p className='movie-overview'>{this.state.movieDetails.overview}</p>}
              
              <div className='movie-details-section'>
                <p className='release-date'><i>Released:</i> <DayJS format="MMMM DD, YYYY">{this.state.movieDetails.release_date}</DayJS></p>
                {this.state.movieDetails.genres && <p><i>Genres: </i>{this.formatGenres(this.state.movieDetails.genres)}</p>}
                {this.state.movieDetails.runtime ? <p>{this.state.movieDetails.runtime} minutes</p> : <p>No runtime available</p> }
                {this.state.movieDetails.budget != 0 && <p className='budget'>Budget: {this.formatCurrency(this.state.movieDetails.budget)}</p>}
                {this.state.movieDetails.revenue != 0 && <p className='revenue'>Revenue: {this.formatCurrency(this.state.movieDetails.revenue)}</p>}
              </div>
            </div>
          
          </section>
  
        </div>
        <div className='back-to-main-container'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <button className='back-to-main' type='button'><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></button>
          </Link>
        </div>
      </main>
    )
  }

}







export default MovieDetail;
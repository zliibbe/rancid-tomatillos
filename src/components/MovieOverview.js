import React from 'react';
import '../styles/MovieOverview.css'
import { Link } from 'react-router-dom';

class MovieOverview extends React.Component {
    constructor ({ key, id, posterPath, title, displaySingleMovie}) {
        super();
        this.state = {
            id: id,
            title: title,
            posterPath: posterPath,
            displaySingleMovie: displaySingleMovie
        }
    }

    render() {
        return (
        <div className='movie-card' tabIndex='1'>
            <Link to={`/movies/${this.state.id}`} style={{ textDecoration: 'none' }}>
                <img className='movie-card-poster' src={this.state.posterPath}/>
                <h1 className='movie-title-poster'>{this.state.title}</h1>
            </Link>
        </div>
        )
    }
}


export default MovieOverview;
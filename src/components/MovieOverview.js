import React from 'react';
import '../styles/MovieOverview.css'

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
        <div className='movie-card' onClick={() => this.state.displaySingleMovie(this.state.id)}>
            <img src={this.state.posterPath}/>
            <h1 className='movie-title-poster'>{this.state.title}</h1>
        </div>
        )
    }
}

export default MovieOverview;
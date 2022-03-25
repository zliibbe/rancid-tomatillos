import React from 'react';

class MovieOverview extends React.Component {
    constructor ({ key, id, posterPath, title}) {
        super();
        this.state = {
            id: id,
            title: title,
            posterPath: posterPath,
        }
    }

    render() {
        return (
        <div className='movie-card' onClick={() => displaySingleMovie(this.state.id)}>
            <img src={this.state.posterPath}/>
            <h1 className='movie-title'>{this.state.title}</h1>
        </div>
        )
    }
}

export default MovieOverview;
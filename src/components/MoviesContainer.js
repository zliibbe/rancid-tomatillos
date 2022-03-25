import React from 'react';
import MovieOverview from './MovieOverview';

const MoviesContainer = ({ movieData }) => {
    const movies = movieData.map(movie => {
        return (
            <MovieOverview key={movie.id} id={movie.id} posterPath={movie.poster_path} title={movie.title}/>
        )
    })

    return (<section className="movie-container">{movies}</section>)
}

export default MoviesContainer;

import React from 'react'
import PropTypes from 'prop-types'

const MovieCard = ({ movie }) => {
    const img = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
    return (
        <div key={movie.backdrop_path} className="movieCard">
            <h3 className='movieCard-title'>{movie.title}</h3>
            <img src={img} alt={movie.title + " poster"} /> <br />
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }),
}

export default MovieCard
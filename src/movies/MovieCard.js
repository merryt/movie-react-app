import React from 'react'
import PropTypes from 'prop-types'

const MovieCard = ({ movie }) => {
    return (
        <li key={movie}> {movie} </li>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.string.isRequired,
}

export default MovieCard
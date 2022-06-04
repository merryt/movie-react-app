import React from 'react'
import PropTypes from 'prop-types'

export const MovieCard = ({ movie }) => {
    return (
        <li key={movie}> {movie} </li>
    )
}

MovieCard.prototype = {
    movie: PropTypes.string.isRequired
}
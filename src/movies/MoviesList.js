import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from "prop-types"

const MoviesList = ({ searchText }) => {
    const movies = ["supermang", "spidermang", "shrek"]
    return (
        <div>
            <ul>
                {
                    movies.filter((movie) =>
                        movie.toLowerCase().includes(searchText.toLowerCase())
                    ).map(item => <MovieCard movie={item} key={item} />)
                }
            </ul>
        </div>
    )
}

MoviesList.propTypes = {
    searchText: PropTypes.string.isRequired,
};

export default MoviesList
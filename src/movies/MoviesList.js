import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import PropTypes from "prop-types"

const MoviesList = ({ searchText }) => {
    const movies = ["supermang", "spidermang", "shrek"]
    const ulRef = useRef(null)
    console.log(ulRef)


    return (
        <div>
            <ul ref={ulRef}>
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
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import PropTypes from "prop-types"
import MOVIE_API_KEY from "../env"


const MoviesList = ({ searchText }) => {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMovies()
        // empty array acts as mount
    }, [])



    return (
        <div>
            {
                movies.filter((movie) =>
                    movie.original_title.toLowerCase().includes(searchText.toLowerCase())
                )
                    .map(item => <MovieCard movie={item} key={item.id} />)
            }
        </div>
    )
}

MoviesList.propTypes = {
    searchText: PropTypes.string.isRequired,
};

export default MoviesList
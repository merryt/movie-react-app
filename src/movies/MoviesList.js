import React from 'react'
import { MovieCard } from './MovieCard'

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
            <MovieCard />
            <MovieCard movie="2" />
        </div>
    )
}

export default MoviesList
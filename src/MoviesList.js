import React, { useState } from 'react'

const MoviesList = ({ searchText }) => {
    const movies = ["supermang", "spidermang", "shrek"]
    return (
        <div>
            <ul>
                {
                    movies.filter((movie) => {
                        return movie.toLowerCase().includes(searchText.toLowerCase())
                    }).map(item => <li key={item}> {item} </li>)}
            </ul>
        </div>
    )
}

export default MoviesList
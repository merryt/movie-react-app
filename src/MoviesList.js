import React, { useState } from 'react'

const MoviesList = ({ searchText }) => {
    const movies = ["supermang", "spidermang", "shrek"]
    console.log(searchText)
    return (
        <div>
            <ul>
                {
                    movies.filter((movie) => {
                        console.log(searchText)
                        return movie.includes(searchText)
                    }).map(item => <li key={item}> {item} </li>)}
            </ul>
        </div>
    )
}

export default MoviesList
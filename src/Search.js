import React, { useState } from 'react'

export const Search = ({ handleChange }) => {
    const [searchText, setSearchText] = useState("")


    return (
        <div>Search <input
            placeholder="movie to search for"
            onChange={(e) => {
                setSearchText(e.target.value)
                handleChange(e.target.value)
            }}
            value={searchText}

        ></input></div>
    )
}

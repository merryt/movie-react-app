import React, { useState } from 'react'

export const Filter = ({ handleChange, filter = "" }) => {
    const [searchText, setSearchText] = useState(filter)


    return (
        <div>Filter:
            <input
                placeholder="movie to search for"
                onChange={(e) => {
                    setSearchText(e.target.value)
                    handleChange(e.target.value)
                }}
                value={searchText}

            ></input></div>
    )
}

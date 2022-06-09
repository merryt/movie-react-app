import React, { useState } from 'react'

export const ShowCount = ({ handleChange = () => { }, count = "20", selected = false }) => {
    const [value, setValue] = useState(count)
    const values = [1, 5, 10, 20]

    return (
        <div>show per screen:
            <select
                onChange={({ target: { value } }) => handleChange(value)}
                defaultValue={value}
            >
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div >
    )
}

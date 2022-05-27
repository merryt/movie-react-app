import React, { useState } from 'react'

export const Accordian = () => {
    const [isShown, setIsShown] = useState(true)

    return (
        <div>
            <button onClick={() => { setIsShown(!isShown) }}>toggle</button>
            <div>
                {isShown ? <p>this is an if then concept</p> : <p>this would be the else state</p>}
            </div>

            {isShown && <em>this is a show or not templating concept</em>}

        </div>
    )
}

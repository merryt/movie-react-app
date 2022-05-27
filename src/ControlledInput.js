import React, { useState } from 'react'

const ControlledInput = () => {
    const [inputText, setInputText] = useState("")

    return (
        <div>
            {inputText}
            <br />
            <input placeholder='First name' onChange={(e) => {
                setInputText(e.target.value)
            }
            } value={inputText.value}></input>
        </div >
    )
}

export default ControlledInput
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+1 </button><button onClick={() => setCount(count - 1)}>-1 </button>
            <div>{count}</div>
        </div>
    )
}

export default Counter
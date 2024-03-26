import React, { useEffect } from 'react'

function Timer({ dispatch, timer }) {
    const mins = Math.floor(timer / 60);
    const sec = timer % 60;
    useEffect(() => {
        const time = setInterval(() => {
            dispatch({ type: "timer" })
        }, 1000)
        return () => clearInterval(time)
    }, [dispatch])
    return (
        <div className='timer'>{mins.toLocaleString('en-US', { minimumIntegerDigits: 2 })} : {sec.toLocaleString('en-US', { minimumIntegerDigits: 2 })} </div>
    )
}

export default Timer
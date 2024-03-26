import React from 'react'

function StartScreen({ numQuestion, setStatus }) {
    return (
        <div className='start'>
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestion} questions to test Your React Mastry</h3>
            <button className='btn btn-ui' onClick={() => setStatus("start")} >Let's Start!</button>
        </div>
    )
}

export default StartScreen
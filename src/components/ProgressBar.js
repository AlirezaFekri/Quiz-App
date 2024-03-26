import React from 'react'

function ProgressBar({ numQuestion, index, points, sumPoint, answer }) {
    return (
        <header className='progress'>
            <progress max={numQuestion} value={index + Number(answer !== null)} />
            <p> Qeustion <strong>{index + 1}</strong> / {numQuestion}</p>
            <p>  <strong>{points}</strong> / {sumPoint}</p>
        </header>
    )
}

export default ProgressBar
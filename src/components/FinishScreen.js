import React from 'react'
import { useQuiz } from '../context/QuizProvider';

function FinishScreen() {
    const { points, sumPoint, highScore, dispatch } = useQuiz();
    const precent = (100 * points) / sumPoint;
    return (
        <>
            <div className='result'>
                <span>🏆</span>
                <p>
                    You scored <strong>{points}</strong> out of {sumPoint} ({Math.ceil(precent)}%)
                </p>
            </div>
            <p className='highscore'>
                (Highscore: {highScore} point)
            </p>
            <button className='btn btn-ui' onClick={() => dispatch({ type: "reset" })}>Restart Quiz</button>
        </>
    )
}

export default FinishScreen
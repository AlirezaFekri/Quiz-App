import React, { useEffect } from 'react'
import Option from './Option';
import ProgressBar from './ProgressBar';
import Timer from './Timer';

function Qeustion({ numQuestion, question, dispatch, answer, index, points, sumPoint, timer }) {
    useEffect(() => {
        document.title = `Question ${index + 1} : ${question.question}`;

        return () => document.title = "Finished your Quiz!"
    }, [question.question, index])
    return (
        <div>
            <ProgressBar numQuestion={numQuestion} index={index} points={points} sumPoint={sumPoint} answer={answer} />
            <h4>{question.question}</h4>
            <Option question={question} answer={answer} dispatch={dispatch} />
            {
                answer !== null ?
                    index === numQuestion - 1 ?
                        <button className='btn btn-ui' onClick={() => dispatch({ type: "finish" })}>Fnish</button> :
                        <button className='btn btn-ui' onClick={() => dispatch({ type: "nextQuestion" })}> Next Question</button> :
                    <></>
            }
            <Timer dispatch={dispatch} timer={timer} />

        </div >
    )
}

export default Qeustion
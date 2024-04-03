import React, { useEffect } from 'react'
import Option from './Option';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import { useQuiz } from '../context/QuizProvider';

function Qeustion() {
    const { questions, index, answer, numQuestion, dispatch, points, sumPoint, timer } = useQuiz()
    useEffect(() => {
        document.title = `Question ${index + 1} : ${questions[index].question}`;

        return () => document.title = "Finished your Quiz!"
    }, [questions, index])
    return (
        <div>
            <ProgressBar numQuestion={numQuestion} index={index} points={points} sumPoint={sumPoint} answer={answer} />
            <h4>{questions[index].question}</h4>
            <Option question={questions[index]} />
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
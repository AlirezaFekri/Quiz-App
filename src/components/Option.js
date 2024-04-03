import React from 'react'
import { useQuiz } from '../context/QuizProvider';

function Option() {
    const { questions, index, answer, dispatch } = useQuiz();

    const hasAnswerd = answer !== null;

    return (
        <div className='options'>
            {questions[index].options.map((option, i) =>
                <button
                    className={`btn btn-option ${answer === i ? "answer" : ""}  ${hasAnswerd ? questions[index].correctOption === i ? "correct" : "wrong" : ""}`}
                    onClick={() => dispatch({ type: "newAnswer", payload: i })}
                    key={option}
                    disabled={answer}
                >
                    {option}
                </button>)
            }

        </div >
    )
}
export default Option

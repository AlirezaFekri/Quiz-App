import React from 'react'

function Option({ question, dispatch, answer }) {

    const hasAnswerd = answer !== null;

    return (
        <div className='options'>
            {question.options.map((option, index) =>
                <button
                    className={`btn btn-option ${answer === index ? "answer" : ""}  ${hasAnswerd ? question.correctOption === index ? "correct" : "wrong" : ""}`}
                    onClick={() => dispatch({ type: "newAnswer", payload: index })}
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
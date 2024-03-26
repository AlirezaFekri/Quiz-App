import React from 'react'
import Option from './Option';

function Qeustion({ numQuestion, question, dispatch, answer }) {
    return (
        <div>
            <h4>{question.question}</h4>
            <Option question={question} answer={answer} dispatch={dispatch} />
            {
                answer !== null && <button className='btn btn-ui' onClick={() => dispatch({type: "nextQuestion"})}> Next Question</button>
            }
        </div>
    )
}

export default Qeustion
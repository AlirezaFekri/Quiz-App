import React, { useEffect } from 'react'
import { useQuiz } from "./../context/QuizProvider";
function StartScreen() {
    const {numQuestion, changeStatus} = useQuiz();
    useEffect(() => {
        document.title = "Start Your Quiz"
    }, [])
    return (
        <div className='start'>
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestion} questions to test Your React Mastry</h3>
            <button className='btn btn-ui' onClick={() => changeStatus("start")} >Let's Start!</button>
        </div>
    )
}

export default StartScreen
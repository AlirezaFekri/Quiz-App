import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Qeustion from './components/Qeustion'
import FinishScreen from './components/FinishScreen'

const initialState = {
  questions: [],
  status: "loading",
  index: 13,
  answer: null,
  points: 0,
  highScore: 0
}
function reducer(state, action) {

  const question = state.questions.at(state.index)

  switch (action.type) {
    case "getData":
      return { ...state, status: "ready", questions: action.payload }
    case "error":
      return { ...state, status: "error" }
    case "start":
      return { ...state, status: "start" }
    case "newAnswer":
      return { ...state, answer: action.payload, points: question.correctOption === action.payload ? state.points + question.points : state.points }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null }
    case "finish":
      return { ...state, status: "finish", highScore: state.highScore < state.points ? state.points : state.highScore }
    case "reset":
      return { ...state, status: "ready", index: 0, answer: null, points: 0 }

    default:
      break;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highScore } = state;
  const numQuestion = questions.length;
  const sumPoint = questions.reduce((acc, cur) => acc + cur.points, 0);

  function changeStatus(statusName) {
    dispatch({ type: statusName })
  }

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "getData", payload: data }))
      .catch(err => dispatch({ type: "error" }))
  }, [])

  return (
    <div className='app'>
      <Header />
      <Main>

        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestion={numQuestion} setStatus={changeStatus} />}
        {status === "start" && <Qeustion question={questions[index]} answer={answer} numQuestion={numQuestion} dispatch={dispatch} index={index} points={points} sumPoint={sumPoint} />}
        {status === "finish" && <FinishScreen points={points} sumPoint={sumPoint} highScore={highScore} dispatch={dispatch} />}
      </Main>
    </div>
  )
}

export default App
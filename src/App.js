import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/main'

const initialState = {
  questions: [],
  status: "loading"
}
function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, status: "ready", questions: action.payload }
    case "error":
      return { ...state, status: "error" }

    default:
      break;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status } = state;
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

        {
          status === "loading" && <p>Loading...</p>
        }
        {
          status === "ready" &&
          <>
            <p>1/{questions.length}</p>
            <p>Question</p>
          </>
        }
        {
          status === "error" && <p>an error occurd</p>
        }
      </Main>
    </div>
  )
}

export default App
import { createContext, useContext, useEffect, useReducer } from "react"

const QuizContext = createContext();
const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highScore: 0,
    timer: null
}
function reducer(state, action) {

    const question = state.questions.at(state.index)

    switch (action.type) {
        case "getData":
            return { ...state, status: "ready", questions: action.payload }
        case "error":
            return { ...state, status: "error" }
        case "start":
            return { ...state, status: "start", timer: state.questions.length * 30 }
        case "newAnswer":
            return { ...state, answer: action.payload, points: question.correctOption === action.payload ? state.points + question.points : state.points }
        case "nextQuestion":
            return { ...state, index: state.index + 1, answer: null }
        case "finish":
            return { ...state, status: "finish", highScore: state.highScore < state.points ? state.points : state.highScore }
        case "reset":
            return { ...initialState, questions: state.questions, status: "ready", timer: state.questions.length * 30, highScore: state.highScore }
        case "timer":
            return { ...state, questions: state.questions, status: state.timer === 0 ? "finish" : state.status, timer: state.timer - 1, highScore: state.highScore }

        default:
            break;
    }
}

function QuizProvider({ children }) {
    const [{ questions, status, index, answer, points, highScore, timer }, dispatch] = useReducer(reducer, initialState);
    const numQuestion = questions.length;
    const sumPoint = questions.reduce((acc, cur) => acc + cur.points, 0);

    useEffect(() => {
        fetch("http://localhost:8000/questions")
            .then(res => res.json())
            .then(data => dispatch({ type: "getData", payload: data }))
            .catch(err => dispatch({ type: "error" }))
    }, [])

    function changeStatus(statusName) {
        dispatch({ type: statusName })
    }


    return (
        <QuizContext.Provider value={{ status, numQuestion, changeStatus, questions, index, answer, dispatch, points, sumPoint, timer, highScore }}>{children}</QuizContext.Provider>
    )
}
function useQuiz() {
    const quiz = useContext(QuizContext);
    if (quiz !== undefined) {
        return quiz
    }
    throw new Error("You can use Quizprovider outside of Quizcontext")
}

export { QuizProvider, useQuiz }
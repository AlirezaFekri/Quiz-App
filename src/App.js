import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Qeustion from "./components/Qeustion";
import FinishScreen from "./components/FinishScreen";
import { useQuiz } from "./context/QuizProvider";

function App() {
	const { status } = useQuiz();

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartScreen />
				)}
				{status === "start" && (
					<Qeustion />
				)}
				{status === "finish" && (
					<FinishScreen />
				)}
			</Main>
		</div>
	);
}

export default App;

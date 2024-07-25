// react, componentes, estáticos
import { useEffect } from "react";
import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome"
import Question from "./components/Question";

import "./App.css";

function App() {
  const [quizStates, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
      <div className='App'>
        <h1>Quiz Programação</h1>
        {quizStates.gameStage === "Start" && <Welcome />}
        {quizStates.gameStage === "Playing" && <Question />}

      </div>
        
  )
}

export default App;

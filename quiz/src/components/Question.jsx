import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import './Question.css'

const Question = () => {
  const [quizStates, dispatch] = useContext(QuizContext)
  const currentQuestion = quizStates.questions[quizStates.currentQuestion]


  return (
    <div id="question">
      <p>Pergunta {quizStates.currentQuestion + 1} de {quizStates.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option option={option} key={option} />
        ))}
      </div>
      <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )

}

export default Question
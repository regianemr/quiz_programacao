import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () => {
  const [quizStates, dispatch] = useContext(QuizContext)
  const currentQuestion = quizStates.questions[quizStates.currentQuestion]


  return (
    <div id="question">
      <p>Pergunta {quizStates.currentQuestion + 1} de {quizStates.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  )

}

export default Question
//react, componentes, estaticos
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type: "REORDER_QUESTIONS"})
  
  }, [])

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "start" && <Welcome/>}
      {quizState.gameStage === "playing" && <Question/>}
    </div>
  )
}

export default App

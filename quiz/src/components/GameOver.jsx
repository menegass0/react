import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Fim de Jogo</h2>
        <p>Pontuação</p>
        <p>Voce acertou y de z perguntas</p>
        <img src={WellDone} alt="" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver
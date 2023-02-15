import Quiz from '../img/quiz.svg';

import "./Welcome.css";

const welcome = () => {
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>clique no botão para começar</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default welcome
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Weldone from "../img/welldone.svg";
import imgFim from "../img/agrinho3.webp";

import './GameOver.css';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de Jogo</h2>
            <p>Pontuaçao: {quizState.score}</p>
            <p>
                Você acertou {quizState.score} de {quizState.questions.length} perguntas.
            </p>
            <img src={imgFim} alt="Fim do Quiz" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    );
};

export default GameOver;
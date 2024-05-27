import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id='welcome'>
            <h2>Seja Bem-vindo</h2>
            <br /><br /><br />
            <p>Clique no botão abaixo para começar:</p>
            <br /><br />
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
                Iniciar o Quiz
            </button>
            {/* <img src={Quiz} alt="Início do Quiz" /> */}
        </div>
    );
};

export default Welcome;
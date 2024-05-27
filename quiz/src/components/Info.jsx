import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import React from 'react';

import "./Info.css";

const Info = ({ isCorrect}) => {

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    console.log(currentQuestion);

    return (
        <div className={`info  
                ${quizState.answerSelected && !isCorrect ? 'wrong' : ""}
            `}
        >
            <h2>Voce sabia:</h2>
            <p>{currentQuestion.info}</p>
            <button onClick={() => dispatch({type: "CHANGE_QUESTION", payload: {showInfo: true }})}>Fechar</button>
        </div>
    );
};

export default Info;
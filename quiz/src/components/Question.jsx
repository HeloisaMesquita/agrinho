// react, componentes, estaticos
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Option from './Option';
import Info from './Info';

import "./Question.css";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option},
        });
        dispatch({ type: "SHOW_INFO", payload: {showInfo: true }});
    };

    return (
        <div>
            {quizState.answerSelected && quizState.showInfo ?
            <div>
                <Info isCorrect = {quizState.correctAnswer} />
            </div>
            :
            <div id="question">
                <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
                <h2>{currentQuestion.question}</h2>
                <div id="options-container">
                    {currentQuestion.options.map((option) => (
                        <Option 
                            key = {option}
                            option = {option} 
                            answer = {currentQuestion.answer}
                            selectOption = {() => onSelectOption(option)}
                        />
                    ))}
                </div>
                {quizState.answerSelected && (
                    <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
                )}
            </div>
            }
        </div>
    );
};

export default Question;
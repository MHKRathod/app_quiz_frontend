import { useQuiz } from "../../context";
import { Navbar } from "../../component";
import { Fragment } from "react";
import "./Result.css";

export const Result = () => {
    const { state } = useQuiz();
    const { quiz, selectedOptions, correctOptions, score } = state;

    return (
        <Fragment>
            <Navbar route="result" />
            <main className="results d-flex direction-column align-center justify-center">
                <h2>Result</h2>
                <div>
                    <span>Your score is {score}</span>
                </div>
                <div className="result-details">
                    <h3>Questions and Answers</h3>
                    {quiz.map((question, index) => (
                        <div key={index} className="question-result">
                            <p>{question.question}</p>
                            <p>Selected Answer: {selectedOptions[index]}</p>
                            <p>Correct Answer: {correctOptions[index]}</p>
                        </div>
                    ))}
                </div>
            </main>
        </Fragment>
    );
};

import { createContext, useContext, useEffect, useReducer } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const initialState = {
    index: 0,
    score: 0,
    quizCategory: "",
    selectedOptions: [], // Array to store selected options for each question
    correctOptions: [], // Array to store correct options for each question
    quiz: []
};

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [state, quizDispatch] = useReducer(quizReducer, initialState); // Changed 'dispatch' to 'quizDispatch'

    useEffect(() => {
        // Load quiz data from local storage
        const currentIndex = Number(localStorage.getItem("index")) || 0;
        const currentScore = Number(localStorage.getItem("score")) || 0;
        const currentCategory = localStorage.getItem("category") || "";
        const currentQuiz = JSON.parse(localStorage.getItem("quiz")) || [];
        const selectedOptions = JSON.parse(localStorage.getItem("selectedOptions")) || Array(currentQuiz.length).fill(null);
        const correctOptions = currentQuiz.map(question => question.correctOption);
        
        quizDispatch({ // Changed 'dispatch' to 'quizDispatch'
            type: "INITIAL_STATE",
            payload: { currentIndex, currentScore, currentCategory, currentQuiz, selectedOptions, correctOptions }
        });
    }, []);

    return (
        <QuizContext.Provider value={{ state, quizDispatch }}> {/* Changed 'dispatch' to 'quizDispatch' */}
            {children}
        </QuizContext.Provider>
    );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider, QuizContext };

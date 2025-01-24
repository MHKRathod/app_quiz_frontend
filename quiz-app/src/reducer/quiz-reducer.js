export const quizReducer = (state, { type, payload }) => {
    switch (type) {
        case "INITIAL_STATE":
            return {
                ...state,
                index: payload.currentIndex,
                score: payload.currentScore,
                quizCategory: payload.currentCategory,
                quiz: payload.currentQuiz,
                selectedOptions: payload.selectedOptions,
                correctOptions: payload.correctOptions
            };
        case "CATEGORY":
            return {
                ...state,
                quizCategory: payload
            };
        case "NEXT_QUESTION":
            return {
                ...state,
                index: state.index + 1
            };
        case "SET_SELECTED_OPTION":
            const updatedSelectedOptions = [...state.selectedOptions];
            updatedSelectedOptions[state.index] = payload.optionId;
            return {
                ...state,
                selectedOptions: updatedSelectedOptions
            };
        case "QUIT":
            return {
                ...state,
                index: 0,
                score: 0
            };
        case "SUBMIT":
            return state;
        default:
            return state;
    }
};

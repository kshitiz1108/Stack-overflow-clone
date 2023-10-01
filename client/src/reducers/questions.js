const questionsReducer  = (state = {data: null} , action) => {
    switch (action.type) {
        case "POST-QUESTION":
            return {...state }
        case "POST-ANSWER":
            return {...state }
        case "FETCH-QUESTIONS" :
        return { ...state , data: action.payload}
    
        default:
            return state
    }
}

export default questionsReducer
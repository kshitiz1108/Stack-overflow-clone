import * as api from "../api/index";

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllquestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllquestions = () => async (dispatch) => {
    try {
        const {data} = await api.getQuestions();
        dispatch({ type: "FETCH-QUESTIONS", payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const postAnswer = (answerdata) => async (dispatch) => {
     try {
        const {id, noOfAnswers, answerBody, userAnswered, userId} = answerdata
        const {data} = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered,userId)
        dispatch({type: "POST-ANSWER" , payload: data} )
        dispatch(fetchAllquestions())
     } catch (error) {
        console.log(error)
     }
}

export const deletequestion = (id , navigate) => async(dispatch) => {
    try {
        const {data} = api.deletequestion(id)
        dispatch(fetchAllquestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
} 

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
      await api.deleteAnswer(id, answerId, noOfAnswers);
      dispatch(fetchAllquestions());
    } catch (error) {
      console.log(error);
    }
  };
  

  export const voteQuestion = (id, value , userId) => async (dispatch) => {
    try {
      await api.voteQuestion(id, value , userId);
      dispatch(fetchAllquestions());
    } catch (error) {
      console.log(error);
    }
  };
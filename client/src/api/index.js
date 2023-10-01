import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'})
// const apiUrl = 'http://localhost:5000/api/chat'; // Assuming the backend is running on the same domain
API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${
JSON.parse(localStorage.getItem("Profile")).token
      }`;
    }
    return req;
  });


export const logIn = (authData) => API.post('/user/login' , authData)
export const signUp = (authData) => API.post('/user/signup' , authData)

export const postQuestion = (questionData) => API.post("/questions/Ask", questionData)
export const getQuestions = () => API.get("/questions/get")

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered,userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId });
export const deletequestion = (id) => API.delete(`/questions/delete/${id}`)

export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value , userId });

export const getAllUsers = () => API.get("/user/getAllUsers");

export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);

export const sendOtp = (phone) => API.post('/api/sendOtp', { phone });
export const verifyOtp = ({verificationId,otp}) => API.post('/api/verifyOtp', { verificationId, otp});

// actions/subscriptionActions.js
export const subscribeToPlan = (plan) => API.post('/api/subscribe' , { plan })

export const getSubscriptionDetails = () => API.get('/api/subscription')






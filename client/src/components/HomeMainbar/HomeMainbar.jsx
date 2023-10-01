import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './Questionslist'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {
    const location  = useLocation()
    const User = useSelector((state) => state.currentUserReducer);
   const navigate = useNavigate();
    const questions = useSelector(state => state.questionsReducer)
    console.log({questions})

//     var questions = [{
//         id:1,
//         votes:3,
//         noofAnswers:2,
//         Title:"What is a function",
//         Body:"It meant to be ",
//         Tags:["java","node js","react js","mongo db"],
//         userPosted: "Kshitiz",
//         askedon: "july 3"
//     },
//     {
//         id:2,
//         votes:3,
//         noofAnswers:2,
//         Title:"What is a function",
//         Body:"It meant to be ",
//         Tags:["java","node js","react js","mongo db"],
//         userPosted: "Kshitiz",
//         askedon: "july 3"
//     },
//     {
//         id:3,
//         votes:3,
//         noofAnswers:2,
//         Title:"What is a function",
//         Body:"It meant to be ",
//         Tags:["java","node js","react js","mongo db"],
//         userPosted: "Kshitiz",
//         askedon: "july 3"
//     },
// ]
const checkAuth = () => {
    if(User === null){
        alert("Please login or signup first to ask question")
        navigate('/Auth')
    }
    else{
        navigate('/AskQuestion')
    }
}
const checkforbot = () => {
    if(User === null){
        alert("Please login or signup first to ask a question from bot")
        navigate('/Auth')
    }
    else{
        navigate('/otpauth')
    }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <div className='buttons'>
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        <button onClick={checkforbot} className='ask-btn'>Ask from Bot</button>
        </div>
        </div>
        <div>
            {
                questions.data === null ? <h1>Loading....</h1> :
                <>
                    <p>{questions.data.length} questions</p>
                    <QuestionList questions={questions.data}/>
                </>
            }
        
      </div>
    </div>
  )
}

export default HomeMainbar
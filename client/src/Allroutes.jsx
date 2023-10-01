import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'

import ChatBot from './Pages/ChatBot/ChatBot'
// import OtpAuthentication from './components/OtpAuthentication/OtpAuthentication'

import OtpAuthentication from './components/otpAuthentication/othAuthentication'
import Subscription from './components/Subscription/Subscription'
// import otpAuthentication from './Pages/OtpAuthentication/otpAuthentication'


const Allroutes = () => {
  return (
    <>
    <Routes>
       <Route exact path='/' element = {<Home/>}/> 
       <Route path='/Auth' element={<Auth/>}/>
       <Route path = '/Questions' element={<Questions/>}/> 
       <Route path='/AskQuestion' element={<AskQuestion/>} />
       <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion  />
        }
      />
      <Route
        path="/Tags"
        element={<Tags />}
      />
      <Route
        path="/Users"
        element={<Users />}
      />
       <Route
        path="/Users/:id"
        element={
          <UserProfile  />
        }
      />
       <Route
        path="/askChatBot"
        element={
          <ChatBot/>
        }
      />
      <Route
        path='/otpauth'
        element={
          <OtpAuthentication/>
        }
      />
      <Route
        path = '/subscription'
        element={
          <Subscription/>
        }

      />
    </Routes>
    </>
  )
}

export default Allroutes
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllquestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
   dispatch(fetchAllquestions())
   dispatch(fetchAllUsers())
  },[dispatch])


  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Allroutes/>
      </Router>
    </div>
  );
}

export default App;

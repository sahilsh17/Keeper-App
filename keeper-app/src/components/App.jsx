import react, { useState } from 'react';
import Notes from './Notes';
import Login from './login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useToken from '../hooks/useToken'
import Sidebar from './Sidebar';


export default function App() {
  const {token,setToken} = useToken();
  

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
    
    <Router>
    <Sidebar />
    </Router>
    <Notes />
    </div>
  )

}
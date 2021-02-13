import react, { useState } from 'react';
import Notes from './Notes';
import Login from './login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}
export default function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
   <Notes />
  </div>
  )

}
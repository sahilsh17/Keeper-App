import react, { useState } from 'react';
import Notes from './Notes';
import Login from './login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
   <Notes />
  </div>
  )

}
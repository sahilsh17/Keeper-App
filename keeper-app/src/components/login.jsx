import React,{useState} from 'react';
import './login.css';
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(credentials) {
  axios.post('https://localhost:8000/login',credentials)
  .then(res => {
    console.log(res);
  })
}
export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function handleSubmit(e){
    console.log("sahil sharma");
    e.preventDefault();
    const token = await loginUser({ 
      username: username,
      password: password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" onChange = {e => setUsername(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange = {e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit" onSubmit ={handleSubmit}>Submit</button>
      </div>
    </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
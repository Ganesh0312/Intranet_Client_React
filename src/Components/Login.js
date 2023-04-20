import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from "react-router-dom";

  import Home from './Employee_Panel/Pages/Home/Home';

function EmployeeLoginForm() {
  const [id, setId]= useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = {
      email: email,
      password: password,
    };

    axios.post('https://localhost:7274/api/Employee/login', employee)
      .then(response => {
        setMessage(response.data.message);
        setEmail('');
        setPassword('');  
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>Employee Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default EmployeeLoginForm;

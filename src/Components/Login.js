import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {Link, useHistory} from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import Home from './Employee_Panel/Pages/Home/Home';

function EmployeeLoginForm() {
  const [id, setId]= useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
    //const history = useHistory();

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
        navigate.push("/Employee_Panel/Pages/Home/Home");
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="wrapper">
    <div className="container main">
        <div className="row">
            <div className="col-md-6 side-image">
               
                
                <div className="text">
                   
                </div>
            </div>
            <div className="col-md-6 right">
                 <div className="input-box">
                    <header>Login Page</header>
                    <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="email" className="input"  value={email} onChange={(event) => setEmail(event.target.value)} />
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field">
                        
                        <input type="password"className="input" value={password} onChange={(event) => setPassword(event.target.value)} />
                        <label for="password">Password</label>
                    </div>
                    <div class="input-field">
                        <input type="submit" className="submit" value="Login"/>
                        
                    </div>
                    <div className="signin">
                        <span> <Link to="/ForgotPass" style={{ color: "#8c7569" }}> 
                    Forgot Password
                  </Link></span>
                    </div>
                    </form>
                 </div>
                    <p style={{color:"white"}}>{message}</p>
            </div>
        </div>
    </div>
</div>
  );
}

export default EmployeeLoginForm;
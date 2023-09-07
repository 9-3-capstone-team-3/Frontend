// Signin.js
import axios from 'axios';
import { useState } from 'react';
import './Signin.css';
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/users/login`, {
        email: email,
        password: password
      });

      console.log(response.data);
    } catch (error) {
      console.error('Failed to login:', error.response ? error.response.data : error.message);
    }
    
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Log In Or Create an Account</h1>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Sign In</button>
        <Link className="create-account-link" to="/signup"> Create An Account</Link>
      </form>
    </div>
  );
};

export default SignInPage;

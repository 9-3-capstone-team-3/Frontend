// Signin.js
import { useState } from 'react';
import axios from 'axios';
import './Signin.css';
import { Link, useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
  
      if (response.data) {
        const userId = response.data.user_id; // Assuming the key is named "user_id"
        navigate(`/dashboard/${userId}`);
      } else {
        console.error('Failed to login: Authentication failed.');
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data ? error.response.data.error : error.message;
      console.error('Failed to login:', errorMessage);
    }

  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>CodeFusion Login</h2>
        <label>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="button" type="submit">Log In</button>
        <h5><span>Don't have an Account?</span></h5>
        <Link className="create-account-link" to="/signup">Create Account</Link>
      </form>
    </div>
  );
};

export default SignInPage;

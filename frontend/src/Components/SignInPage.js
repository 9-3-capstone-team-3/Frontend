// Signin.js
import { useState } from 'react';
import axios from 'axios';
// import './Signin.css';
import { Link, useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL ;

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
          <div className="mt-3">
            <span>Don't have an Account?</span>
            <Link to="/signup" className="ml-2">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

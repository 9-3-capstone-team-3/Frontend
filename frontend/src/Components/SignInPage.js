// Signin.js
import { useState } from 'react';
import './Signin.css';
import { Link } from "react-router-dom";

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
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data)
      } else {
        console.error('Failed to login')
      }
    } catch (error) {
      console.error('There was an error:', error);
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
        <Link className="create-account-link" to="/"> Create An Account</Link>
      </form>
    </div>
  );
};

export default SignInPage;

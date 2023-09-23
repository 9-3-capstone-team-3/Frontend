import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignUpPage.css';
import closeEye from "../Assests/closeEye.png";
import openEye from "../Assests/openEye.png";

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [level_number, setLevelNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
};
const passwordInputType = isPasswordVisible ? 'text' : 'password';
const passwordToggleImage = isPasswordVisible ? {closeEye} : {openEye};

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstnameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleLevelIdChange = (event) => {
    setLevelNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const userData = {
      username,
      email,
      firstname,
      lastname,
      password,
      level_number,
    };

    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      console.log("Sending request to:", `${apiUrl}/users`);
      const data = await response.json();
      console.log("Data:", data);
      console.log("Received response:", response);


      if (response.ok) {
        alert('Sign up successful! Redirecting to sign in.'); // Alerting the user
        navigate("/signin"); // Redirecting to the sign-in page on successful registration
      } else {
        setErrorMessage("Failed to sign up. Please try again."); // Show error to user
        console.log(errorMessage); 
      }
    } catch (error) {
        setErrorMessage("Failed to sign up. Please try again."); // Show error to user
        console.error("There was an error", error);
    }
  };

  return (
    <div className="signup-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign up Here</h2>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        
        <label>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={handleFirstnameChange}
            required
          />
        </label>
        
        <label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={handleLastnameChange}
            required
          />
        </label>
        
        <label className="password-wrapper">
          <input
            type={passwordInputType}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <img 
            src={passwordToggleImage}
            alt="Toggle Password Visibility"
            onClick={handleTogglePasswordVisibility}
            className="toggle-password-visibility"
          />
        </label>
        
        <label className="password-wrapper">
          <input
            type={passwordInputType}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <img 
            src={passwordToggleImage}
            alt="Toggle Password Visibility"
            onClick={handleTogglePasswordVisibility}
            className="toggle-password-visibility"
          />
        </label>
        
        <label>
          <input
            type="number"
            placeholder="Level Number"
            value={level_number}
            onChange={handleLevelIdChange}
          />
        </label>
        <button className="button" type="submit">Sign Up</button>
        <Link className="login-account-link" to="/signin">
          Already have an account? Log in
        </Link>
      </form>
      <button onClick={handleSubmit}>Test Signup</button>
    </div>
  );
}

export default SignUpPage;

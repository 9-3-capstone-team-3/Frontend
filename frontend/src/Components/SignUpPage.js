import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [showPassword, setShowPassword] = useState(false); // State variable for showing/hiding password
  const navigate = useNavigate();

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle the state
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
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center" style={{ marginTop: "50px" }}>
              Sign up Here
            </h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstname}
                onChange={handleFirstnameChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastname}
                onChange={handleLastnameChange}
                required
              />
            </div>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Level Number"
                value={level_number}
                onChange={handleLevelIdChange}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
              <Link className="d-block mt-3" style={{ marginBottom: "50px" }} to="/signin">
                Already have an account? Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

import { useState } from "react";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL ||'http:/localhost:3003';

function SignUpPage (){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content_Type': 'application/json'
                },
                body: JSON.stringify(username, email, firstname, lastname, password)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                const errorData = await response.json();
                console.error('failed to sign up:', errorData)
            }
        } catch (error) {
            console.error('there was an error', error);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign up Here</h1>
                <label>
                    Username: 
                    <input 
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                    />
                </label>
                <label>
                    Email:
                    <input 
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </label>
                <label>
                    First Name:
                    <input
                    type="text"
                    value={firstname}
                    onChange={handleFirstnameChange}
                    required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                    type="text"
                    value={lastname}
                    onChange={handleLastnameChange}
                    required
                    />
                </label>
                <label>
                    Password: 
                    <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </label>
                <button type="submit">Sign Up</button>
                <Link className="login-account-link" to="/signin">Already have an account? Log in</Link>
            </form>
        </div>
    );
};

export default SignUpPage;
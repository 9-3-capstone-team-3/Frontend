import "./OpeningPage.css"
import logo3 from '../Assests/Logo3.png';
import { Link} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../providers/userProvider.js";
import {
  signInWithGoogle
} from "../services/Firebase.js";
import axios from "axios";

function OpeningPage() {
  const apiUrl = process.env.REACT_APP_API_URL  
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const buildUserObject = (userData) => {
  const displayName = userData.displayName;
  const [firstName, lastName] = displayName.split(" ");

  const userObject = {
    username: displayName,
    email: userData.email,
    firstname: firstName,
    lastname: lastName,
    auth_id: userData.uid
  }

  return userObject
}

const checkUserEmail = async (userData) => {

  try {
    const response = await fetch(`${apiUrl}/users/email/${userData.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {
      // Data successfully sent to the backend
      console.log('Get Request Succesful');
      const responseData = await response.json(); // Parse the response as JSON
      const user_id = responseData.user_id;
      const timestamp = new Date().toISOString(); // Get the current timestamp as a string

      try {
        // Send the timestamp to your backend
        const response = await axios.post(
          `${apiUrl}/users/${user_id}/last_login`,
          {
            timestamp: timestamp,
          }
        );
  
        if (response.status === 200) {
          console.log("Timestamp updated successfully:", response.data);
        } else {
          console.error("Failed to update last login.");
        }
      } catch (err) {
        console.error("Error:", err);
      }
  
     
      
      navigate(`/dashboard/${user_id}`);
    } else {
      // Handle the error case here
      console.error('Failed to fetch data');
      postUserDataToBackend(userData);
    }
  } catch (error) {
    // Handle any network or other errors here
    console.error('Error checking user email:', error);
  }
}

const postUserDataToBackend = async (userData) => {
    
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (response.ok) {
        const responseData = await response.json(); // Parse the response as JSON
        const user_id = responseData.user_id;
        // Data successfully sent to the backend
        console.log('User data sent to backend successfully');
        navigate(`/dashboard/${user_id}`);
      } else {
        // Handle the error case here
        console.error('Failed to send user data to backend');
      }
    } catch (error) {
      // Handle any network or other errors here
      console.error('Error sending user data to backend:', error);
    }
  };

  useEffect(() => {
    if (user) {
      const userOBJ = buildUserObject(user)
      checkUserEmail(userOBJ); 
    }
  }, [user]);


    return (
  <div class="landing-page">
  <header>
    <div class="container">
      <img src={logo3} alt="logo3" className="logo-image"></img>
      <a href="/" class="logo">CodeFusion</a>
      <ul class="links">
        <a href="/"><li>Home</li></a>
        <Link to="/aboutus"><li>About Us</li></Link>
        <a href="https://www.youtube.com/channel/UCX-6L6UBdZTJ2CeQVSL3uKw"><li>Youtube</li></a>
        <button className="google-button" onClick={signInWithGoogle}><li>Sign In</li></button>
      </ul>
    </div>
  </header>
  <div class="content">
    <div class="container">
      <div class="info">
        <h2 className="htwo-font">Fun. Easy. Collaboration</h2>
        <p>Learn to collaborate with ease.<br></br>
           Watch Git tutorials and answer questions.<br/> Practice contributing to open source projects through fun easy simulations.<br/>Just sign up!</p>
           <button onClick={signInWithGoogle} className="button">Sign Up</button>
      </div>
      <div class="image">
        <img src="https://i.postimg.cc/4dn7GjXC/handshack-removebg-preview.png" alt=""/>
      </div>
    </div>
  </div>
</div>
    );
}
  
export default OpeningPage;
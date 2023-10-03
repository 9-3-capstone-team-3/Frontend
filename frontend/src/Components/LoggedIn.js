import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/userProvider.js";
import { useNavigate} from "react-router-dom";
import { logOut } from "../services/Firebase.js";


export const LoggedInPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [auth_id, setAuth_id] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL
    
  const imgStyle = {
      width:'30vh',
      height:'30vh'
  }

  const navigate = useNavigate();
  const user = useContext(UserContext);

  const postData = async (event) => {
    event.preventDefault();
   
      const displayName = user.displayName;
      const [firstName, lastName] = displayName.split(" ");
      setEmail(user.email);
      setFirstName(firstName);
      setLastName(lastName);
      setAuth_id(user.uid);
      setUsername(displayName)

      // Send user data to your backend
      postUserDataToBackend({
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        auth_id: auth_id
      });
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
console.log(response)
      if (response.ok) {
        // Data successfully sent to the backend
        console.log('User data sent to backend successfully');
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
    if(!user) {
        alert("not logged in - redirecting")
        navigate(`/login`);
      }
    }, [user, navigate]);

  
  const handleLogout = async () => {
    logOut()
    alert("you've been logged out")
  };
  if ( user ){
    return (
      <div>
        <h1> YOU ARE NOW LOGGED IN : </h1>
        <h1>Welcome {user.displayName} !</h1>
        <div>
          <img src = {user.photoURL}
          style={imgStyle}
            className="user-image"
            alt="its the users head"
            ></img>
        </div>
        email: {user.email}
        <button onClick={handleLogout}> LOG OUT</button>
        <button onClick={postData}> POST</button>
      </div>
    );
  } else 
  return (
    <div> NOT LOGGED IN </div>
  )
}
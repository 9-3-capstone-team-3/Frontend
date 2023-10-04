import React, { useContext, useEffect } from "react";
import { UserContext } from "../providers/userProvider.js";
import { useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  logOut
} from "../services/Firebase.js";


export const Login = () => {
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
    <div>
      <section>
        <div>
          <div> login works</div>
          <button onClick={signInWithGoogle}>Sign in With google</button>
          <button onClick={logOut}> sign out</button>
        </div>
      </section>
    </div>
  );
};

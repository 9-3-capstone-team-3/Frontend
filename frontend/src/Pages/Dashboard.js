import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import userIcon from "../Assests/userIcon.png";
import NavBar from "../Components/NavBar";
import "../Pages/Dashboard.css";
import LoginTracker from "../Components/checkInLog/LogInTracker";


const apiUrl = process.env.REACT_APP_API_URL;

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]); // Add this line

  const { user_id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = (quiz) => {
    setQuiz(quiz);
    console.log(quiz);
    // console.log(quiz.quiz_id)
    navigate(`/quizdash/${quiz.quiz_id}/${user_id}`);
  };
  const handleImageClick = () => {
    // setShowProfile((prevState) => !prevState);
    navigate(`/users/profile/${user.user_id}`)
  };

  const handleClick = () => {
    // setShowProfile((prevState) => !prevState);
    navigate(`/simulation/${user.user_id}`)
  };

  const handleClick3 = () => {
    navigate(`/simvidone`)
  };

  const handleClick4 = () => {
    navigate(`/simvidtwo`)
  };


  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(`${apiUrl}/quiz`);
        const data = await response.json();

        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataResponse = await fetch(`${apiUrl}/users/${user_id}`);
        const userData = await userDataResponse.json();
        // console.log("User Data:", userData); // Log user data

        setUser(userData);
      
        // Fetch completed quizzes here and set them as an array
        const completedQuizzesResponse = await fetch(
          `${apiUrl}/users/completed-quizzes/${user_id}`
        );
        const completedQuizzesData = await completedQuizzesResponse.json();
        setCompletedQuizzes(completedQuizzesData); // Ensure this is an array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user_id]);
  


  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="left-sidebar">{<NavBar />}</div>

      {/* Main Body */}
      <div className="body-section">
        {/* ...contents of main body... */}
        <div>
          <h1>Learn the basics of Git!</h1>
        </div>
        <div>
          {quizzes &&
            quizzes.length > 0 &&
            quizzes
              .filter((quiz) => quiz.status_name === "Beginner")
              .map((quiz, index) => (
                <button
                  className="dash-buttons"
                  key={quiz.quiz_id}
                  onClick={() => handleButtonClick(quiz)}>{quiz.name}
                </button>
              ))}
        </div>

        <div>
          <h1>Practice the Git process</h1>
          <button onClick={() => handleClick()} >Simulate the git process</button>
        </div>
        <div>
          <h1>
            Collab on GitHub
          </h1>
          <button>Try it out on GitHub</button>
          <button onClick={()=> handleClick3()}>simulationVidOne</button>
          <button onClick={()=> handleClick4()}>simulationVidTwo</button>
        </div>

       {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Header */}
        <div className="header">
          <div className="icon-container">
            <img
              src={userIcon}
              alt="User Icon"
              className="user-icon"
              onClick={handleImageClick}
            />
            {/* {showProfile && <UserProfile />} */}
            <h4>{user && user.username}</h4>
          </div>  
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import userIcon from "../Assests/userIcon.png";
import UserProfile from "./userProfile/UserProfile";
import Leaderboard from "../Components/Leaderboard";
import NavBar from "../Components/NavBar";
import "../Pages/Dashboard.css";
import pointsIcon from "../Assests/pointsIcon.png";
import lock from "../Assests/lock.png";
import star from "../Assests/star.png";
import DashboardFooter from "../Components/DashboardFooter";



const apiUrl = process.env.REACT_APP_API_URL_LOCAL || process.env.REACT_APP_API_URL;




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
    navigate(`/quiz/${quiz.quiz_id}/${user_id}`);
  };
  const handleImageClick = () => {
    // setShowProfile((prevState) => !prevState);
    navigate(`/users/profile/${user.user_id}`)
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
        <div className="banner">
          <h1>Beginner</h1>
          <p>Learn the basics of Git!</p>
        </div>
        <div className="circle-buttons">
          {quizzes &&
            quizzes.length > 0 &&
            quizzes
              .filter((quiz) => quiz.status_name === "Beginner")
              .map((quiz, index) => (
                <button
                  key={quiz.quiz_id}
                  onClick={() => handleButtonClick(quiz)}
                  style={{
                    marginLeft:
                      index === 0
                        ? "-300px"
                        : index === 1
                          ? "-450px"
                          : "-475px",
                  }}
                >
                  <img
                    src={user && user.total_points > 25 ? star : lock}
                    alt={`Quiz ${quiz.quiz_id}`}
                  />
                </button>
              ))}
        </div>

        <div className="banner2">
          <h1>Intermediate</h1>
          <p>Practice the Git process</p>
        </div>
        <div className="circle-buttons">
          {quizzes &&
            quizzes.length > 0 &&
            quizzes
              .filter((quiz) => quiz.status_name === "Intermediate")
              .map((quiz, index) => (
                <button
                  key={quiz.quiz_id}
                  onClick={() => handleButtonClick(quiz)}
                  style={{
                    marginLeft:
                      index === 0
                        ? "-300px"
                        : index === 1
                          ? "-450px"
                          : "-475px",
                  }}
                >
                  <img
                    src={user && user.total_points > 70 ? star : lock}
                    alt={`Quiz ${quiz.quiz_id}`}
                  />
                </button>
              ))}
        </div>
        <div className="banner3">
          <h1>Advance</h1>
          <p>
            Collab on GitHub <br />
            and gain points
          </p>
        </div>
        <div className="circle-buttons">
          <button style={{ marginLeft: "-300px" }}>
            <img src={lock} alt="lock icon" />
          </button>{" "}
          {/* Move a bit to the right */}
          <button style={{ marginLeft: "-450px" }}>
            <img src={lock} alt="lock icon" />
          </button>{" "}
          {/* Move further to the right */}
          <button
            style={{ marginLeft: "-475px" } /* Default position (start) */}
          >
            <img src={lock} alt="lock icon" />
          </button>
          <button style={{ marginLeft: "-300px" }}>
            <img src={lock} alt="lock icon" />
          </button>{" "}
          {/* Move some amount to the right */}
        </div>
        <div className="circle-buttons">
          {/* {quizzes &&
            quizzes.length > 0 &&
            quizzes
              .filter((quiz) => quiz.status === "Expert")
              .map((quiz, index) => (
                <button
                  key={quiz.id}
                  onClick={() => handleButtonClick(quiz.quiz_id)}
                  style={{
                    marginLeft:
                      index === 0
                        ? "-300px"
                        : index === 1
                          ? "-450px"
                          : "-475px",
                  }}
                >
                  <img
                    src={user && user.total_points > 5 ? star : lock}
                    alt={`Quiz ${quiz.quiz_id}`}
                  />
                </button>
              ))} */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Header */}
        <div className="header">
          <div className="icon-container">
            {/* Points */}

            <img src={pointsIcon} alt="points icon" className="points-icon" />

            <span className="icon-text">{user && user.total_points} pts</span>


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
        {/* Leaderboard */}
        <div className="leaderboard">{<Leaderboard />}</div>

        {/* Footer */}

        <div className="footer"> {<DashboardFooter/>}</div>
      </div>
    </div>
  );
}

export default Dashboard;

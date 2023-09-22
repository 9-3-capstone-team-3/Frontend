import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userIcon from "../Assests/userIcon.png";
import UserProfile from "../Components/UserProfile";
import Leaderboard from "../Components/Leaderboard"; // Import the Leaderboard component
import NavBar from "../Components/NavBar";
import "../Pages/Dashboard.css";
import pointsIcon from "../Assests/pointsIcon.png";
import lock from "../Assests/lock.png";
import star from "../Assests/star.png";

const apiUrl = process.env.REACT_APP_API_URL;

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = (quiz) => {
    setQuiz(quiz);
    navigate(`/quiz/${quiz.quiz_id}/${user_id}`);
  };

  const handleImageClick = () => {
    setShowProfile((prevState) => !prevState);
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
        setUser(userData);

        const completedQuizzesResponse = await fetch(
          `${apiUrl}/users/completed-quizzes/${user_id}`
        );
        const completedQuizzesData = await completedQuizzesResponse.json();
        setCompletedQuizzes(completedQuizzesData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user_id]);

  const cardGradientStyle = {
    background: "linear-gradient(to right, #007bff, #0056b3)", // Adjust the colors as needed
  };

  const cardMarginTop = {
    marginTop: "80px", // You can adjust the margin as needed
  };


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-lg-2 p-0">
          <NavBar />
        </div>
  
        {/* Main Content */}
        <div className="col-lg-8" >
          {/* Header */}
          <div className="card" style={{ ...cardGradientStyle, ...cardMarginTop }}>
            <div className="card-body text-white text-center">
              <h1 className="font-weight-bold">Level 1</h1>
              <p>Learn the basics of Git!</p>
            </div>
          </div>
  
          {/* Quizzes */}
          <div className="circle-buttons" style={{marginTop: "40px"}}>
            {quizzes &&
              quizzes.length > 0 &&
              quizzes
                .filter((quiz) => quiz.status_name === "Beginner")
                .map((quiz, index) => (
                  <div key={quiz.quiz_id} className="col-md-4 mb-3" style={{marginTop: "30px"}}>
                    <button
                      onClick={() => handleButtonClick(quiz)}
                      className="btn btn-outline-primary btn-circle custom-circle-button"
                      style={{
                        marginLeft:
                          index === 0
                            ? "300px"
                            : index === 1
                            ? "450px"
                            : "475px",
                      }}
                    >
                      <img
                        src={
                          Array.isArray(completedQuizzes) &&
                          completedQuizzes.includes(quiz.quiz_id)
                            ? star
                            : lock
                        }
                        alt={`Quiz ${quiz.quiz_id}`}
                        height={50}
                        width={50}
                      />
                    </button>
                  </div>
                ))}
          </div>
  
          {/* Intermediate */}
          <div className="card mt-5" style={cardGradientStyle}>
            <div className="card-body text-white text-center">
              <h1 className="font-weight-bold">Level 2</h1>
              <p>Practice the Git process</p>
            </div>
          </div>

          <div className="circle-buttons" style={{marginTop: "40px"}}>
            {quizzes &&
              quizzes.length > 0 &&
              quizzes
                .filter((quiz) => quiz.status_name === "Intermediate")
                .map((quiz, index) => (
                  <div key={quiz.quiz_id} className="col-md-4 mb-3" style={{marginTop: "30px"}}>
                    <button
                      onClick={() => handleButtonClick(quiz)}
                      className="btn btn-outline-primary btn-circle custom-circle-button"
                      style={{
                        marginLeft:
                          index === 0
                            ? "300px"
                            : index === 1
                            ? "450px"
                            : "475px",
                      }}
                    >
                      <img
                        src={
                          Array.isArray(completedQuizzes) &&
                          completedQuizzes.includes(quiz.quiz_id)
                            ? star
                            : lock
                        }
                        alt={`Quiz ${quiz.quiz_id}`}
                        height={50}
                        width={50}
                      />
                    </button>
                  </div>
                ))}
          </div>
  
          {/* Advance */}
          <div className="card mt-5" style={cardGradientStyle}>
            <div className="card-body text-white text-center">
              <h1 className="font-weight-bold">Level 3</h1>
              <p>Collab on GitHub and gain points</p>
            </div>
          </div>
        
          <div className="circle-buttons" style={{marginTop: "40px"}}>
            {quizzes &&
              quizzes.length > 0 &&
              quizzes
                .filter((quiz) => quiz.status_name === "Advance")
                .map((quiz, index) => (
                  <div key={quiz.quiz_id} className="col-md-4 mb-3" style={{marginTop: "30px"}}>
                    <button
                      onClick={() => handleButtonClick(quiz)}
                      className="btn btn-outline-primary btn-circle custom-circle-button"
                      style={{
                        marginLeft:
                          index === 0
                            ? "300px"
                            : index === 1
                            ? "450px"
                            : "475px",
                      }}
                    >
                      <img
                        src={
                          Array.isArray(completedQuizzes) &&
                          completedQuizzes.includes(quiz.quiz_id)
                            ? star
                            : lock
                        }
                        alt={`Quiz ${quiz.quiz_id}`}
                        height={50}
                        width={50}
                      />
                    </button>
                  </div>
                ))}
          </div>
  
          {/* Expert */}
          <div className="card mt-5" style={cardGradientStyle}>
            <div className="card-body text-white text-center">
              <h1 className="font-weight-bold">Level 4</h1>
              <p>Master the advanced concepts</p>
            </div>
          </div>
          
          <div className="circle-buttons">
            {quizzes &&
              quizzes.length > 0 &&
              quizzes
                .filter((quiz) => quiz.status_name === "Expert")
                .map((quiz, index) => (
                  <div key={quiz.quiz_id} className="col-md-4 mb-3">
                    <button
                      onClick={() => handleButtonClick(quiz)}
                      className="btn btn-outline-primary btn-circle custom-circle-button"
                      style={{
                        marginLeft:
                          index === 0
                            ? "300px"
                            : index === 1
                            ? "450px"
                            : "475px",
                      }}
                    >
                      <img
                        src={
                          Array.isArray(completedQuizzes) &&
                          completedQuizzes.includes(quiz.quiz_id)
                            ? star
                            : lock
                        }
                        alt={`Quiz ${quiz.quiz_id}`}
                        height={50}
                        width={50}
                      />
                    </button>
                  </div>
                ))}
          </div>
        </div>
  
        {/* Right Sidebar */}
        <div className="col-lg-2">
          <div className="header">
            <div className="icon-container">
              {/* Points */}
              <img
                src={pointsIcon}
                alt="points icon"
                className="points-icon"
                height={50}
                width={50}
              />
              <span className="icon-text">
                {user && user.total_points} pts
              </span>
  
              {/* User Icon */}
              <img
                src={userIcon}
                alt="User Icon"
                className="user-icon"
                onClick={handleImageClick}
                height={50}
                width={50}
              />
              {showProfile && <UserProfile />}
            </div>
          </div>
  
          {/* Leaderboard */}
          <div className="leaderboard">
            {/* Pass users data to Leaderboard component */}
            <Leaderboard users={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

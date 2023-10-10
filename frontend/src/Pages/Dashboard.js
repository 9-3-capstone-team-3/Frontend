import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../providers/userProvider.js";
import userIcon from "../Assests/userIcon.png";
import NavBar from "../Components/NavBar";
import "../Pages/Dashboard.css";
import LoginTracker from "../Components/checkInLog/LogInTracker";
import HomeNav from "../Components/homeNav/HomeNav.js";
import RightBar from "../Components/rightBar/RightBar";
import gitLogo from "../Assests/git-icon.png"
import githubLogo from '../Assests/github-mark.png'
import markdownLogo from '../Assests/markdown-logo.png'


const apiUrl = process.env.REACT_APP_API_URL;

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  // const user = useContext(UserContext);

  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]); // Add this line

  const { user_id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick1 = (event) => {
    event.preventDefault();
    navigate(`/quizdash/1/${user_id}`);
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

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userDataResponse = await fetch(`${apiUrl}/users/${user_id}`);
  //       const userData = await userDataResponse.json();
  //       // console.log("User Data:", userData); // Log user data

  //       setUser(userData);
      
  //       // Fetch completed quizzes here and set them as an array
  //       const completedQuizzesResponse = await fetch(
  //         `${apiUrl}/users/completed-quizzes/${user_id}`
  //       );
  //       const completedQuizzesData = await completedQuizzesResponse.json();
  //       setCompletedQuizzes(completedQuizzesData); // Ensure this is an array
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [user_id]);
  


  return (

    <body>
  <div class="container-three-panel">
   
    <HomeNav/>
    <div class="content-panel"> 
    <div className="lesson-holder">
      <div className="main-header">
        <p className="main-title">Learning Journey</p>
      </div>
      <div className="module-grid">
      <div className="module-box">
        <div className="img-holder1">
          <img src={gitLogo} className="module-img1" alt="module-logo" onClick={handleButtonClick1}/>
        </div>

        <div className="module-text1">
          <h4>Module 1:</h4>
          <h5>Git Mastery</h5>
        </div> 
      </div>
      <div className="module-box">
        <div className="img-holder2">
          <img src={githubLogo} className="module-img2" alt="module-logo" />
        </div>
        <div className="module-text2">
          <h4>Module 2:</h4>
          <h5>Github Essentials</h5>
        </div> 
      </div>
      <div className="module-box">
        <div className="img-holder3">
          <img src={markdownLogo} className="module-img3" alt="module-logo" />
              </div>
              <div className="module-text3">
                <h4>Module 3:</h4>
                <h5>Markdown Files</h5>
              </div>
            </div>
          </div>
    </div>
    </div>

    <div class="right-panel">
      <RightBar user={user}/>
    </div>
  </div>
</body>
  );
}

export default Dashboard;

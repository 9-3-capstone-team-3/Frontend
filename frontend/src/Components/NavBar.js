import React from "react";
import { Link } from "react-router-dom";
import logo from '../Assests/text-icon.png';
import { useParams, useNavigate } from "react-router-dom";
import { logOut } from "../services/Firebase";
import { useContext, useState } from "react";
import { UserContext } from "../providers/userProvider.js";
import { useEffect } from "react";

import "../Components/NavBar.scss";

const apiUrl = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const { user_id } = useParams();
  const user = useContext(UserContext);
  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const navigate = useNavigate()

  console.log(user)

  const handleButtonClick = (quiz) => {
    setQuiz(quiz);
    console.log(quiz);
    // console.log(quiz.quiz_id)
    navigate(`/quizdash/${quiz.quiz_id}/${user_id}`);
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

  return (
    <nav className="navBar">
      <div className="logo">
          <Link className="nav-link" to="/">
              <img
                  className="logo"
                  src={logo}
                  alt="logo"
              ></img>
          </Link>
      </div>
      <div className="course-name">
        <h2 className="course-title">
          Git Mastery
        </h2>
      </div>

   
      <div className="navBar__subheader">Module 1</div>
      
      {quizzes &&
        quizzes.length > 0 &&
        quizzes
          .map((quiz, index) => (
            <div
              className="navBar__link"
              key={quiz.quiz_id}
              index={index}
              onClick={() => handleButtonClick(quiz)}>1.{index + 1}  {quiz.name}
            </div>
          ))}
      
      {/* <ul className="signout-button" onClick={logOut}>Sign Out</ul> */}
    </nav>
  );
}

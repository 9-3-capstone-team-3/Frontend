import React from "react";
import { Link } from "react-router-dom";
import logo from '../Assests/text-icon.png';
import "../Components/NavBar.css";
import { useParams } from "react-router-dom";
import { logOut } from "../services/Firebase";
import { useContext, useState } from "react";
import { UserContext } from "../providers/userProvider.js";
import { useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const { user_id } = useParams();
  const user = useContext(UserContext);
  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState([]);

  console.log(user)

  const handleButtonClick = (quiz) => {
    setQuiz(quiz);
    console.log(quiz);
    // console.log(quiz.quiz_id)
    // navigate(`/quizdash/${quiz.quiz_id}/${user_id}`);
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
    <nav className="nav-bar">
      <div className="logo">
        <Link className="nav-link" to="/">
          <img
            className="nav-logo"
            src={logo}
            alt="logo"
          ></img>
        </Link>
      </div>
      <br/>
      <div className="course-name"><h2 className="course-title">Git Mastery</h2></div>
      <div>
        <div className="level-one"><h2 className="level1">Level 1</h2></div>
          {quizzes &&
            quizzes.length > 0 &&
            quizzes
              .filter((quiz) => quiz.status_name === "Beginner")
              .map((quiz, index) => (
                <ul
                  className="nav-buttons"
                  key={quiz.quiz_id}
                  index={index}
                  onClick={() => handleButtonClick(quiz)}>1.{index + 1}  {quiz.name}
                </ul>
              ))}
        </div>
      <ul className="signout-button" onClick={logOut}>Sign Out</ul>
    </nav>
  );
}

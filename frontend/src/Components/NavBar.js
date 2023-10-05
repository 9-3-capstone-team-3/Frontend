import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/Logo2.png";
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
      <div id="logo">
        <Link className="nav-link" to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="150"
            height="100"
          ></img>
        </Link>
      </div>
      <br/>
      <div>
          {quizzes &&
            quizzes.length > 0 &&
            quizzes
              .filter((quiz) => quiz.status_name === "Beginner")
              .map((quiz, index) => (
                <ul
                  className="nav-buttons"
                  key={quiz.quiz_id}
                  onClick={() => handleButtonClick(quiz)}>{quiz.name}
                </ul>
              ))}
        </div>
      <ul className="signout-button" onClick={logOut}>Sign Out</ul>
    </nav>
  );
}

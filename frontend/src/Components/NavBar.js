import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/Logo2.png";
import "../Components/NavBar.css";
import { useParams } from "react-router-dom";
import { logOut } from "../services/Firebase";
import { useContext } from "react";
import { UserContext } from "../providers/userProvider.js";

export default function NavBar() {
  const { user_id } = useParams();
  const user = useContext(UserContext);

  console.log(user)


  return (
    <nav className="nav-bar">
      <div id="logo">
        <Link className="nav-link" to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="150"
            height="90"
          ></img>
        </Link>
      </div>

      <br></br>

      <Link className="home-link" to={`/dashboard/${user_id}`}>
        Home
      </Link>

      <br></br>

      <Link className="completed-link" to="/completed">
        Completed Quizzes
      </Link>

      <br></br>

      <Link className="leaderboard-link" to="/leaderboard">
        Leaderboard
      </Link>

      <br></br>

      <Link className="contact-link" to="/contact">
        Contact Us
      </Link>

      <br></br>

      <button onClick={logOut}>Sign Out</button>
    </nav>
  );
}

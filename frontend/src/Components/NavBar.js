import { Link } from "react-router-dom";
import logo from "../Assests/logo.png"
import "../Components/NavBar.css"


export default function NavBar() {

    return(
        <nav className="nav-bar">
            <div id="logo">   
                <Link className="nav-link" to="/">
                    <img className="logo" src={logo} alt='logo' width="120" height="70"></img>
                </Link>
            </div> 

            <br></br>

                <Link className="profile-link" to="/profile">
                    Profile
                </Link>

            <br></br>

                <Link className="questions-link" to="/questions">
                    Questions
                </Link>

            <br></br>

                <Link className="contact-link" to="/contact">
                    Contact
                </Link>

            <br></br>

                <Link className="leaderboard-link" to="/leaderboard">
                    Leaderboard
                </Link>

            <br></br>


        </nav>
    )
}
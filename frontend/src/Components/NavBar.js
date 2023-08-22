import { Link } from "react-router-dom";
import logo from "../Assests/logo.png"


export default function NavBar() {

    return(
        <nav className="nav-bar">
            <div id="logo">   
                <Link className="nav-link" to="/">
                    <img className="logo" src={logo} alt='logo' width="120" height="70"></img>
                </Link>
            </div> 

            <br></br>

                <Link className="pitch-link" to="/pitches?page=0">
                    Pitches
                </Link>

            <br></br>

                <Link className="shark-link" to="/sharks">
                    Sharks
                </Link>

            <br></br>

                <Link className="contact-link" to="/contact">
                    Contact
                </Link>

            <br></br>


        </nav>
    )
}
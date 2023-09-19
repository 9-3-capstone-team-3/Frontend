import { Link } from "react-router-dom";
import logo from "../Assests/Logo2.png"
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

                <Link className="home-link" to="/">
                    Home
                </Link>

            <br></br>

                <Link className="about-link" to="/about">
                    About us
                </Link>

            <br></br>

                <Link className="contact-link" to="/contact">
                    Contact
                </Link>

            <br></br>
        </nav>
    );
}
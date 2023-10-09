import { Link } from "react-router-dom"
import logo from '../../Assests/text-icon.png'
import { logOut } from "../../services/Firebase"
import { useParams } from "react-router-dom";
import './homeNav.css'

export default function HomeNav() {

    const { user_id } = useParams();

    return(
        <nav className="homeNav-container">
            <div className="logo">
                <Link className="nav-link" to="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                    ></img>
                </Link>
            </div>
            
            <div className="homeNav-links">

                <Link className="course-link" to={`/dashboard/${user_id}`}>
                    Courses
                </Link>

            <br></br>
            
                <Link className="aboutus-link" to={`/dashboard/${user_id}`}>
                    About Us
                </Link>

            <br></br>

                <Link className="contact-link" to="/completed">
                    Contact Us
                </Link>

            <br></br>

                <Link className="faq-link" to="/contact">
                    Resources
                </Link>

            <br></br>

            <button className="signout-link" onClick={logOut}>Sign Out</button>

            </div>
        </nav>
    )
}
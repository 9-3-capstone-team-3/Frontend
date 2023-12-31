import { useContext } from "react";
import { Link } from "react-router-dom"
import logo from '../../Assests/text-icon.png'
import { logOut } from "../../services/Firebase"
import { useParams } from "react-router-dom";
import {
    signInWithGoogle
  } from "../../services/Firebase.js";
import { UserContext } from "../../providers/userProvider";
  import './homeNav.scss'

export default function HomeNav() {
    const user = useContext(UserContext);

    return(
        <nav className="homeNav">
            <div className="logo">
                <Link className="nav-link" to="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                    ></img>
                </Link>
            </div>
            
            <div className="homeNav__links">
                <Link className="homeNav__link" to={`/dashboard`}>
                    Courses
                </Link>
                <Link className="homeNav__link"  to={'/aboutus'}>
                    About Us
                </Link>
                <Link className="homeNav__link"  to="/completed">
                    Contact Us
                </Link>
                <Link className="homeNav__link"  to="/contact">
                    Resources
                </Link>
            {user && 
            <button className="homeNav__link"  onClick={logOut}>
                Sign Out
            </button>
            }

            {!user &&  <button className="signout-link" onClick={signInWithGoogle}>
                Sign In
            </button> }

            </div>
        </nav>
    )
}
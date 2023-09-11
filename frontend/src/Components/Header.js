import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo1 from "../Assests/Logo1.png";

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">

            {/* Wrap the image inside the Link component */}
                <Link to="/">
                    <img src={Logo1} alt="Logo" className="logo" />
                </Link>
            </div>
                <Link className="signon-button" to="/signin">
                    Sign In / Create An Account
                </Link>
        </header>
    );
}
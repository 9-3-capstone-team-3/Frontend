import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo2 from "../Assests/Logo2.png";

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">

            
            </div>
                <Link className="signon-button" to="/signin">
                    Sign In / Create An Account
                </Link>
        </header>
    );
}
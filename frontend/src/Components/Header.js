import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../Assests/Logo2.png";

export default function Header() {
  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo2} alt="Logo" className="logo" width="150" height="100" />
        </Link>
        <div className="ml-auto">
          <Link className="btn btn-primary" to="/signin">
            Sign In / Create An Account
          </Link>
        </div>
      </div>
    </header>
  );
}

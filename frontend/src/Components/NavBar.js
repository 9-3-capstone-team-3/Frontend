import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="container-fluid bg-light py-4">
      </div>
      <div className="container">
        {/* Navbar Content */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav flex-column mt-5"> {/* Add mt-5 for margin-top */}
            <li className="nav-item border-top border-bottom mb-2"> {/* Add border-top and border-bottom to the "Home" Link */}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item border-bottom mb-2">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item border-bottom mb-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
